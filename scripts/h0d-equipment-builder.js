const MODULE_ID = "h0d-equipment-builder";
const MODULE_VERSION = "0.1.0";
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

/*
 * v0.1.0 : catalogue de départ volontairement limité aux équipements
 * déjà validés par le Faction Builder Menace 1.
 *
 * Après ouverture de la Forge ECHO, ce catalogue pourra recevoir :
 * - paliers de qualité ;
 * - améliorations / modules ;
 * - prototypes ;
 * - équipements antiques / ECHO ;
 * - règles de disponibilité / prix / ressources.
 */
const STARTER_CATALOG = [
  {
    "key": "arbalete-legere",
    "name": "Arbalète légère",
    "kind": "weapon",
    "kindLabel": "Arme",
    "templateKey": "item-arme",
    "originKey": "caravanes-libres",
    "origin": "Caravanes Libres",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Arme_Categorie": "distance",
      "H0D_Arme_Carac_Attaque": "aucune",
      "H0D_Arme_Carac_Degats": "aucune",
      "H0D_Arme_Bonus_Attaque": "0",
      "H0D_Arme_Degats": "1d6",
      "H0D_Arme_Bonus_Degats": "0",
      "H0D_Arme_Type_Degats": "Perforant",
      "H0D_Arme_Portee": "0",
      "H0D_Arme_Mains": "1",
      "H0D_Arme_Critique_Seuil": "20",
      "H0D_Arme_Critique_Multiplicateur": "2",
      "H0D_Arme_Equipee": true,
      "H0D_Stockage": "PJ",
      "H0D_Arme_Active": true,
      "H0D_Arme_Encombrement": "0",
      "H0D_Arme_Zone": "",
      "H0D_Arme_Mode_Munition": "Aucune",
      "H0D_Arme_Type_Munition": "Fleche",
      "H0D_Arme_Consommation_Munition": "1",
      "H0D_Arme_Recharge": "",
      "H0D_Arme_Munitions": "0",
      "H0D_Arme_Munitions_Max": "0",
      "H0D_Arme_Element": "Aucun",
      "H0D_Arme_Origine": "Caravanes Libres",
      "H0D_Arme_Cout": "",
      "H0D_Arme_Traits_Table": {},
      "H0D_Arme_Effet_Special": "",
      "H0D_Arme_Notes": "Attaque principale du profil : Arbalète légère / couteau."
    }
  },
  {
    "key": "cape-voyage",
    "name": "Cape de voyage",
    "kind": "object",
    "kindLabel": "Objet",
    "templateKey": "item-objet",
    "originKey": "caravanes-libres",
    "origin": "Caravanes Libres",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Objet_Type": "Divers",
      "H0D_Objet_Sous_Type": "Cape de voyage",
      "H0D_Objet_Quantite": "1",
      "H0D_Stockage": "PJ",
      "H0D_Objet_Actif": false,
      "H0D_Objet_Identifie": true,
      "H0D_Objet_Charge_Unitaire": "0",
      "H0D_Objet_Valeur": "0",
      "H0D_Objet_Utilisations": "0",
      "H0D_Objet_Utilisations_Max": "0",
      "H0D_Objet_Recharge": "",
      "H0D_Objet_Etat": "Intact",
      "H0D_Objet_Origine": "Caravanes Libres",
      "H0D_Objet_Compatibilite": "",
      "H0D_Objet_Effet": "",
      "H0D_Objet_Description": "Équipement de voyage du messager.",
      "H0D_Objet_Traits_Table": {},
      "H0D_Objet_Munition_Active": false,
      "H0D_Objet_Munition_Famille": "Fleche",
      "H0D_Objet_Munition_Element": "Aucun",
      "H0D_Objet_Munition_Recuperable": false,
      "H0D_Objet_Munition_Bonus_Attaque": "0",
      "H0D_Objet_Munition_Bonus_Degats": "0",
      "H0D_Objet_Munition_Type_Degats": "Perforant",
      "H0D_Objet_Munition_Anti_Blindage": "0",
      "H0D_Objet_Munition_Effet_Court": ""
    }
  },
  {
    "key": "couteau-utilitaire",
    "name": "Couteau utilitaire",
    "kind": "object",
    "kindLabel": "Objet",
    "templateKey": "item-objet",
    "originKey": "caravanes-libres",
    "origin": "Caravanes Libres",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Objet_Type": "Outil",
      "H0D_Objet_Sous_Type": "Couteau utilitaire",
      "H0D_Objet_Quantite": "1",
      "H0D_Stockage": "PJ",
      "H0D_Objet_Actif": false,
      "H0D_Objet_Identifie": true,
      "H0D_Objet_Charge_Unitaire": "0",
      "H0D_Objet_Valeur": "0",
      "H0D_Objet_Utilisations": "0",
      "H0D_Objet_Utilisations_Max": "0",
      "H0D_Objet_Recharge": "",
      "H0D_Objet_Etat": "Intact",
      "H0D_Objet_Origine": "Caravanes Libres",
      "H0D_Objet_Compatibilite": "",
      "H0D_Objet_Effet": "",
      "H0D_Objet_Description": "Équipement associé du Messager de caravane.",
      "H0D_Objet_Traits_Table": {},
      "H0D_Objet_Munition_Active": false,
      "H0D_Objet_Munition_Famille": "Fleche",
      "H0D_Objet_Munition_Element": "Aucun",
      "H0D_Objet_Munition_Recuperable": false,
      "H0D_Objet_Munition_Bonus_Attaque": "0",
      "H0D_Objet_Munition_Bonus_Degats": "0",
      "H0D_Objet_Munition_Type_Degats": "Perforant",
      "H0D_Objet_Munition_Anti_Blindage": "0",
      "H0D_Objet_Munition_Effet_Court": ""
    }
  },
  {
    "key": "sacoche-pieces",
    "name": "Sacoche de pièces",
    "kind": "object",
    "kindLabel": "Objet",
    "templateKey": "item-objet",
    "originKey": "caravanes-libres",
    "origin": "Caravanes Libres",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Objet_Type": "Divers",
      "H0D_Objet_Sous_Type": "Sacoche",
      "H0D_Objet_Quantite": "1",
      "H0D_Stockage": "PJ",
      "H0D_Objet_Actif": false,
      "H0D_Objet_Identifie": true,
      "H0D_Objet_Charge_Unitaire": "0",
      "H0D_Objet_Valeur": "0",
      "H0D_Objet_Utilisations": "0",
      "H0D_Objet_Utilisations_Max": "0",
      "H0D_Objet_Recharge": "",
      "H0D_Objet_Etat": "Intact",
      "H0D_Objet_Origine": "Caravanes Libres",
      "H0D_Objet_Compatibilite": "",
      "H0D_Objet_Effet": "",
      "H0D_Objet_Description": "Sacoche de pièces du messager.",
      "H0D_Objet_Traits_Table": {},
      "H0D_Objet_Munition_Active": false,
      "H0D_Objet_Munition_Famille": "Fleche",
      "H0D_Objet_Munition_Element": "Aucun",
      "H0D_Objet_Munition_Recuperable": false,
      "H0D_Objet_Munition_Bonus_Attaque": "0",
      "H0D_Objet_Munition_Bonus_Degats": "0",
      "H0D_Objet_Munition_Type_Degats": "Perforant",
      "H0D_Objet_Munition_Anti_Blindage": "0",
      "H0D_Objet_Munition_Effet_Court": ""
    }
  },
  {
    "key": "arc-tribal",
    "name": "Arc tribal",
    "kind": "weapon",
    "kindLabel": "Arme",
    "templateKey": "item-arme",
    "originKey": "dent-ambre",
    "origin": "Clan de la Dent d'Ambre",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Arme_Categorie": "distance",
      "H0D_Arme_Carac_Attaque": "aucune",
      "H0D_Arme_Carac_Degats": "aucune",
      "H0D_Arme_Bonus_Attaque": "0",
      "H0D_Arme_Degats": "1d6",
      "H0D_Arme_Bonus_Degats": "0",
      "H0D_Arme_Type_Degats": "Perforant",
      "H0D_Arme_Portee": "0",
      "H0D_Arme_Mains": "1",
      "H0D_Arme_Critique_Seuil": "20",
      "H0D_Arme_Critique_Multiplicateur": "2",
      "H0D_Arme_Equipee": true,
      "H0D_Stockage": "PJ",
      "H0D_Arme_Active": true,
      "H0D_Arme_Encombrement": "0",
      "H0D_Arme_Zone": "",
      "H0D_Arme_Mode_Munition": "Aucune",
      "H0D_Arme_Type_Munition": "Fleche",
      "H0D_Arme_Consommation_Munition": "1",
      "H0D_Arme_Recharge": "",
      "H0D_Arme_Munitions": "0",
      "H0D_Arme_Munitions_Max": "0",
      "H0D_Arme_Element": "Aucun",
      "H0D_Arme_Origine": "Clan de la Dent d'Ambre",
      "H0D_Arme_Cout": "",
      "H0D_Arme_Traits_Table": {},
      "H0D_Arme_Effet_Special": "",
      "H0D_Arme_Notes": "Attaque principale du profil : Arc / lance courte."
    }
  },
  {
    "key": "lance-courte",
    "name": "Lance courte",
    "kind": "weapon",
    "kindLabel": "Arme",
    "templateKey": "item-arme",
    "originKey": "dent-ambre",
    "origin": "Clan de la Dent d'Ambre",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Arme_Categorie": "melee",
      "H0D_Arme_Carac_Attaque": "aucune",
      "H0D_Arme_Carac_Degats": "aucune",
      "H0D_Arme_Bonus_Attaque": "0",
      "H0D_Arme_Degats": "1d6",
      "H0D_Arme_Bonus_Degats": "0",
      "H0D_Arme_Type_Degats": "Perforant",
      "H0D_Arme_Portee": "0",
      "H0D_Arme_Mains": "1",
      "H0D_Arme_Critique_Seuil": "20",
      "H0D_Arme_Critique_Multiplicateur": "2",
      "H0D_Arme_Equipee": true,
      "H0D_Stockage": "PJ",
      "H0D_Arme_Active": true,
      "H0D_Arme_Encombrement": "0",
      "H0D_Arme_Zone": "",
      "H0D_Arme_Mode_Munition": "Aucune",
      "H0D_Arme_Type_Munition": "Fleche",
      "H0D_Arme_Consommation_Munition": "1",
      "H0D_Arme_Recharge": "",
      "H0D_Arme_Munitions": "0",
      "H0D_Arme_Munitions_Max": "0",
      "H0D_Arme_Element": "Aucun",
      "H0D_Arme_Origine": "Clan de la Dent d'Ambre",
      "H0D_Arme_Cout": "",
      "H0D_Arme_Traits_Table": {},
      "H0D_Arme_Effet_Special": "",
      "H0D_Arme_Notes": "Attaque principale du profil : Arc / lance courte."
    }
  },
  {
    "key": "armure-legere-cuir-machine",
    "name": "Armure légère de cuir/machine",
    "kind": "armor",
    "kindLabel": "Armure / protection",
    "templateKey": "item-armure",
    "originKey": "dent-ambre",
    "origin": "Clan de la Dent d'Ambre",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Armure_Type": "armure",
      "H0D_Armure_Zone": "corps",
      "H0D_Armure_Active": true,
      "H0D_Armure_Bonus_Defense": "0",
      "H0D_Armure_Encombrement": "0",
      "H0D_Armure_Malus": "",
      "H0D_Stockage": "PJ",
      "H0D_Armure_Resistances": "",
      "H0D_Armure_Resistance_Feu": "0",
      "H0D_Armure_Resistance_Gel": "0",
      "H0D_Armure_Resistance_Choc": "0",
      "H0D_Armure_Resistance_Acide": "0",
      "H0D_Armure_Etat": "",
      "H0D_Armure_Origine": "Clan de la Dent d'Ambre",
      "H0D_Armure_Description": "Équipement associé du Chasseur novice.",
      "H0D_Armure_Traits_Table": {}
    }
  },
  {
    "key": "couteau-chasse",
    "name": "Couteau de chasse",
    "kind": "object",
    "kindLabel": "Objet",
    "templateKey": "item-objet",
    "originKey": "dent-ambre",
    "origin": "Clan de la Dent d'Ambre",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Objet_Type": "Outil",
      "H0D_Objet_Sous_Type": "Couteau de chasse",
      "H0D_Objet_Quantite": "1",
      "H0D_Stockage": "PJ",
      "H0D_Objet_Actif": false,
      "H0D_Objet_Identifie": true,
      "H0D_Objet_Charge_Unitaire": "0",
      "H0D_Objet_Valeur": "0",
      "H0D_Objet_Utilisations": "0",
      "H0D_Objet_Utilisations_Max": "0",
      "H0D_Objet_Recharge": "",
      "H0D_Objet_Etat": "Intact",
      "H0D_Objet_Origine": "Clan de la Dent d'Ambre",
      "H0D_Objet_Compatibilite": "",
      "H0D_Objet_Effet": "",
      "H0D_Objet_Description": "Équipement associé du Chasseur novice.",
      "H0D_Objet_Traits_Table": {},
      "H0D_Objet_Munition_Active": false,
      "H0D_Objet_Munition_Famille": "Fleche",
      "H0D_Objet_Munition_Element": "Aucun",
      "H0D_Objet_Munition_Recuperable": false,
      "H0D_Objet_Munition_Bonus_Attaque": "0",
      "H0D_Objet_Munition_Bonus_Degats": "0",
      "H0D_Objet_Munition_Type_Degats": "Perforant",
      "H0D_Objet_Munition_Anti_Blindage": "0",
      "H0D_Objet_Munition_Effet_Court": ""
    }
  },
  {
    "key": "dague-rituelle",
    "name": "Dague rituelle",
    "kind": "weapon",
    "kindLabel": "Arme",
    "templateKey": "item-arme",
    "originKey": "culte-renouveau",
    "origin": "Culte du Renouveau",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Arme_Categorie": "melee",
      "H0D_Arme_Carac_Attaque": "aucune",
      "H0D_Arme_Carac_Degats": "aucune",
      "H0D_Arme_Bonus_Attaque": "0",
      "H0D_Arme_Degats": "1d4+1",
      "H0D_Arme_Bonus_Degats": "0",
      "H0D_Arme_Type_Degats": "Perforant",
      "H0D_Arme_Portee": "0",
      "H0D_Arme_Mains": "1",
      "H0D_Arme_Critique_Seuil": "20",
      "H0D_Arme_Critique_Multiplicateur": "2",
      "H0D_Arme_Equipee": true,
      "H0D_Stockage": "PJ",
      "H0D_Arme_Active": true,
      "H0D_Arme_Encombrement": "0",
      "H0D_Arme_Zone": "",
      "H0D_Arme_Mode_Munition": "Aucune",
      "H0D_Arme_Type_Munition": "Fleche",
      "H0D_Arme_Consommation_Munition": "1",
      "H0D_Arme_Recharge": "",
      "H0D_Arme_Munitions": "0",
      "H0D_Arme_Munitions_Max": "0",
      "H0D_Arme_Element": "Aucun",
      "H0D_Arme_Origine": "Culte du Renouveau",
      "H0D_Arme_Cout": "",
      "H0D_Arme_Traits_Table": {},
      "H0D_Arme_Effet_Special": "",
      "H0D_Arme_Notes": "Attaque principale du profil : Dague / fronde."
    }
  },
  {
    "key": "fronde",
    "name": "Fronde",
    "kind": "weapon",
    "kindLabel": "Arme",
    "templateKey": "item-arme",
    "originKey": "culte-renouveau",
    "origin": "Culte du Renouveau",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Arme_Categorie": "distance",
      "H0D_Arme_Carac_Attaque": "aucune",
      "H0D_Arme_Carac_Degats": "aucune",
      "H0D_Arme_Bonus_Attaque": "0",
      "H0D_Arme_Degats": "1d4+1",
      "H0D_Arme_Bonus_Degats": "0",
      "H0D_Arme_Type_Degats": "Contondant",
      "H0D_Arme_Portee": "0",
      "H0D_Arme_Mains": "1",
      "H0D_Arme_Critique_Seuil": "20",
      "H0D_Arme_Critique_Multiplicateur": "2",
      "H0D_Arme_Equipee": true,
      "H0D_Stockage": "PJ",
      "H0D_Arme_Active": true,
      "H0D_Arme_Encombrement": "0",
      "H0D_Arme_Zone": "",
      "H0D_Arme_Mode_Munition": "Aucune",
      "H0D_Arme_Type_Munition": "Fleche",
      "H0D_Arme_Consommation_Munition": "1",
      "H0D_Arme_Recharge": "",
      "H0D_Arme_Munitions": "0",
      "H0D_Arme_Munitions_Max": "0",
      "H0D_Arme_Element": "Aucun",
      "H0D_Arme_Origine": "Culte du Renouveau",
      "H0D_Arme_Cout": "",
      "H0D_Arme_Traits_Table": {},
      "H0D_Arme_Effet_Special": "",
      "H0D_Arme_Notes": "Attaque principale du profil : Dague / fronde."
    }
  },
  {
    "key": "robe-usee",
    "name": "Robe usée",
    "kind": "armor",
    "kindLabel": "Armure / protection",
    "templateKey": "item-armure",
    "originKey": "culte-renouveau",
    "origin": "Culte du Renouveau",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Armure_Type": "autre",
      "H0D_Armure_Zone": "corps",
      "H0D_Armure_Active": true,
      "H0D_Armure_Bonus_Defense": "0",
      "H0D_Armure_Encombrement": "0",
      "H0D_Armure_Malus": "",
      "H0D_Stockage": "PJ",
      "H0D_Armure_Resistances": "",
      "H0D_Armure_Resistance_Feu": "0",
      "H0D_Armure_Resistance_Gel": "0",
      "H0D_Armure_Resistance_Choc": "0",
      "H0D_Armure_Resistance_Acide": "0",
      "H0D_Armure_Etat": "",
      "H0D_Armure_Origine": "Culte du Renouveau",
      "H0D_Armure_Description": "Robe usée de l'Adepte. Aucun bonus de DEF distinct n'est fourni.",
      "H0D_Armure_Traits_Table": {}
    }
  },
  {
    "key": "pendentif-ruine",
    "name": "Pendentif de ruine",
    "kind": "object",
    "kindLabel": "Objet",
    "templateKey": "item-objet",
    "originKey": "culte-renouveau",
    "origin": "Culte du Renouveau",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Objet_Type": "Antique",
      "H0D_Objet_Sous_Type": "Pendentif de ruine",
      "H0D_Objet_Quantite": "1",
      "H0D_Stockage": "PJ",
      "H0D_Objet_Actif": false,
      "H0D_Objet_Identifie": true,
      "H0D_Objet_Charge_Unitaire": "0",
      "H0D_Objet_Valeur": "0",
      "H0D_Objet_Utilisations": "0",
      "H0D_Objet_Utilisations_Max": "0",
      "H0D_Objet_Recharge": "",
      "H0D_Objet_Etat": "Intact",
      "H0D_Objet_Origine": "Culte du Renouveau",
      "H0D_Objet_Compatibilite": "",
      "H0D_Objet_Effet": "",
      "H0D_Objet_Description": "Objet rituel associé au profil.",
      "H0D_Objet_Traits_Table": {},
      "H0D_Objet_Munition_Active": false,
      "H0D_Objet_Munition_Famille": "Fleche",
      "H0D_Objet_Munition_Element": "Aucun",
      "H0D_Objet_Munition_Recuperable": false,
      "H0D_Objet_Munition_Bonus_Attaque": "0",
      "H0D_Objet_Munition_Bonus_Degats": "0",
      "H0D_Objet_Munition_Type_Degats": "Perforant",
      "H0D_Objet_Munition_Anti_Blindage": "0",
      "H0D_Objet_Munition_Effet_Court": ""
    }
  },
  {
    "key": "lame-blanche",
    "name": "Lame blanche",
    "kind": "weapon",
    "kindLabel": "Arme",
    "templateKey": "item-arme",
    "originKey": "elysium-10",
    "origin": "ELYSIUM-10",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Arme_Categorie": "melee",
      "H0D_Arme_Carac_Attaque": "aucune",
      "H0D_Arme_Carac_Degats": "aucune",
      "H0D_Arme_Bonus_Attaque": "0",
      "H0D_Arme_Degats": "1d6",
      "H0D_Arme_Bonus_Degats": "0",
      "H0D_Arme_Type_Degats": "Autre",
      "H0D_Arme_Portee": "0",
      "H0D_Arme_Mains": "1",
      "H0D_Arme_Critique_Seuil": "20",
      "H0D_Arme_Critique_Multiplicateur": "2",
      "H0D_Arme_Equipee": true,
      "H0D_Stockage": "PJ",
      "H0D_Arme_Active": true,
      "H0D_Arme_Encombrement": "0",
      "H0D_Arme_Zone": "",
      "H0D_Arme_Mode_Munition": "Aucune",
      "H0D_Arme_Type_Munition": "Fleche",
      "H0D_Arme_Consommation_Munition": "1",
      "H0D_Arme_Recharge": "",
      "H0D_Arme_Munitions": "0",
      "H0D_Arme_Munitions_Max": "0",
      "H0D_Arme_Element": "Aucun",
      "H0D_Arme_Origine": "ELYSIUM-10",
      "H0D_Arme_Cout": "",
      "H0D_Arme_Traits_Table": {},
      "H0D_Arme_Effet_Special": "",
      "H0D_Arme_Notes": "Attaque principale : Lame blanche / pistolet ancien faible."
    }
  },
  {
    "key": "pistolet-ancien-faible",
    "name": "Pistolet ancien faible",
    "kind": "weapon",
    "kindLabel": "Arme",
    "templateKey": "item-arme",
    "originKey": "elysium-10",
    "origin": "ELYSIUM-10",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Arme_Categorie": "distance",
      "H0D_Arme_Carac_Attaque": "aucune",
      "H0D_Arme_Carac_Degats": "aucune",
      "H0D_Arme_Bonus_Attaque": "0",
      "H0D_Arme_Degats": "1d6",
      "H0D_Arme_Bonus_Degats": "0",
      "H0D_Arme_Type_Degats": "Autre",
      "H0D_Arme_Portee": "0",
      "H0D_Arme_Mains": "1",
      "H0D_Arme_Critique_Seuil": "20",
      "H0D_Arme_Critique_Multiplicateur": "2",
      "H0D_Arme_Equipee": true,
      "H0D_Stockage": "PJ",
      "H0D_Arme_Active": true,
      "H0D_Arme_Encombrement": "0",
      "H0D_Arme_Zone": "",
      "H0D_Arme_Mode_Munition": "Aucune",
      "H0D_Arme_Type_Munition": "Fleche",
      "H0D_Arme_Consommation_Munition": "1",
      "H0D_Arme_Recharge": "",
      "H0D_Arme_Munitions": "0",
      "H0D_Arme_Munitions_Max": "0",
      "H0D_Arme_Element": "Aucun",
      "H0D_Arme_Origine": "ELYSIUM-10",
      "H0D_Arme_Cout": "",
      "H0D_Arme_Traits_Table": {},
      "H0D_Arme_Effet_Special": "",
      "H0D_Arme_Notes": "Attaque principale : Lame blanche / pistolet ancien faible."
    }
  },
  {
    "key": "manteau-clair",
    "name": "Manteau clair",
    "kind": "armor",
    "kindLabel": "Armure / protection",
    "templateKey": "item-armure",
    "originKey": "elysium-10",
    "origin": "ELYSIUM-10",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Armure_Type": "autre",
      "H0D_Armure_Zone": "corps",
      "H0D_Armure_Active": true,
      "H0D_Armure_Bonus_Defense": "0",
      "H0D_Armure_Encombrement": "0",
      "H0D_Armure_Malus": "",
      "H0D_Stockage": "PJ",
      "H0D_Armure_Resistances": "",
      "H0D_Armure_Resistance_Feu": "0",
      "H0D_Armure_Resistance_Gel": "0",
      "H0D_Armure_Resistance_Choc": "0",
      "H0D_Armure_Resistance_Acide": "0",
      "H0D_Armure_Etat": "",
      "H0D_Armure_Origine": "ELYSIUM-10",
      "H0D_Armure_Description": "Manteau clair de l'Agent blanc mineur.",
      "H0D_Armure_Traits_Table": {}
    }
  },
  {
    "key": "relais-courte-portee",
    "name": "Relais court-portée",
    "kind": "object",
    "kindLabel": "Objet",
    "templateKey": "item-objet",
    "originKey": "elysium-10",
    "origin": "ELYSIUM-10",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Objet_Type": "Outil",
      "H0D_Objet_Sous_Type": "Relais court-portée",
      "H0D_Objet_Quantite": "1",
      "H0D_Stockage": "PJ",
      "H0D_Objet_Actif": false,
      "H0D_Objet_Identifie": true,
      "H0D_Objet_Charge_Unitaire": "0",
      "H0D_Objet_Valeur": "0",
      "H0D_Objet_Utilisations": "0",
      "H0D_Objet_Utilisations_Max": "0",
      "H0D_Objet_Recharge": "",
      "H0D_Objet_Etat": "Intact",
      "H0D_Objet_Origine": "ELYSIUM-10",
      "H0D_Objet_Compatibilite": "",
      "H0D_Objet_Effet": "",
      "H0D_Objet_Description": "Relais de communication associé au profil.",
      "H0D_Objet_Traits_Table": {},
      "H0D_Objet_Munition_Active": false,
      "H0D_Objet_Munition_Famille": "Fleche",
      "H0D_Objet_Munition_Element": "Aucun",
      "H0D_Objet_Munition_Recuperable": false,
      "H0D_Objet_Munition_Bonus_Attaque": "0",
      "H0D_Objet_Munition_Bonus_Degats": "0",
      "H0D_Objet_Munition_Type_Degats": "Perforant",
      "H0D_Objet_Munition_Anti_Blindage": "0",
      "H0D_Objet_Munition_Effet_Court": ""
    }
  },
  {
    "key": "lame-blanche-legere",
    "name": "Lame blanche légère",
    "kind": "weapon",
    "kindLabel": "Arme",
    "templateKey": "item-arme",
    "originKey": "elysium-9",
    "origin": "ELYSIUM-9",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Arme_Categorie": "melee",
      "H0D_Arme_Carac_Attaque": "aucune",
      "H0D_Arme_Carac_Degats": "aucune",
      "H0D_Arme_Bonus_Attaque": "0",
      "H0D_Arme_Degats": "1d6",
      "H0D_Arme_Bonus_Degats": "0",
      "H0D_Arme_Type_Degats": "Autre",
      "H0D_Arme_Portee": "0",
      "H0D_Arme_Mains": "1",
      "H0D_Arme_Critique_Seuil": "20",
      "H0D_Arme_Critique_Multiplicateur": "2",
      "H0D_Arme_Equipee": true,
      "H0D_Stockage": "PJ",
      "H0D_Arme_Active": true,
      "H0D_Arme_Encombrement": "0",
      "H0D_Arme_Zone": "",
      "H0D_Arme_Mode_Munition": "Aucune",
      "H0D_Arme_Type_Munition": "Fleche",
      "H0D_Arme_Consommation_Munition": "1",
      "H0D_Arme_Recharge": "",
      "H0D_Arme_Munitions": "0",
      "H0D_Arme_Munitions_Max": "0",
      "H0D_Arme_Element": "Aucun",
      "H0D_Arme_Origine": "ELYSIUM-9",
      "H0D_Arme_Cout": "",
      "H0D_Arme_Traits_Table": {},
      "H0D_Arme_Effet_Special": "",
      "H0D_Arme_Notes": "Attaque principale : Lame blanche légère."
    }
  },
  {
    "key": "masque-incomplet",
    "name": "Masque incomplet",
    "kind": "armor",
    "kindLabel": "Armure / protection",
    "templateKey": "item-armure",
    "originKey": "elysium-9",
    "origin": "ELYSIUM-9",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Armure_Type": "autre",
      "H0D_Armure_Zone": "corps",
      "H0D_Armure_Active": true,
      "H0D_Armure_Bonus_Defense": "0",
      "H0D_Armure_Encombrement": "0",
      "H0D_Armure_Malus": "",
      "H0D_Stockage": "PJ",
      "H0D_Armure_Resistances": "",
      "H0D_Armure_Resistance_Feu": "0",
      "H0D_Armure_Resistance_Gel": "0",
      "H0D_Armure_Resistance_Choc": "0",
      "H0D_Armure_Resistance_Acide": "0",
      "H0D_Armure_Etat": "",
      "H0D_Armure_Origine": "ELYSIUM-9",
      "H0D_Armure_Description": "Masque incomplet porté par l'Héritier Elys-9 novice.",
      "H0D_Armure_Traits_Table": {}
    }
  },
  {
    "key": "focus-brouille",
    "name": "Fragment de Focus brouillé",
    "kind": "object",
    "kindLabel": "Objet",
    "templateKey": "item-objet",
    "originKey": "elysium-9",
    "origin": "ELYSIUM-9",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Objet_Type": "Focus",
      "H0D_Objet_Sous_Type": "Fragment brouillé",
      "H0D_Objet_Quantite": "1",
      "H0D_Stockage": "PJ",
      "H0D_Objet_Actif": false,
      "H0D_Objet_Identifie": true,
      "H0D_Objet_Charge_Unitaire": "0",
      "H0D_Objet_Valeur": "0",
      "H0D_Objet_Utilisations": "0",
      "H0D_Objet_Utilisations_Max": "0",
      "H0D_Objet_Recharge": "",
      "H0D_Objet_Etat": "Intact",
      "H0D_Objet_Origine": "ELYSIUM-9",
      "H0D_Objet_Compatibilite": "",
      "H0D_Objet_Effet": "",
      "H0D_Objet_Description": "Fragment de Focus brouillé associé au profil.",
      "H0D_Objet_Traits_Table": {},
      "H0D_Objet_Munition_Active": false,
      "H0D_Objet_Munition_Famille": "Fleche",
      "H0D_Objet_Munition_Element": "Aucun",
      "H0D_Objet_Munition_Recuperable": false,
      "H0D_Objet_Munition_Bonus_Attaque": "0",
      "H0D_Objet_Munition_Bonus_Degats": "0",
      "H0D_Objet_Munition_Type_Degats": "Perforant",
      "H0D_Objet_Munition_Anti_Blindage": "0",
      "H0D_Objet_Munition_Effet_Court": ""
    }
  },
  {
    "key": "bras-outil-integre",
    "name": "Bras-outil intégré",
    "kind": "weapon",
    "kindLabel": "Arme",
    "templateKey": "item-arme",
    "originKey": "helios",
    "origin": "HELIOS",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Arme_Categorie": "melee",
      "H0D_Arme_Carac_Attaque": "aucune",
      "H0D_Arme_Carac_Degats": "aucune",
      "H0D_Arme_Bonus_Attaque": "0",
      "H0D_Arme_Degats": "1d4+1",
      "H0D_Arme_Bonus_Degats": "0",
      "H0D_Arme_Type_Degats": "Autre",
      "H0D_Arme_Portee": "0",
      "H0D_Arme_Mains": "1",
      "H0D_Arme_Critique_Seuil": "20",
      "H0D_Arme_Critique_Multiplicateur": "2",
      "H0D_Arme_Equipee": true,
      "H0D_Stockage": "PJ",
      "H0D_Arme_Active": true,
      "H0D_Arme_Encombrement": "0",
      "H0D_Arme_Zone": "",
      "H0D_Arme_Mode_Munition": "Aucune",
      "H0D_Arme_Type_Munition": "Fleche",
      "H0D_Arme_Consommation_Munition": "1",
      "H0D_Arme_Recharge": "",
      "H0D_Arme_Munitions": "0",
      "H0D_Arme_Munitions_Max": "0",
      "H0D_Arme_Element": "Aucun",
      "H0D_Arme_Origine": "HELIOS",
      "H0D_Arme_Cout": "",
      "H0D_Arme_Traits_Table": {},
      "H0D_Arme_Effet_Special": "",
      "H0D_Arme_Notes": "Attaque principale : Bras-outil."
    }
  },
  {
    "key": "lampe",
    "name": "Lampe",
    "kind": "object",
    "kindLabel": "Objet",
    "templateKey": "item-objet",
    "originKey": "helios",
    "origin": "HELIOS",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Objet_Type": "Outil",
      "H0D_Objet_Sous_Type": "Lampe",
      "H0D_Objet_Quantite": "1",
      "H0D_Stockage": "PJ",
      "H0D_Objet_Actif": false,
      "H0D_Objet_Identifie": true,
      "H0D_Objet_Charge_Unitaire": "0",
      "H0D_Objet_Valeur": "0",
      "H0D_Objet_Utilisations": "0",
      "H0D_Objet_Utilisations_Max": "0",
      "H0D_Objet_Recharge": "",
      "H0D_Objet_Etat": "Intact",
      "H0D_Objet_Origine": "HELIOS",
      "H0D_Objet_Compatibilite": "",
      "H0D_Objet_Effet": "",
      "H0D_Objet_Description": "Équipement intégré du drone.",
      "H0D_Objet_Traits_Table": {},
      "H0D_Objet_Munition_Active": false,
      "H0D_Objet_Munition_Famille": "Fleche",
      "H0D_Objet_Munition_Element": "Aucun",
      "H0D_Objet_Munition_Recuperable": false,
      "H0D_Objet_Munition_Bonus_Attaque": "0",
      "H0D_Objet_Munition_Bonus_Degats": "0",
      "H0D_Objet_Munition_Type_Degats": "Perforant",
      "H0D_Objet_Munition_Anti_Blindage": "0",
      "H0D_Objet_Munition_Effet_Court": ""
    }
  },
  {
    "key": "module-diagnostic",
    "name": "Module de diagnostic",
    "kind": "object",
    "kindLabel": "Objet",
    "templateKey": "item-objet",
    "originKey": "helios",
    "origin": "HELIOS",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Objet_Type": "Outil",
      "H0D_Objet_Sous_Type": "Diagnostic",
      "H0D_Objet_Quantite": "1",
      "H0D_Stockage": "PJ",
      "H0D_Objet_Actif": false,
      "H0D_Objet_Identifie": true,
      "H0D_Objet_Charge_Unitaire": "0",
      "H0D_Objet_Valeur": "0",
      "H0D_Objet_Utilisations": "0",
      "H0D_Objet_Utilisations_Max": "0",
      "H0D_Objet_Recharge": "",
      "H0D_Objet_Etat": "Intact",
      "H0D_Objet_Origine": "HELIOS",
      "H0D_Objet_Compatibilite": "",
      "H0D_Objet_Effet": "",
      "H0D_Objet_Description": "Module de diagnostic du drone.",
      "H0D_Objet_Traits_Table": {},
      "H0D_Objet_Munition_Active": false,
      "H0D_Objet_Munition_Famille": "Fleche",
      "H0D_Objet_Munition_Element": "Aucun",
      "H0D_Objet_Munition_Recuperable": false,
      "H0D_Objet_Munition_Bonus_Attaque": "0",
      "H0D_Objet_Munition_Bonus_Degats": "0",
      "H0D_Objet_Munition_Type_Degats": "Perforant",
      "H0D_Objet_Munition_Anti_Blindage": "0",
      "H0D_Objet_Munition_Effet_Court": ""
    }
  },
  {
    "key": "gantelet-entrave",
    "name": "Gantelet d'entrave",
    "kind": "weapon",
    "kindLabel": "Arme",
    "templateKey": "item-arme",
    "originKey": "heliosium",
    "origin": "HelioSium",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Arme_Categorie": "speciale",
      "H0D_Arme_Carac_Attaque": "aucune",
      "H0D_Arme_Carac_Degats": "aucune",
      "H0D_Arme_Bonus_Attaque": "0",
      "H0D_Arme_Degats": "1d6",
      "H0D_Arme_Bonus_Degats": "0",
      "H0D_Arme_Type_Degats": "Autre",
      "H0D_Arme_Portee": "0",
      "H0D_Arme_Mains": "1",
      "H0D_Arme_Critique_Seuil": "20",
      "H0D_Arme_Critique_Multiplicateur": "2",
      "H0D_Arme_Equipee": true,
      "H0D_Stockage": "PJ",
      "H0D_Arme_Active": true,
      "H0D_Arme_Encombrement": "0",
      "H0D_Arme_Zone": "",
      "H0D_Arme_Mode_Munition": "Aucune",
      "H0D_Arme_Type_Munition": "Fleche",
      "H0D_Arme_Consommation_Munition": "1",
      "H0D_Arme_Recharge": "",
      "H0D_Arme_Munitions": "0",
      "H0D_Arme_Munitions_Max": "0",
      "H0D_Arme_Element": "Aucun",
      "H0D_Arme_Origine": "HelioSium",
      "H0D_Arme_Cout": "",
      "H0D_Arme_Traits_Table": {},
      "H0D_Arme_Effet_Special": "Dégâts non létaux.",
      "H0D_Arme_Notes": "Attaque principale : Entrave / impulsion faible."
    }
  },
  {
    "key": "armure-organique-legere",
    "name": "Armure organique légère",
    "kind": "armor",
    "kindLabel": "Armure / protection",
    "templateKey": "item-armure",
    "originKey": "heliosium",
    "origin": "HelioSium",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Armure_Type": "armure",
      "H0D_Armure_Zone": "corps",
      "H0D_Armure_Active": true,
      "H0D_Armure_Bonus_Defense": "0",
      "H0D_Armure_Encombrement": "0",
      "H0D_Armure_Malus": "",
      "H0D_Stockage": "PJ",
      "H0D_Armure_Resistances": "",
      "H0D_Armure_Resistance_Feu": "0",
      "H0D_Armure_Resistance_Gel": "0",
      "H0D_Armure_Resistance_Choc": "0",
      "H0D_Armure_Resistance_Acide": "0",
      "H0D_Armure_Etat": "",
      "H0D_Armure_Origine": "HelioSium",
      "H0D_Armure_Description": "Armure organique légère. Aucun bonus de DEF distinct n'est fourni par la source.",
      "H0D_Armure_Traits_Table": {}
    }
  },
  {
    "key": "relais-vert-blanc",
    "name": "Relais vert-blanc",
    "kind": "object",
    "kindLabel": "Objet",
    "templateKey": "item-objet",
    "originKey": "heliosium",
    "origin": "HelioSium",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Objet_Type": "Outil",
      "H0D_Objet_Sous_Type": "Relais vert-blanc",
      "H0D_Objet_Quantite": "1",
      "H0D_Stockage": "PJ",
      "H0D_Objet_Actif": false,
      "H0D_Objet_Identifie": true,
      "H0D_Objet_Charge_Unitaire": "0",
      "H0D_Objet_Valeur": "0",
      "H0D_Objet_Utilisations": "0",
      "H0D_Objet_Utilisations_Max": "0",
      "H0D_Objet_Recharge": "",
      "H0D_Objet_Etat": "Intact",
      "H0D_Objet_Origine": "HelioSium",
      "H0D_Objet_Compatibilite": "",
      "H0D_Objet_Effet": "",
      "H0D_Objet_Description": "Relais associé au Pacificateur instable.",
      "H0D_Objet_Traits_Table": {},
      "H0D_Objet_Munition_Active": false,
      "H0D_Objet_Munition_Famille": "Fleche",
      "H0D_Objet_Munition_Element": "Aucun",
      "H0D_Objet_Munition_Recuperable": false,
      "H0D_Objet_Munition_Bonus_Attaque": "0",
      "H0D_Objet_Munition_Bonus_Degats": "0",
      "H0D_Objet_Munition_Type_Degats": "Perforant",
      "H0D_Objet_Munition_Anti_Blindage": "0",
      "H0D_Objet_Munition_Effet_Court": ""
    }
  },
  {
    "key": "lame-courte-solaire",
    "name": "Lame courte solaire",
    "kind": "weapon",
    "kindLabel": "Arme",
    "templateKey": "item-arme",
    "originKey": "heritiers-soleil",
    "origin": "Héritiers du Soleil",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Arme_Categorie": "melee",
      "H0D_Arme_Carac_Attaque": "aucune",
      "H0D_Arme_Carac_Degats": "aucune",
      "H0D_Arme_Bonus_Attaque": "0",
      "H0D_Arme_Degats": "1d6",
      "H0D_Arme_Bonus_Degats": "0",
      "H0D_Arme_Type_Degats": "Autre",
      "H0D_Arme_Portee": "0",
      "H0D_Arme_Mains": "1",
      "H0D_Arme_Critique_Seuil": "20",
      "H0D_Arme_Critique_Multiplicateur": "2",
      "H0D_Arme_Equipee": true,
      "H0D_Stockage": "PJ",
      "H0D_Arme_Active": true,
      "H0D_Arme_Encombrement": "0",
      "H0D_Arme_Zone": "",
      "H0D_Arme_Mode_Munition": "Aucune",
      "H0D_Arme_Type_Munition": "Fleche",
      "H0D_Arme_Consommation_Munition": "1",
      "H0D_Arme_Recharge": "",
      "H0D_Arme_Munitions": "0",
      "H0D_Arme_Munitions_Max": "0",
      "H0D_Arme_Element": "Aucun",
      "H0D_Arme_Origine": "Héritiers du Soleil",
      "H0D_Arme_Cout": "",
      "H0D_Arme_Traits_Table": {},
      "H0D_Arme_Effet_Special": "",
      "H0D_Arme_Notes": "Attaque principale : Lame solaire légère. La fiche source ne précise pas un type de dégâts élémentaire."
    }
  },
  {
    "key": "bouclier-leger",
    "name": "Bouclier léger",
    "kind": "armor",
    "kindLabel": "Armure / protection",
    "templateKey": "item-armure",
    "originKey": "heritiers-soleil",
    "origin": "Héritiers du Soleil",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Armure_Type": "bouclier",
      "H0D_Armure_Zone": "corps",
      "H0D_Armure_Active": true,
      "H0D_Armure_Bonus_Defense": "0",
      "H0D_Armure_Encombrement": "0",
      "H0D_Armure_Malus": "",
      "H0D_Stockage": "PJ",
      "H0D_Armure_Resistances": "",
      "H0D_Armure_Resistance_Feu": "0",
      "H0D_Armure_Resistance_Gel": "0",
      "H0D_Armure_Resistance_Choc": "0",
      "H0D_Armure_Resistance_Acide": "0",
      "H0D_Armure_Etat": "",
      "H0D_Armure_Origine": "Héritiers du Soleil",
      "H0D_Armure_Description": "Bouclier léger de l'Aspirant solaire. Aucun bonus distinct n'est chiffré dans la source.",
      "H0D_Armure_Traits_Table": {}
    }
  },
  {
    "key": "amulette-solaire",
    "name": "Amulette solaire",
    "kind": "object",
    "kindLabel": "Objet",
    "templateKey": "item-objet",
    "originKey": "heritiers-soleil",
    "origin": "Héritiers du Soleil",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Objet_Type": "Divers",
      "H0D_Objet_Sous_Type": "Amulette solaire",
      "H0D_Objet_Quantite": "1",
      "H0D_Stockage": "PJ",
      "H0D_Objet_Actif": false,
      "H0D_Objet_Identifie": true,
      "H0D_Objet_Charge_Unitaire": "0",
      "H0D_Objet_Valeur": "0",
      "H0D_Objet_Utilisations": "0",
      "H0D_Objet_Utilisations_Max": "0",
      "H0D_Objet_Recharge": "",
      "H0D_Objet_Etat": "Intact",
      "H0D_Objet_Origine": "Héritiers du Soleil",
      "H0D_Objet_Compatibilite": "",
      "H0D_Objet_Effet": "",
      "H0D_Objet_Description": "Objet associé du profil.",
      "H0D_Objet_Traits_Table": {},
      "H0D_Objet_Munition_Active": false,
      "H0D_Objet_Munition_Famille": "Fleche",
      "H0D_Objet_Munition_Element": "Aucun",
      "H0D_Objet_Munition_Recuperable": false,
      "H0D_Objet_Munition_Bonus_Attaque": "0",
      "H0D_Objet_Munition_Bonus_Degats": "0",
      "H0D_Objet_Munition_Type_Degats": "Perforant",
      "H0D_Objet_Munition_Anti_Blindage": "0",
      "H0D_Objet_Munition_Effet_Court": ""
    }
  },
  {
    "key": "torche-ou-huile",
    "name": "Torche / huile",
    "kind": "object",
    "kindLabel": "Objet",
    "templateKey": "item-objet",
    "originKey": "heritiers-soleil",
    "origin": "Héritiers du Soleil",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Objet_Type": "Divers",
      "H0D_Objet_Sous_Type": "Torche ou huile",
      "H0D_Objet_Quantite": "1",
      "H0D_Stockage": "PJ",
      "H0D_Objet_Actif": false,
      "H0D_Objet_Identifie": true,
      "H0D_Objet_Charge_Unitaire": "0",
      "H0D_Objet_Valeur": "0",
      "H0D_Objet_Utilisations": "0",
      "H0D_Objet_Utilisations_Max": "0",
      "H0D_Objet_Recharge": "",
      "H0D_Objet_Etat": "Intact",
      "H0D_Objet_Origine": "Héritiers du Soleil",
      "H0D_Objet_Compatibilite": "",
      "H0D_Objet_Effet": "",
      "H0D_Objet_Description": "La fiche source indique « torche ou huile » sans imposer une variante.",
      "H0D_Objet_Traits_Table": {},
      "H0D_Objet_Munition_Active": false,
      "H0D_Objet_Munition_Famille": "Fleche",
      "H0D_Objet_Munition_Element": "Aucun",
      "H0D_Objet_Munition_Recuperable": false,
      "H0D_Objet_Munition_Bonus_Attaque": "0",
      "H0D_Objet_Munition_Bonus_Degats": "0",
      "H0D_Objet_Munition_Type_Degats": "Perforant",
      "H0D_Objet_Munition_Anti_Blindage": "0",
      "H0D_Objet_Munition_Effet_Court": ""
    }
  },
  {
    "key": "arc-court",
    "name": "Arc court",
    "kind": "weapon",
    "kindLabel": "Arme",
    "templateKey": "item-arme",
    "originKey": "pillards-rouges",
    "origin": "Pillards Rouges",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Arme_Categorie": "distance",
      "H0D_Arme_Carac_Attaque": "aucune",
      "H0D_Arme_Carac_Degats": "aucune",
      "H0D_Arme_Bonus_Attaque": "0",
      "H0D_Arme_Degats": "1d6+1",
      "H0D_Arme_Bonus_Degats": "0",
      "H0D_Arme_Type_Degats": "Perforant",
      "H0D_Arme_Portee": "0",
      "H0D_Arme_Mains": "1",
      "H0D_Arme_Critique_Seuil": "20",
      "H0D_Arme_Critique_Multiplicateur": "2",
      "H0D_Arme_Equipee": true,
      "H0D_Stockage": "PJ",
      "H0D_Arme_Active": true,
      "H0D_Arme_Encombrement": "0",
      "H0D_Arme_Zone": "",
      "H0D_Arme_Mode_Munition": "Aucune",
      "H0D_Arme_Type_Munition": "Fleche",
      "H0D_Arme_Consommation_Munition": "1",
      "H0D_Arme_Recharge": "",
      "H0D_Arme_Munitions": "0",
      "H0D_Arme_Munitions_Max": "0",
      "H0D_Arme_Element": "Aucun",
      "H0D_Arme_Origine": "Pillards Rouges",
      "H0D_Arme_Cout": "",
      "H0D_Arme_Traits_Table": {},
      "H0D_Arme_Effet_Special": "",
      "H0D_Arme_Notes": "Attaque principale du profil : Hache de ferraille / arc court."
    }
  },
  {
    "key": "hache-ferraille",
    "name": "Hache de ferraille",
    "kind": "weapon",
    "kindLabel": "Arme",
    "templateKey": "item-arme",
    "originKey": "pillards-rouges",
    "origin": "Pillards Rouges",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Arme_Categorie": "melee",
      "H0D_Arme_Carac_Attaque": "aucune",
      "H0D_Arme_Carac_Degats": "aucune",
      "H0D_Arme_Bonus_Attaque": "0",
      "H0D_Arme_Degats": "1d6+1",
      "H0D_Arme_Bonus_Degats": "0",
      "H0D_Arme_Type_Degats": "Tranchant",
      "H0D_Arme_Portee": "0",
      "H0D_Arme_Mains": "1",
      "H0D_Arme_Critique_Seuil": "20",
      "H0D_Arme_Critique_Multiplicateur": "2",
      "H0D_Arme_Equipee": true,
      "H0D_Stockage": "PJ",
      "H0D_Arme_Active": true,
      "H0D_Arme_Encombrement": "0",
      "H0D_Arme_Zone": "",
      "H0D_Arme_Mode_Munition": "Aucune",
      "H0D_Arme_Type_Munition": "Fleche",
      "H0D_Arme_Consommation_Munition": "1",
      "H0D_Arme_Recharge": "",
      "H0D_Arme_Munitions": "0",
      "H0D_Arme_Munitions_Max": "0",
      "H0D_Arme_Element": "Aucun",
      "H0D_Arme_Origine": "Pillards Rouges",
      "H0D_Arme_Cout": "",
      "H0D_Arme_Traits_Table": {},
      "H0D_Arme_Effet_Special": "",
      "H0D_Arme_Notes": "Attaque principale du profil : Hache de ferraille / arc court."
    }
  },
  {
    "key": "armure-bricolee",
    "name": "Armure bricolée",
    "kind": "armor",
    "kindLabel": "Armure / protection",
    "templateKey": "item-armure",
    "originKey": "pillards-rouges",
    "origin": "Pillards Rouges",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Armure_Type": "armure",
      "H0D_Armure_Zone": "corps",
      "H0D_Armure_Active": true,
      "H0D_Armure_Bonus_Defense": "0",
      "H0D_Armure_Encombrement": "0",
      "H0D_Armure_Malus": "",
      "H0D_Stockage": "PJ",
      "H0D_Armure_Resistances": "",
      "H0D_Armure_Resistance_Feu": "0",
      "H0D_Armure_Resistance_Gel": "0",
      "H0D_Armure_Resistance_Choc": "0",
      "H0D_Armure_Resistance_Acide": "0",
      "H0D_Armure_Etat": "",
      "H0D_Armure_Origine": "Pillards Rouges",
      "H0D_Armure_Description": "Armure bricolée du Pillard recrue. Aucun bonus chiffré distinct n'est donné par la fiche source.",
      "H0D_Armure_Traits_Table": {}
    }
  },
  {
    "key": "trophee-machine",
    "name": "Trophée machine",
    "kind": "object",
    "kindLabel": "Objet",
    "templateKey": "item-objet",
    "originKey": "pillards-rouges",
    "origin": "Pillards Rouges",
    "tier": 1,
    "source": "PNJ_Factions_Menace_1_Foundry",
    "props": {
      "H0D_Objet_Type": "PieceMachine",
      "H0D_Objet_Sous_Type": "Trophée machine",
      "H0D_Objet_Quantite": "1",
      "H0D_Stockage": "PJ",
      "H0D_Objet_Actif": false,
      "H0D_Objet_Identifie": true,
      "H0D_Objet_Charge_Unitaire": "0",
      "H0D_Objet_Valeur": "0",
      "H0D_Objet_Utilisations": "0",
      "H0D_Objet_Utilisations_Max": "0",
      "H0D_Objet_Recharge": "",
      "H0D_Objet_Etat": "Intact",
      "H0D_Objet_Origine": "Pillards Rouges",
      "H0D_Objet_Compatibilite": "",
      "H0D_Objet_Effet": "",
      "H0D_Objet_Description": "Trophée récupéré sur une machine.",
      "H0D_Objet_Traits_Table": {},
      "H0D_Objet_Munition_Active": false,
      "H0D_Objet_Munition_Famille": "Fleche",
      "H0D_Objet_Munition_Element": "Aucun",
      "H0D_Objet_Munition_Recuperable": false,
      "H0D_Objet_Munition_Bonus_Attaque": "0",
      "H0D_Objet_Munition_Bonus_Degats": "0",
      "H0D_Objet_Munition_Type_Degats": "Perforant",
      "H0D_Objet_Munition_Anti_Blindage": "0",
      "H0D_Objet_Munition_Effet_Court": ""
    }
  }
];

