import assert from "node:assert/strict";
import vm from "node:vm";
import {readFileSync} from "node:fs";
const source=readFileSync(new URL("../scripts/h0d-equipment-builder.js",import.meta.url),"utf8");
const sample={key:"epaulieres-de-route",name:"Épaulières",kind:"armor",templateKey:"item-armure",props:{H0D_Armure_Bonus_Defense:0}};
let current=structuredClone(sample);
const api={getStatus:()=>({ready:true,references:1}),getDefinition:k=>k===sample.key?structuredClone(current):null,
  getDefinitions:()=>[structuredClone(current)],getStockEligibleDefinitions:()=>[]};
const ctx={foundry:{utils:{deepClone:structuredClone}},
 game:{modules:new Map([["h0d-catalogue",{active:true,api}]])},Hooks:{once:()=>{}},console};
ctx.globalThis=ctx;vm.createContext(ctx);vm.runInContext(source.replace(/^import[^\n]*\n/gm,""),ctx);
const run=x=>vm.runInContext(x,ctx);
assert.equal(run('getDefinition("epaulieres-de-route").kind'),"armor");
assert.equal(run('getDefinition("arc-tribal")'),null);
assert.equal(run("getReferenceCatalog().length"),1);
assert.equal(run("catalogueBridgeStatus().source"),"h0d-catalogue");
assert.equal(run('registerDefinition({key:"epaulieres-de-route",name:"FAUX"}).name'),"Épaulières");
assert.throws(()=>run('registerDefinition({key:"introuvable"})'),/Référence non présente/);
current.props.H0D_Armure_Bonus_Defense=2;
assert.equal(run('getDefinition("epaulieres-de-route").props.H0D_Armure_Bonus_Defense'),2);
ctx.game.modules.get("h0d-catalogue").active=false;
assert.equal(run('getDefinition("epaulieres-de-route")'),null);
assert.equal(run("getReferenceCatalog().length"),0);
assert.equal(run("stockEligibleDefinitions().length"),0);
assert.equal(run("catalogueBridgeStatus().source"),"catalogue-absent");
assert.throws(()=>run("requireCatalogue()"),/H0D Catalogue doit être installé/);
console.log("OK : seule source H0D Catalogue, sans fallback ni copie.");
