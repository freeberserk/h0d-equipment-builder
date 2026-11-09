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
const unresolved=["arbalete-legere","fronde","pistolet-ancien-faible","arc-court"];
for(const key of unresolved){
  assert.equal(run(`getDefinition("${key}").props.H0D_Arme_Portee`),"0",key+" : ne pas inventer de portée");
  assert.equal(run(`getDefinition("${key}").legacyValidation.blocked`),true,key+" : génération bloquée");
  assert.match(run(`getDefinition("${key}").props.H0D_Arme_Notes`),/PORTÉE INCONNUE/);
}
assert.equal(run('getReferenceCatalog().length'),33,"Les 33 historiques restent consultables");
assert.equal(run('getReferenceCatalog().filter(x=>x.legacyUnmapped).length'),33,"Ne jamais assimiler par le nom");
assert.equal(run('stockEligibleDefinitions().length'),0,"Sans Catalogue, aucune ancienne référence ne va dans les stocks aléatoires");
assert.equal(run('getValidationReferences().filter(x=>x.legacyValidation?.blocked).length'),4);
run("templateState = ()=>({ok:true})");
for(const key of unresolved){
  await assert.rejects(run(`buildReferenceItem("${key}")`),/Portée non chiffrée/);
}
console.log("Équipement H0D : arc 12 m, bouclier +1, 4 portées inconnues bloquées, aucun stock arbitraire.");
