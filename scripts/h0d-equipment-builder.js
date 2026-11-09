import {ensureManagedLauncherMacro} from "./h0d-launcher-macro.js";
const MODULE_ID = "h0d-equipment-builder";
const MODULE_VERSION = "0.2.7";
const ROOT_FOLDER = "H0D — Équipement généré";
const STOCK_ROOT_FOLDER = "H0D — Stocks générés";
const REFERENCE_FOLDER = "H0D — Catalogue de validation";

const TEMPLATE_KEYS = {
  weapon: "item-arme",
  armor: "item-armure",
  object: "item-objet",
  resource: "item-ressource"
};

const KIND_LABELS = {
  weapon: "Armes",
  armor: "Armures & protections",
  object: "Objets",
  resource: "Ressources"
};

// Références historiques uniquement dans l'historique Git ; aucun stockage local.
const CATALOG = new Map(); // API de compatibilité vide, aucune référence parallèle.

function clone(v) { return foundry.utils.deepClone(v); }
function esc(v) { return foundry.utils.escapeHTML(String(v ?? "")); }
function notify(type, msg) { ui.notifications?.[type]?.(msg); }

function tmApi() {
  const mod = game.modules?.get("h0d-template-manager");
  return mod?.active && mod.api ? mod.api : null;
}

function template(key) {
  try { return tmApi()?.getTemplate?.(key) ?? null; }
  catch (err) {
    console.warn(`${MODULE_ID} | template ${key}`, err);
    return null;
  }
}

function templateVersion(t) {
  return Number(t?.system?.templateSystemUniqueVersion ?? 0);
}

function templateState() {
  if (!tmApi()) return {ok:false, message:"H0D Template Manager v0.3.0+ est requis."};
  const missing = Object.values(TEMPLATE_KEYS).filter(key => !template(key));
  if (missing.length) return {ok:false, message:`Templates manquants : ${missing.join(", ")}`};
  return {ok:true, message:"Arme · Armure · Objet · Ressource disponibles"};
}

function systemFromTemplate(t) {
  const s = clone(t.system ?? {});
  s.template = t.id;
  s.templateSystemUniqueVersion = templateVersion(t);
  if (Object.prototype.hasOwnProperty.call(s, "uniqueId")) s.uniqueId = foundry.utils.randomID();
  return s;
}

async function forceTemplateAndProps(doc, t, props) {
  const base = clone(t.system ?? {});
  base.template = t.id;
  base.templateSystemUniqueVersion = templateVersion(t);
  if (Object.prototype.hasOwnProperty.call(base, "uniqueId")) {
    base.uniqueId = doc.system?.uniqueId || foundry.utils.randomID();
  }

  // 1) Appliquer réellement le template CSB.
  await doc.update({system:base});

  // 2) Réinjecter les données après initialisation du template.
  const merged = foundry.utils.mergeObject(
    clone(doc.system?.props ?? {}),
    clone(props ?? {}),
    {inplace:false, insertKeys:true, overwrite:true}
  );

  await doc.update({
    "system.template": t.id,
    "system.templateSystemUniqueVersion": templateVersion(t),
    "system.props": merged
  });
}

async function ensureItemFolder(name, parent=null) {
  let folder = game.folders?.find(f =>
    f.type === "Item" &&
    f.name === name &&
    String(f.folder?.id ?? f.folder ?? "") === String(parent ?? "")
  );
  if (!folder) folder = await Folder.create({name, type:"Item", folder:parent});
  return folder;
}

