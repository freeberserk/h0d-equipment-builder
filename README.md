## v0.2.6 — Portée de l'arbalète légère

Portées d'armes retenues par le MJ :
- Arc court d'Helix : **15 m**.
- Arbalète légère historique des Caravanes Libres : **20 m**.
- Arc long : **25 m** (référence comparative transmise par le MJ, sans créer de nouvelle fiche d'arc long).

Seul le champ `H0D_Arme_Portee` de l'arbalète légère a été corrigé : passage de la valeur historique vide `0` à `20`. La génération manuelle de cette référence est débloquée, tout en conservant l'avertissement sur les autres champs historiques non rapprochés du Catalogue. Le pistolet ancien faible demeure **mis de côté et non générable**.

Aucune migration automatique des Items, Actors, inventaires ou stocks existants. Les 33 références historiques restent distinctes des références canoniques, et l'inclusion en stock aléatoire nécessite toujours une politique Catalogue validée.

## v0.2.5 — Arc d'Helix : portée 15 m

Le MJ confirme une portée de **15 m pour l'arc d'Helix** et avait indiqué que l'arc court historique devait reprendre sa portée. L'**arc court** passe à 15 m et devient générable manuellement, mais reste une référence historique indépendante : aucun autre champ n'est copié ou fusionné.

L'arbalète légère reste bloquée : sa portée devra se situer entre l'arc court (15 m) et l'arc long (portée non confirmée). Le pistolet ancien faible reste mis de côté. Aucun Item existant n'est migré automatiquement.

## v0.2.4 — Portées des armes historiques (décisions MJ)

- Fronde historique du Culte du Renouveau : portée **9 m**, reprise uniquement du champ `H0D_Arme_Portee` de la **Fronde de chasse** (`fronde-de-chasse`) du H0D Catalogue. Ceci ne fusionne **pas** les deux armes : dégâts, munitions, coût et identité restent propres à leur source respective.
- Arbalète légère : critère MJ **entre la portée de l'arc court et celle de l'arc long**. Sans valeurs vérifiées pour les deux bornes, la portée historique reste non renseignée et la génération reste bloquée.
- Arc court : valeur donnée par le MJ comme déjà définie sur **Helix**. Faute d'accès vérifié à cette fiche, aucune portée chiffrée n'est copiée ; import bloqué jusqu'à récupération de la valeur.
- Pistolet ancien faible : **mis de côté**, conservé dans les 33 références historiques et bloqué en génération ; pas de suppression ni d'invention de statistiques.
- Les 33 historiques restent distincts des références canoniques. Aucune migration d'Item, d'Actor, d'inventaire ou de stock Foundry n'est réalisée automatiquement.

## v0.2.3 — Harmonisation des références historiques

Le catalogue canonique H0D demeure la seule source d'autorité pour les références possédant une définition validée. Les 33 entrées historiques distinctes ne sont **pas fusionnées par similarité de nom**, ni considérées comme prêtes à une publication canonique.

- **Arc tribal : portée 12 m**, confirmée par les décisions de campagne consignées dans l'audit H0D Catalogue du 8 novembre 2026.
- **Bouclier léger : +1 Défense**, occupe une main, suivant la règle maison validée. Le prix et l'encombrement non documentés ne sont pas inventés.
- **Arbalète légère, Fronde, Pistolet ancien faible et Arc court : portée toujours non définie.** Les anciennes valeurs techniques `0` demeurent dans les données historiques mais portent un avertissement explicite et **leur génération est bloquée** tant que le MJ n'a pas validé les portées. Les anciennes fiches Foundry existantes ne sont pas modifiées.
- En absence de H0D Catalogue actif, **aucune des 33 références historiques n'est utilisée en stock aléatoire**, puisque leur politique de disponibilité / de prix n'a pas été validée. Elles restent consultables via l'API et les autres entrées historiques peuvent être créées manuellement avec avertissement.
- Les `19` plans non prêts déjà protégés par H0D Catalogue restent interdits de création. Pas de coût, de portée ou de bonus d'armure inventé.
- Les changements sont appliqués aux **nouvelles générations et aux mises à jour explicitement demandées**, sans migration automatique de PJ, marchands, Actors ou Items existants.

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
