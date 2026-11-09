import assert from "node:assert/strict";
import vm from "node:vm";
import {readFileSync} from "node:fs";
const src=readFileSync(new URL("../scripts/h0d-equipment-builder.js",import.meta.url),"utf8");
const ctx={foundry:{utils:{deepClone:structuredClone}},game:{modules:new Map()},Hooks:{once:()=>{}},console};
ctx.globalThis=ctx;vm.createContext(ctx);
vm.runInContext(src.replace(/^import[^\n]*\n/gm,""),ctx);
const run=x=>vm.runInContext(x,ctx);
assert.equal(run('getDefinition("arc-tribal").props.H0D_Arme_Portee'),"12");
assert.equal(run('getDefinition("bouclier-leger").props.H0D_Armure_Bonus_Defense'),"1");
assert.match(run('getDefinition("bouclier-leger").props.H0D_Armure_Description'),/occupe une main/);
assert.equal(run('getDefinition("fronde").props.H0D_Arme_Portee'),"9");
assert.equal(run('getDefinition("fronde").legacyValidation.blocked'),false);
assert.equal(run('getDefinition("fronde").legacyValidation.source'),"H0D Catalogue:fronde-de-chasse");
assert.match(run('getDefinition("fronde").props.H0D_Arme_Notes'),/sans équivalence totale/);
assert.equal(run('getDefinition("arc-court").props.H0D_Arme_Portee'),"15");
assert.equal(run('getDefinition("arc-court").legacyValidation.blocked'),false);
assert.equal(run('getDefinition("arc-court").legacyValidation.status'),"portee_confirmee_mj_helix");
assert.equal(run('getDefinition("arbalete-legere").props.H0D_Arme_Portee'),"20");
assert.equal(run('getDefinition("arbalete-legere").legacyValidation.blocked'),false);
assert.equal(run('getDefinition("arbalete-legere").legacyValidation.status'),"portee_confirmee_mj");
assert.match(run('getDefinition("arbalete-legere").props.H0D_Arme_Notes'),/arc long de 25 m/);
const unresolved=["pistolet-ancien-faible"];
for(const key of unresolved){
  assert.equal(run(`getDefinition("${key}").props.H0D_Arme_Portee`),"0",key+" : ne pas inventer de portée");
  assert.equal(run(`getDefinition("${key}").legacyValidation.blocked`),true,key+" : génération bloquée");
  assert.match(run(`getDefinition("${key}").props.H0D_Arme_Notes`),/PORTÉE INCONNUE/);
}
assert.equal(run('getReferenceCatalog().length'),33,"Les 33 historiques restent consultables");
assert.equal(run('getReferenceCatalog().filter(x=>x.legacyUnmapped).length'),33,"Ne jamais assimiler par le nom");
assert.equal(run('stockEligibleDefinitions().length'),0,"Sans Catalogue, aucune ancienne référence ne va dans les stocks aléatoires");
assert.equal(run('getValidationReferences().filter(x=>x.legacyValidation?.blocked).length'),1);
run("templateState = ()=>({ok:true})");
for(const key of unresolved){
  await assert.rejects(run(`buildReferenceItem("${key}")`),/Équipement historique/);
}
assert.equal(run('getDefinition("arbalete-legere").legacyValidation.scope'),"portée uniquement");
assert.equal(run('getDefinition("pistolet-ancien-faible").legacyValidation.status'),"mis_de_cote_par_mj");
assert.equal(run('getDefinition("arc-court").legacyValidation.source'),"MJ - arc Helix : 15 m");
console.log("Équipement H0D : fronde à 9 m, pistolet toujours mis de côté, aucun stock arbitraire.");
