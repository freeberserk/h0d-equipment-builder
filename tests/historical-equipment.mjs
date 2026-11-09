import assert from "node:assert/strict";
import vm from "node:vm";
import {readFileSync} from "node:fs";
const source=readFileSync(new URL("../scripts/h0d-equipment-builder.js",import.meta.url),"utf8");
const ctx={foundry:{utils:{deepClone:structuredClone}},game:{modules:new Map()},Hooks:{once:()=>{}},console};
ctx.globalThis=ctx;vm.createContext(ctx);vm.runInContext(source.replace(/^import[^\n]*\n/gm,""),ctx);
const run=x=>vm.runInContext(x,ctx);
for(const key of ["arc-tribal","bouclier-leger","fronde","pistolet-ancien-faible","arbalete-legere"]){
  assert.equal(run(`getDefinition("${key}")`),null);
  await assert.rejects(run(`buildReferenceItem("${key}")`),/H0D Catalogue doit être installé/);
}
assert.equal(run("getReferenceCatalog().length"),0);
assert.equal(run("getValidationReferences().length"),0);
console.log("OK : pas de 33 historiques exécutables lorsque le Catalogue est absent.");
