# H0D Equipment Builder

## v0.1.0 — socle équipement

Premier module dédié à la génération d’équipement pour la campagne H0D.

### Catalogue de départ
Le catalogue est volontairement limité aux **33 références déjà validées** dans les profils de factions Menace 1 :

- 13 armes
- 7 armures / protections
- 13 objets
- 0 ressources

Aucune donnée ECHO ou amélioration de haut niveau n’est inventée dans cette version.

### Trois modes
1. **Équipement précis**  
   Crée ou met à jour une référence du catalogue dans les Items du monde.

2. **Stock vendeur / caravane**  
   Génère un dossier de stock à partir d’une origine et d’un type d’équipement.
   Les Caravanes Libres sont proposées par défaut.

3. **Catalogue de validation**  
   Génère l’ensemble des références canoniques dans un dossier séparé.
   Cette fonction est prévue pour servir de jeu d’essai au H0D Template Manager.

### Intégration H0D
Le module utilise exclusivement les templates fournis par **H0D Template Manager** :
- `item-arme`
- `item-armure`
- `item-objet`
- `item-ressource`

Les données sont appliquées en deux phases pour éviter que Custom System Builder n’écrase les propriétés.

### API
`game.h0dEquipmentBuilder`

Fonctions :
- `open()`
- `buildItem(key, options)`
- `buildStock(options)`
- `buildValidationCatalog()`
- `getDefinition(key)`
- `getReferenceCatalog()`
- `getValidationReferences()`
- `registerDefinition(def)`
- `registerDefinitions(defs)`

`getValidationReferences()` est destiné à une future intégration directe avec H0D Template Manager.

### Lancement
Macro automatique :

**H0D — Générateur équipement**

Commande :
`game.h0dEquipmentBuilder.open();`

### Évolution prévue après la Forge ECHO
- paliers de qualité ;
- améliorations d’armes et d’armures ;
- prototypes ;
- modules élémentaires ;
- équipements ECHO / antiques ;
- coûts en ressources ;
- disponibilité selon faction / région / progression.