/** H0D Catalogue est la seule source de référence exécutable. */
function h0dCatalogueApi(){
  const mod=game.modules?.get("h0d-catalogue");
  const api=mod?.active?(mod.api??game.h0dCatalogue):null;
  return api?.getStatus?.()?.ready?api:null;
}
function requireCatalogue(){
  const api=h0dCatalogueApi();
  if(!api)throw new Error("H0D Catalogue doit être installé, activé et prêt avant de générer un équipement.");
  return api;
}
function effectiveDefinitions({includeLegacy=false,includeRestricted=true}={}){
  return h0dCatalogueApi()?.getDefinitions({includeRestricted})??[];
}
function stockEligibleDefinitions(){return h0dCatalogueApi()?.getStockEligibleDefinitions?.()??[];}
function catalogueBridgeStatus(){
  const api=h0dCatalogueApi();
  return {ready:!!api,canonical:api?.getStatus?.().references??0,legacyUnmapped:[],
    stockEligible:stockEligibleDefinitions().length,source:api?"h0d-catalogue":"catalogue-absent"};
}
function getDefinition(key){return h0dCatalogueApi()?.getDefinition(key)??null;}
function getReferenceCatalog(){return effectiveDefinitions();}
function getValidationReferences() {
  return getReferenceCatalog().map(d => ({
    key:d.key,
    name:d.name,
    kind:d.kind,
    templateKey:d.templateKey,
    origin:d.origin,
    expectedProps:clone(d.props),
    legacyUnmapped:d.legacyUnmapped===true,
    legacyValidation:clone(d.legacyValidation??null),
    source:d.source,
    tier:d.tier
  }));
}

/** API historique conservée sans mémorisation de définitions concurrentes. */
function registerDefinition(def){
  if(!def?.key)throw new Error("Référence Catalogue requise.");
  const canonical=getDefinition(def.key);
  if(!canonical)throw new Error("Référence non présente dans H0D Catalogue : "+def.key);
  return canonical;
}
function registerDefinitions(defs=[]){return defs.map(registerDefinition);}
function itemCreateData(def, {folderId=null, img=null, stockId=null, copyIndex=null}={}) {
  const t = template(def.templateKey);
  if (!t) throw new Error(`Template canonique introuvable : ${def.templateKey}`);

  return {
    name:def.name,
    type:"equippableItem",
    img:img || def.img || t.img || "icons/svg/item-bag.svg",
    folder:folderId,
    system:systemFromTemplate(t),
    flags:{
      [MODULE_ID]:{
        generated:true,
        catalogKey:def.key,
        kind:def.kind,
        origin:def.origin,
        tier:def.tier ?? 1,
        source:def.source,
        sourceTemplateId:t.id,
        stockId,
        copyIndex
      }
    }
  };
}

async function applyDefinition(doc, def) {
  const t = template(def.templateKey);
  if (!t) throw new Error(`Template canonique introuvable : ${def.templateKey}`);
  await forceTemplateAndProps(doc, t, def.props ?? {});
  await doc.update({
    name:def.name,
    [`flags.${MODULE_ID}.generated`]:true,
    [`flags.${MODULE_ID}.catalogKey`]:def.key,
    [`flags.${MODULE_ID}.kind`]:def.kind,
    [`flags.${MODULE_ID}.origin`]:def.origin,
    [`flags.${MODULE_ID}.tier`]:def.tier ?? 1,
    [`flags.${MODULE_ID}.source`]:def.source,
    [`flags.${MODULE_ID}.sourceTemplateId`]:t.id
  });
  return doc;
}

async function buildReferenceItem(key, {mode="update"}={}) {
  requireCatalogue();
  const state = templateState();
  if (!state.ok) throw new Error(state.message);

  const def = getDefinition(key);
  if (!def) throw new Error(`Référence absente de H0D Catalogue : ${key}`);
  if(def.legacyValidation?.blocked===true)throw new Error(`Équipement historique ${key} : ${def.legacyValidation.reason}`);
  if(def.catalogue?.pret_pour_builder===false)throw new Error(`Plan non finalisé dans H0D Catalogue : ${key}`);
  

  const root = await ensureItemFolder(ROOT_FOLDER);
  const kindFolder = await ensureItemFolder(KIND_LABELS[def.kind] || "Autres", root.id);
  const originFolder = await ensureItemFolder(def.origin || "Sans origine", kindFolder.id);

  let item = Array.from(game.items ?? []).find(i =>
    i.getFlag(MODULE_ID, "generated") === true &&
    i.getFlag(MODULE_ID, "catalogKey") === key &&
    !i.getFlag(MODULE_ID, "stockId")
  );

  if (item && mode === "skip") return item;
  if (item && mode === "replace") {
    await item.delete();
    item = null;
  }

  const preservedImage = item?.img ?? null;

  if (!item) {
    const [created] = await Item.implementation.createDocuments([
      itemCreateData(def, {folderId:originFolder.id, img:preservedImage})
    ]);
    item = created;
  }

  await applyDefinition(item, def);
  await item.update({
    folder:originFolder.id,
    img:preservedImage || item.img
  });

  return item;
}

