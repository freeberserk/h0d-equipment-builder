import assert from "node:assert/strict";
import vm from "node:vm";
import {readFileSync} from "node:fs";
const source=readFileSync(new URL("../scripts/h0d-equipment-builder.js",import.meta.url),"utf8");
const sample={
 key:"couteau-de-depecage",name:"Couteau canonique",kind:"weapon",templateKey:"item-arme",
 originKey:"dent-ambre",origin:"Dent d'Ambre",props:{H0D_Arme_Degats:"1d4"},
 catalogue:{visible_au_stock_standard:true,pret_pour_builder:true,generable_stock_aleatoire:true}
};
const restricted={...sample,key:"boss-restricted",name:"Boss réservé",
 catalogue:{visible_au_stock_standard:false,pret_pour_builder:true,generable_stock_aleatoire:false}};
const unfinished={...sample,key:"plan-echo",name:"Plan incomplet",
 catalogue:{visible_au_stock_standard:false,pret_pour_builder:false}};
const all=[sample,restricted,unfinished];
const api={
 getStatus:()=>({ready:true,references:all.length}),
 getDefinition:key=>all.find(d=>d.key===key)||null,
 getDefinitions:()=>all,
 getStockEligibleDefinitions:()=>[sample]
};
const ctx={foundry:{utils:{deepClone:structuredClone}},
 game:{modules:new Map([["h0d-catalogue",{active:true,api}]])},
 Hooks:{once:()=>{}},console};
ctx.globalThis=ctx;vm.createContext(ctx);
vm.runInContext(source.replace(/^import[^\n]*\n/gm,""),ctx);
const run=expr=>vm.runInContext(expr,ctx);
assert.equal(run('getDefinition("couteau-de-depecage").name'),"Couteau canonique");
assert.equal(run('getDefinition("arc-tribal").key'),"arc-tribal","Ancien objet toujours accessible en mode manuel.");
assert.equal(run('getReferenceCatalog().filter(d=>d.legacyUnmapped).length'),33);
assert.equal(run('stockEligibleDefinitions().length'),1);
assert.equal(run('stockEligibleDefinitions()[0].key'),sample.key);
assert.equal(run('selectStockCandidates({origin:"*",kind:"*",count:3}).length'),3);
assert.equal(run('selectStockCandidates({origin:"*",kind:"*",count:3}).every(d=>d.key==="couteau-de-depecage")'),true);
assert.equal(run('catalogueBridgeStatus().canonical'),3);
assert.equal(run('getReferenceCatalog().some(d=>d.key==="boss-restricted")'),true,
 "Les références réservées restent consultables en manuel.");
assert.equal(run('getReferenceCatalog().some(d=>d.key==="plan-echo")'),true,
 "Les plans incomplets restent visibles mais bloqués en création.");
ctx.custom=structuredClone(sample);ctx.custom.name="Définition concurrente";
run("registerDefinition(custom)");
assert.equal(run('getDefinition("couteau-de-depecage").name'),"Couteau canonique",
 "Une définition externe ne doit pas supplanter H0D Catalogue.");
ctx.game.modules.get("h0d-catalogue").active=false;
assert.equal(run('getDefinition("couteau-de-depecage").name'),"Définition concurrente",
 "Sans Catalogue, le mode historique reste un secours explicite.");
assert.equal(run('catalogueBridgeStatus().source'),"legacy-fallback");
console.log("OK — Catalogue prioritaire, 33 anciens isolés, stocks uniquement éligibles, aucune fusion silencieuse.");