const CATALOG = new Map(STARTER_CATALOG.map(x => [x.key, foundry.utils.deepClone(x)]));

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

function getDefinition(key) {
  return CATALOG.get(key) ? clone(CATALOG.get(key)) : null;
}

function getReferenceCatalog() {
  return Array.from(CATALOG.values()).map(clone);
}

function getValidationReferences() {
  return getReferenceCatalog().map(d => ({
    key:d.key,
    name:d.name,
    kind:d.kind,
    templateKey:d.templateKey,
    origin:d.origin,
    expectedProps:clone(d.props),
    source:d.source,
    tier:d.tier
  }));
}

function registerDefinition(def) {
  if (!def?.key || !def?.name || !def?.kind || !def?.templateKey) {
    throw new Error("Définition équipement invalide : key, name, kind et templateKey requis.");
  }
  const value = clone(def);
  value.tier ??= 1;
  value.source ??= "Extension externe";
  value.props ??= {};
  CATALOG.set(value.key, value);
  return clone(value);
}

function registerDefinitions(defs=[]) {
  return defs.map(registerDefinition);
}

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
  const state = templateState();
  if (!state.ok) throw new Error(state.message);

  const def = CATALOG.get(key);
  if (!def) throw new Error(`Équipement inconnu : ${key}`);

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
  let candidates = Array.from(CATALOG.values()).filter(d =>
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

  for (const def of CATALOG.values()) {
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

  return {folder:root, created, updated, total:CATALOG.size};
}

function catalogOptions() {
  const groups = new Map();
  for (const def of CATALOG.values()) {
    const group = `${def.origin} — ${def.kindLabel || KIND_LABELS[def.kind] || def.kind}`;
    if (!groups.has(group)) groups.set(group, []);
    groups.get(group).push(def);
  }

  let html = `<option value="">— Choisir —</option>`;
  for (const [group, defs] of groups.entries()) {
    html += `<optgroup label="${esc(group)}">`;
    for (const d of defs) html += `<option value="${esc(d.key)}">${esc(d.name)}</option>`;
    html += `</optgroup>`;
  }
  return html;
}

function originOptions() {
  const origins = new Map();
  for (const d of CATALOG.values()) origins.set(d.originKey, d.origin);

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
  const stats = {
    weapon:Array.from(CATALOG.values()).filter(x=>x.kind==="weapon").length,
    armor:Array.from(CATALOG.values()).filter(x=>x.kind==="armor").length,
    object:Array.from(CATALOG.values()).filter(x=>x.kind==="object").length,
    resource:Array.from(CATALOG.values()).filter(x=>x.kind==="resource").length
  };

  const result = await foundry.applications.api.DialogV2.input({
    window:{title:`H0D Equipment Builder v${MODULE_VERSION}`},
    content:`
      <div class="h0d-equipment-builder" style="display:flex;flex-direction:column;gap:10px;">
        <h2>H0D Equipment Builder <small>v${MODULE_VERSION}</small></h2>
        <p><strong>Templates :</strong> ${state.ok ? "✅" : "❌"} ${esc(state.message)}</p>
        <p>
          <strong>Catalogue actuel :</strong> ${CATALOG.size} références —
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
            <option value="update">Mettre à jour (conserve l’image)</option>
            <option value="skip">Ignorer</option>
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
          v0.1.0 : catalogue de départ basé uniquement sur l’équipement déjà validé des profils de factions Menace 1.
          Les paliers d’amélioration, prototypes et équipements ECHO seront ajoutés plus tard.
        </p>
      </div>`,
    ok:{label:"Générer", icon:"fa-solid fa-screwdriver-wrench"}
  });

  if (!result) return;

  try {
    if (result.buildMode === "single") {
      if (!result.catalogKey) return notify("warn","Choisis une référence d’équipement.");
      const item = await buildReferenceItem(String(result.catalogKey), {mode:String(result.existingMode || "update")});
      item.sheet?.render(true);
      notify("info",`Équipement prêt : ${item.name}`);
      return;
    }

    if (result.buildMode === "stock") {
      const stock = await buildStock({
        origin:String(result.origin || "caravanes-libres"),
        kind:String(result.kind || "*"),
        count:Number(result.count || 6),
        label:String(result.stockLabel || "")
      });
      notify("info",`Stock créé : ${stock.items.length} équipement(s).`);
      return;
    }

    if (result.buildMode === "validation") {
      const report = await buildValidationCatalog();
      notify("info",`Catalogue de validation : ${report.total} références (${report.created} créées, ${report.updated} mises à jour).`);
      return;
    }
  } catch (err) {
    console.error(`${MODULE_ID} | génération`, err);
    notify("error",`H0D Equipment Builder : ${err?.message ?? err}`);
  }
}

async function ensureLauncherMacro() {
  if (!game.user?.isGM) return;
  const name = "H0D — Générateur équipement";
  const command = "game.h0dEquipmentBuilder.open();";
  let macro = game.macros?.getName(name);

  if (macro) {
    const updates = {};
    if (macro.command !== command) updates.command = command;
    if (macro.type !== "script") updates.type = "script";
    if (Object.keys(updates).length) await macro.update(updates);
    return;
  }

  await Macro.create({
    name,
    type:"script",
    scope:"global",
    img:"icons/svg/chest.svg",
    command
  });

  notify("info", `${MODULE_ID} : macro de lancement créée.`);
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
    console.log(`${MODULE_ID} | v${MODULE_VERSION} prêt — ${CATALOG.size} références d’équipement.`);
  }
});
