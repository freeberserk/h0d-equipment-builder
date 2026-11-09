## v0.2.2 — Macros de lancement personnalisées protégées

La macro du Générateur équipement est identifiée par `flags.h0d-equipment-builder.launcher`. Seules les macros marquées et encore identiques au dernier code généré sont actualisées. Une macro personnalisée de même nom reste intacte et un lanceur séparé « (module officiel) » peut être créé. Les anciennes macros sont reconnues seulement sur une correspondance exacte de nom, type, portée et commande.

# H0D Equipment Builder v0.2.0 — Lecture du Catalogue canonique

**H0D Catalogue v0.1.7 devient la source de vérité** pour les équipements publiés. Le Builder est un générateur d'Items, pas un deuxième référentiel.

- Les définitions de même clé sont toujours lues dans H0D Catalogue en premier, même si une ancienne définition locale existe.
- Les stocks aléatoires proviennent uniquement de `getStockEligibleDefinitions()` lorsque le Catalogue est actif : jamais de prototype incomplet, article réservé ou entrée historique non rapprochée.
- Les **33 références historiques** du Builder n'ont actuellement aucune clé commune avec les 199 références canoniques. Elles restent utilisables individuellement, identifiées comme **historiques à rapprocher**, sans être assimilées arbitrairement à d'autres armes/armures.
- `getReferenceCatalog()` expose le Catalogue et les entrées historiques distinctes, `getStandardStockDefinitions()` expose uniquement les articles autorisés. `catalogueBridgeStatus()` rend vérifiable cette séparation.
- Les actions de création / mise à jour / recréation existantes ne sont pas déclenchées automatiquement. La création d'un plan avec `pret_pour_builder:false` est refusée.
- Si H0D Catalogue n'est pas actif, l'ancien catalogue local reste disponible comme **secours explicite**. Activer le Catalogue pour une utilisation canonique.
- Aucun ancien Item ni Actor, stock de marchand ou inventaire de PJ n'est migré ou modifié lors du chargement.

# H0D Equipment Builder

## v0.1.1 — Génération répétée sans fermer le Builder

Le Builder conserve sa fenêtre, ses paramètres et le résultat de l'opération. On peut créer plusieurs équipements ou stocks, puis fermer volontairement. Par défaut un équipement déjà présent n'est pas écrasé ; la mise à jour et la recréation demandent confirmation. Le catalogue de validation demande également confirmation.

## v0.1.1 — génération répétée équipement

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
