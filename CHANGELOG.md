## 0.2.3 — Portées et boucliers historiques

- Arc tribal : portée de 12 m validée ; bouclier léger : +1 Défense et une main occupée (description).
- Quatre autres armes de tir anciennes, dépourvues de portée fiable, signalées comme non validées et bloquées à la génération ; pas d'équivalence avec le Catalogue sans validation.
- Entrées historiques visibles et séparées du Catalogue canonique, mais jamais proposées aux stocks aléatoires sans source canonique active.
- Aucune écriture sur les Items existants au chargement. Test de non-régression ajouté.

## 0.2.2 — Protéger les macros personnalisées (P1)
- Identifier explicitement le lanceur officiel par flag et enregistrer la commande générée.
- Préserver les commandes personnalisées et les macros en conflit de nom ; ne jamais réécrire sur la base du nom seul.
- Adopter les anciens lanceurs uniquement sur correspondance exacte, sans modifier leur contenu.
- Tests automatisés de création, adoption, personnalisation, renommage et collision.
- Validation en Foundry v14 à effectuer.

## 0.2.1 — Correction des dépendances Foundry VTT 14
- Déclare H0D Template Manager dans `relationships.requires` avec son manifeste officiel et la version minimale `0.3.0` déjà exigée.
- Conserve la déclaration CSB, les caractéristiques et les Items existants.
- Ajoute un test de manifeste pour prévenir les régressions.

## v0.2.0 — H0D Catalogue référence unique
- Lecture canonique prioritaire, catalogue de stock exclusivement standard et non réservé.
- Conservation séparée des 33 clés historiques non harmonisées.
- Barrières pour les plans incomplets, consultation et diagnostic des références.
- Tests du pont via environnement simulé, sans migration de fiches existantes.

## 0.1.1 — Équipement en série

- Fenêtre persistante ; plusieurs objets, ressources, stocks et catalogues dans une session.
- Sélections conservées, retour de succès/erreur dans le dialogue, verrou pendant traitement.
- Par défaut, les références existantes sont conservées ; toute modification destructrice demande confirmation.

# Changelog

## 0.1.0
- Création du H0D Equipment Builder.
- Macro automatique de lancement.
- Catalogue initial de 33 références issu des équipements validés des factions Menace 1.
- Génération d’un équipement précis.
- Génération de stocks de vendeurs / caravanes.
- Génération d’un catalogue de validation pour H0D Template Manager.
- Intégration H0D Template Manager v0.3.0+.
- Conservation des images personnalisées lors des mises à jour.
- API publique pour réutilisation par Faction Builder, Loot et Template Manager.