function shuffle(values) {
  const arr = values.slice();
  for (let i=arr.length-1; i>0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function selectStockCandidates({origin="*", kind="*", count=6}={}) {
  let candidates = stockEligibleDefinitions().filter(d =>
    (origin === "*" || d.originKey === origin) &&
    (kind === "*" || d.kind === kind)
  );

  if (!candidates.length) return [];

  const result = [];
  let pool = [];
  while (result.length < count) {
    if (!pool.length) pool = shuffle(candidates);
    result.push(clone(pool.pop()));
  }
  return result;
}

function timestampLabel() {
  const d = new Date();
  const pad = n => String(n).padStart(2,"0");
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}h${pad(d.getMinutes())}`;
}

async function buildStock({origin="caravanes-libres", kind="*", count=6, label=""}={}) {
  const state = templateState();
  if (!state.ok) throw new Error(state.message);

  count = Math.max(1, Math.min(30, Number(count) || 6));
  const defs = selectStockCandidates({origin, kind, count});
  if (!defs.length) throw new Error("Aucun équipement ne correspond aux filtres du stock.");

  const root = await ensureItemFolder(STOCK_ROOT_FOLDER);
  const originLabel = origin === "*"
    ? "Stock mixte"
    : (defs[0]?.origin || origin);
  const folder = await ensureItemFolder(
    label?.trim() || `${originLabel} — ${timestampLabel()}`,
    root.id
  );

  const stockId = foundry.utils.randomID();
  const payload = defs.map((def, index) =>
    itemCreateData(def, {folderId:folder.id, stockId, copyIndex:index+1})
  );

  const docs = await Item.implementation.createDocuments(payload);
  for (let i=0; i<docs.length; i++) {
    await applyDefinition(docs[i], defs[i]);
    await docs[i].update({
      folder:folder.id,
      [`flags.${MODULE_ID}.stockId`]:stockId,
      [`flags.${MODULE_ID}.copyIndex`]:i+1
    });
  }

  const rows = docs.map(doc => `<li>@UUID[${doc.uuid}]{${esc(doc.name)}}</li>`).join("");
  await ChatMessage.create({
    speaker:{alias:"H0D Equipment Builder"},
    content:`<h2>Stock généré — ${esc(originLabel)}</h2><p>${docs.length} équipement(s)</p><ul>${rows}</ul>`
  });

  return {folder, items:docs, stockId};
}

async function buildValidationCatalog() {
  const state = templateState();
  if (!state.ok) throw new Error(state.message);

  const root = await ensureItemFolder(REFERENCE_FOLDER);
  let created=0, updated=0;

  const candidates=stockEligibleDefinitions();
  for (const def of candidates) {
    let item = Array.from(game.items ?? []).find(i =>
      i.folder?.id === root.id &&
      i.getFlag(MODULE_ID, "validationReference") === true &&
      i.getFlag(MODULE_ID, "catalogKey") === def.key
    );

    const preservedImage = item?.img ?? null;
    if (!item) {
      const [doc] = await Item.implementation.createDocuments([
        itemCreateData(def, {folderId:root.id})
      ]);
      item = doc;
      created++;
    } else {
      updated++;
    }

    await applyDefinition(item, def);
    await item.update({
      folder:root.id,
      img:preservedImage || item.img,
      [`flags.${MODULE_ID}.validationReference`]:true
    });
  }

  return {folder:root, created, updated, total:candidates.length};
}

function catalogOptions() {
  const groups = new Map();
  for (const def of effectiveDefinitions().filter(d=>d.catalogue?.pret_pour_builder!==false)) {
    const group = `${def.origin} — ${def.kindLabel || KIND_LABELS[def.kind] || def.kind}`;
    if (!groups.has(group)) groups.set(group, []);
    groups.get(group).push(def);
  }

  let html = `<option value="">— Choisir —</option>`;
  for (const [group, defs] of groups.entries()) {
    html += `<optgroup label="${esc(group)}">`;
    for (const d of defs) html += `<option value="${esc(d.key)}">${esc(d.name)}${d.legacyValidation?.blocked?" [portée inconnue — non générable]":d.legacyUnmapped?" [historique à rapprocher]":d.catalogue?.visible_au_stock_standard===false?" [réservé — manuel]":""}</option>`;
    html += `</optgroup>`;
  }
  return html;
}

function originOptions() {
  const origins = new Map();
  for (const d of stockEligibleDefinitions()) origins.set(d.originKey, d.origin);

  let html = `<option value="caravanes-libres">Caravanes Libres</option>`;
  html += `<option value="*">Tout le catalogue</option>`;
  for (const [key,label] of Array.from(origins.entries()).sort((a,b)=>a[1].localeCompare(b[1],"fr"))) {
    if (key === "caravanes-libres") continue;
    html += `<option value="${esc(key)}">${esc(label)}</option>`;
  }
  return html;
}

async function openBuilder() {
  if (!game.user?.isGM) return notify("warn","H0D Equipment Builder est réservé au MJ.");

  const state = templateState();
  const catalogData=effectiveDefinitions();
  const stats = {
    weapon:catalogData.filter(x=>x.kind==="weapon").length,
    armor:catalogData.filter(x=>x.kind==="armor").length,
    object:catalogData.filter(x=>x.kind==="object").length,
    resource:catalogData.filter(x=>x.kind==="resource").length
  };

  await foundry.applications.api.DialogV2.wait({
    window:{title:`H0D Equipment Builder v${MODULE_VERSION}`},
    content:`
      <div class="h0d-equipment-builder" style="display:flex;flex-direction:column;gap:10px;">
        <h2>H0D Equipment Builder <small>v${MODULE_VERSION}</small></h2>
        <p><strong>Templates :</strong> ${state.ok ? "✅" : "❌"} ${esc(state.message)}</p>
        <p>
          <strong>Référentiel :</strong> ${catalogData.length} références —
          ${stats.weapon} armes · ${stats.armor} protections · ${stats.object} objets · ${stats.resource} ressources.
        </p>

        <div class="form-group">
          <label>Mode</label>
          <select name="buildMode">
            <option value="single">Créer / mettre à jour un équipement précis</option>
            <option value="stock">Générer un stock de vendeur / caravane</option>
            <option value="validation">Construire le catalogue de validation</option>
          </select>
        </div>

        <hr>

        <div class="form-group">
          <label>Équipement précis</label>
          <select name="catalogKey">${catalogOptions()}</select>
        </div>

        <div class="form-group">
          <label>Si la référence existe déjà</label>
          <select name="existingMode">
            <option value="skip">Créer si absent / conserver si présent</option>
            <option value="update">Mettre à jour (conserve l’image)</option>
            <option value="replace">Recréer</option>
          </select>
        </div>

        <hr>

        <div class="form-group">
          <label>Origine du stock</label>
          <select name="origin">${originOptions()}</select>
        </div>

        <div class="form-group">
          <label>Type de stock</label>
          <select name="kind">
            <option value="*">Tout équipement</option>
            <option value="weapon">Armes</option>
            <option value="armor">Armures / protections</option>
            <option value="object">Objets</option>
            <option value="resource">Ressources</option>
          </select>
        </div>

        <div class="form-group">
          <label>Nombre d’entrées</label>
          <input type="number" name="count" value="6" min="1" max="30">
        </div>

        <div class="form-group">
          <label>Nom du stock (optionnel)</label>
          <input type="text" name="stockLabel" placeholder="Ex. Marchand itinérant — Gorges du Sud">
        </div>

        <p style="opacity:.75">
          Source : ${h0dCatalogueApi()?"H0D Catalogue canonique":"H0D Catalogue INDISPONIBLE — génération interdite"}.
          Les stocks aléatoires excluent les articles réservés et les plans incomplets.
        </p>
        <button type="button" data-h0d-run><i class="fa-solid fa-screwdriver-wrench"></i> Générer</button>
        <p data-h0d-status role="status" aria-live="polite" style="min-height:1.2em;margin:0;opacity:.8">Tu peux créer plusieurs équipements sans fermer cette fenêtre.</p>
      </div>`,
    buttons:[{action:"close",label:"Fermer",icon:"fa-solid fa-xmark"}],
    rejectClose:false,
    render:(_event,dialog)=>{
      const root=dialog.element?.querySelector(".h0d-equipment-builder");
      const button=root?.querySelector("[data-h0d-run]");
      const status=root?.querySelector("[data-h0d-status]");
      if(!button||!status||button.dataset.ready==="1")return;
      button.dataset.ready="1";
      let busy=false;
      button.addEventListener("click",async()=>{
        if(busy)return;
        const form=dialog.element?.querySelector("form");
        if(!form)return;
        const v=Object.fromEntries(new FormData(form).entries());
        busy=true;button.disabled=true;button.textContent="Génération en cours…";
        status.textContent="Opération en cours…";
        try{
          if(v.buildMode==="single"){
            if(!v.catalogKey){status.textContent="Choisis une référence d'équipement.";return;}
            const mode=String(v.existingMode||"skip");
            if(mode==="update"||mode==="replace"){
              const confirmed=await foundry.applications.api.DialogV2.confirm({
                window:{title:"H0D Équipement — Confirmation"},
                content:"<p>Cette action modifie ou recrée une référence d'équipement existante. Confirmer ?</p>",
                yes:{label:"Confirmer",icon:"fa-solid fa-triangle-exclamation"},no:{label:"Annuler"}
              });
              if(!confirmed){status.textContent="Modification annulée.";return;}
            }
            const item=await buildReferenceItem(String(v.catalogKey),{mode});
            item?.sheet?.render(true);
            status.textContent=item?"Équipement prêt : "+item.name+". Choisis le suivant.":"Action terminée.";
            if(item)notify("info","Équipement prêt : "+item.name);
          }else if(v.buildMode==="stock"){
            const stock=await buildStock({
              origin:String(v.origin||"caravanes-libres"),kind:String(v.kind||"*"),
              count:Number(v.count||6),label:String(v.stockLabel||"")
            });
            status.textContent="Stock créé : "+stock.items.length+" équipements. Tu peux continuer.";
            notify("info","Stock créé : "+stock.items.length+" équipement(s).");
          }else if(v.buildMode==="validation"){
            const confirmed=await foundry.applications.api.DialogV2.confirm({
              window:{title:"H0D — Catalogue de validation"},
              content:"<p>Construire / actualiser le catalogue de validation d'équipement ?</p>",
              yes:{label:"Confirmer"},no:{label:"Annuler"}
            });
            if(!confirmed){status.textContent="Opération annulée.";return;}
            const report=await buildValidationCatalog();
            status.textContent="Catalogue : "+report.total+" références ("+report.created+" créées, "+report.updated+" actualisées).";
            notify("info",status.textContent);
          }else status.textContent="Choisis un mode de génération valide.";
        }catch(err){
          console.error(MODULE_ID+" | génération persistante",err);
          status.textContent="Erreur : "+(err?.message??err);
          notify("error","H0D Equipment Builder : "+(err?.message??err));
        }finally{
          busy=false;button.disabled=false;
          button.innerHTML='<i class="fa-solid fa-screwdriver-wrench"></i> Générer';
        }
      });
    }
  });
}

async function ensureLauncherMacro() {
  return ensureManagedLauncherMacro({
    moduleId:MODULE_ID,
    name:"H0D — Générateur équipement",
    command:"game.h0dEquipmentBuilder.open();",
    img:"icons/svg/chest.svg",
    notify:notify
  });
}

Hooks.once("ready", async () => {
  const api = {
    open:openBuilder,
    buildItem:buildReferenceItem,
    buildStock,
    buildValidationCatalog,
    registerDefinition,
    registerDefinitions,
    getDefinition,
    getReferenceCatalog,
    getStandardStockDefinitions:stockEligibleDefinitions,
    catalogueBridgeStatus,
    getValidationReferences,
    catalog:CATALOG,
    templateState,
    version:MODULE_VERSION
  };

  const mod = game.modules.get(MODULE_ID);
  if (mod) mod.api = api;
  game.h0dEquipmentBuilder = api;

  await ensureLauncherMacro();

  if (game.user?.isGM) {
    console.log(`${MODULE_ID} | v${MODULE_VERSION} prêt — lecture directe de H0D Catalogue.`);
  }
});
