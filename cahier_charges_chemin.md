# Cahier de Charges: Trace ton chemin

## 📌 Informations du Projet

*Nom du projet:* Dernier Souvenir    
*Nom de l'équipe:* Les Triples E  
*Membres:*

- Elie Daher - Chef de projet / Architecture
- Edelwyn - Design / Animations
- Émeryk - Données / Système

*Date de début:* 12 Octobre 2025  
*Date de livraison finale:* 10 Décembre 2025 
*Version du document:* 1.0


## 🎯 1. Présentation du Projet

### 1.1 Concept général

[Lien Figjam](https://www.figma.com/board/P8qWF9ylk7jzPdJ829fRMf/Untitled?node-id=7-1918&t=iv6g1hJCntBhhBCC-0)

L’histoire s’ouvre dans l’habitacle d’un vieux camion, tôt le matin, alors que David conduit avec sa fille Aurora vers une zone de randonnée isolée au cœur d’une chaîne montagneuse. La lumière dorée de l’automne filtre à travers les arbres et la radio diffuse une musique légèrement brouillée par l’électricité statique. C’est une sortie qui devait être paisible, une tradition familiale… mais quelque chose dans l’air est lourd, presque électrique. Une tempête imprévisible se profile à l’horizon, et David choisit malgré tout de continuer la route, persuadé que tout ira bien.

Au fil de l’exploration, le joueur devra choisir quel matériel emporter avant de quitter le camion — sans savoir que ces objets auront une importance cruciale plus tard (corde, lampe, nourriture, carte, trousse de secours, etc.). Ces choix influenceront la difficulté et la nature des événements qui se dérouleront pendant l’ascension. À mesure qu’ils progressent sur le sentier, la météo se dégrade soudainement, transformant une simple randonnée en un piège naturel et psychologique. Les repères disparaissent, les sons se déforment, et des visions troublantes commencent à hanter David.

Au fur et à mesure des boucles, l’histoire révèle progressivement que David n’est pas une simple victime de la montagne, mais qu’il porte en lui une culpabilité profonde liée à un accident tragique : c’est lui qui a insisté pour faire cette ascension malgré les signes évidents de danger, menant à la chute mortelle de sa fille. La montagne agit comme un espace mental surnaturel, forçant David à revivre la journée encore et encore, peu importe les choix, pour l’amener à affronter sa responsabilité. Le message est clair : on ne peut pas échapper à son destin, seulement l’accepter ou s’y perdre.

### 1.2 Public cible

- *Âge:* 18-40 ans
- *Profil:* Les amateurs d'horreur psychologique, les parents
- *Niveau technique:* Utilisateurs grand public
- *Temps de lecture estimé:* 15-30 minutes

### 1.3 Objectifs du projet

- [x] Créer une expérience narrative immersive et émotionnelle
- [x] Développer un système de choix avec conséquences réelles
- [x] Implémenter un système de sauvegarde de progression
- [x] Démontrer la maîtrise de Vue.js, GSAP et Pinia
- [x] Créer une interface accessible et responsive
- [x] Créer une histoire qui résonne avec les parents

## 📖 2. Architecture Narrative

### 2.1 Synopsis détaillé

Par un matin d’automne au début des années 2000, David, un père de 39 ans, et sa fille de 14 ans Aurora prennent la route à bord de leur vieux camion en direction d’un sentier de montagne isolé. Malgré une météo orageuse annoncée et un ciel déjà chargé de nuages menaçants, ils décident de maintenir leur sortie et de tenter l’ascension coûte que coûte, convaincus que tout ira bien. La lumière orangée filtrant à travers la brume et la radio grésillante instaurent une atmosphère à la fois familière et inquiétante. Une fois arrivés au point de départ, le joueur doit choisir quels objets emporter: lampe, corde, trousse de secours, etc.  des décisions qui paraissent anodines mais influenceront subtilement la suite du parcours. Le sentier se divise ensuite en plusieurs chemins, par exemple une piste forestière tranquille, un sentier rocailleux plus risqué, etc...

Tout au long de la randonnée, une série de choix semi-importants s’offre au joueur : aider ou ignorer une personne croisée, explorer une cabane abandonnée ou poursuivre la marche, suivre l’élan d’Aurora ou la retenir par prudence. Ces décisions façonnent la dynamique entre le père et la fille, leur préparation et l’ambiance générale jusqu’à l’arrivée au pied de la montagne. Là, malgré les conditions météorologiques de plus en plus dangereuses, le choix décisif de gravir ou non la paroi est proposé, déclenchant différentes fins influencées par le chemin parcouru et les actions passées. Et pour ceux qui atteignent une fin particulière puis décident de rejouer sur la même sauvegarde, une fin secrète se débloque, révélant une dimension supplémentaire à cette journée qui semble condamnée à se répéter.

### 2.2 Arbre narratif

![Arbre](/img/arbres_choix.png)

### 2.3 Liste des chapitres/scènes

| # | Nom du chapitre | Type | Description courte | Choix proposés | Conséquences |
|---|----------------|------|-------------------|----------------|--------------|
| Acte 1 Chapitre 1 | [En Route] | Linéaire | Introduction des personnages et du contexte | Aucun (intro) | N/A |
| Acte 1 Chapitre 2 | [Préparation] | Choix Linéaire | Choisir les objets pour la randonnée | 8 choix d'objets, mais 4 possible à choisir | Détermine 1 des fins |
| Acte 2 Chapitre 1 | [Le Chemin] | Choix | Choisir le chemin à prendre | 2 choix: gauche ou droite | Branche A ou B |
| Acte 2 Chapitre 2 Branche A | [L’Arbre Tombé] | Choix | Un arbre massif bloque complètement le sentier | 3 choix : Le contourner par la pente abrupte, Le franchir avec précaution, Chercher un autre passage | Branche AA ou AB ou AC |
| Acte 2 Chapitre 3 Branche AA | [Le Pont de Bois] | Choix | Vous arrivez devant un vieux pont suspendu au-dessus d’un ravin. Aurora hésite à le traverser | 2 choix: La rassurer et traverser calmement, La presser sans l’écouter | Branche AAA ou AAB |
| Acte 2 Chapitre 4 Branche AAA | [Pas Légers] | Linéaire | La marche reprend dans une ambiance détendue, Aurora vous sourit. | Aucun | Chapitre 5 |
| Acte 2 Chapitre 4 Branche AAB | [Silence Tendu] | Linéaire | Vous continuez la marche dans une ambiance froide et tendue. | Aucun | Chapitre 5 |
| Acte 2 Chapitre 3 Branche AB | [Clairière Étrange] | Linéaire | Vous arrivez dans une clairière silencieuse, recouverte de feuilles orangées. L’air est immobile. | Aucun | Branche ABA |
| Acte 2 Chapitre 4 Branche ABA | [Terrain Glissant] | Choix Linéaire | Le sentier devient boueux et difficile à distinguer. Si vous avez les bottes, vous trouvez un chemin sûr. Sinon, plus difficle. | Bottes ou pas | Chapitre 5 |
| Acte 2 Chapitre 3 Branche AC | [Le Brouillard] | Choix | Une épaisse brume s’installe rapidement. Vous perdez un peu vos repères. | 2 choix : Avancer prudemment, Se dépêcher pour la traverser | Branche ACA ou ACB |
| Acte 2 Chapitre 4 Branche ACA | [Terrain Accidenté] | Linéaire | Le sentier devient de plus en plus irrégulier. Aurora à de la misère à se déplacer. vous avancez jusqu’à retrouver un chemin plus praticable. | Aucun | Chapitre 5 |
| Acte 2 Chapitre 4 Branche ACB | [Remise en Question] | Linéaire | Alors que vous sortez du brouillard, Aurora brise le silence et remet en question vos décisions depuis le départ. L’atmosphère devient lourde et tendue, mais vous continuez d’avancer côte à côte. | Aucun | Chapitre 5 |
| Acte 2 Chapitre 5 Branche A | [La Cabane du Vieil Homme] | Choix | Vous rencontrez Gérald, un vieux monsieur vivant seul dans une cabane isolée. Il vous demande de l’aide | 2 choix: l’aider avec une corde (si disponible), l’ignorer | Chapitre 6 Branche AA ou AB |
| Acte 2 Chapitre 6 Branche AA | [La Pente Difficile] | Linéaire | Après avoir quitté la cabane de Gérald, vous vous engagez sur une longue montée, vous continuez lentement jusqu’à atteindre un plateau surélevé. | Aucun | Acte 3 |
| Acte 2 Chapitre 6 Branche AB | [La Forêt Silencieuse] | Linéaire | Après avoir quitté la cabane, vous avancez sur un long sentier entouré d’arbres immenses. Le vent fait craquer les branches au-dessus de vous. Aurora se rapproche instinctivement de vous alors que vous vous enfoncez dans la forêt vers la montagne. | Aucun | Acte 3 |
| Acte 2 Chapitre 2 Branche B | [La Bête] | Choix | Choisir comment réagir avec l'animal | 3 choix: L'approcher, Ignorer et continuer le chemin, Le Chasser (si fusil dans l'inventaire) | Branche BA ou BB ou BC |
| Acte 2 Chapitre 3 Branche BA | [Conversation Importante] | Choix | Choisir le bon dialogue avec sa fille | 2 choix: Réponse A, Réponse B | Branche BAA ou BAB |
| Acte 2 Chapitre 4 Branche BAA | [Mauvais Dialogue] | Linéaire | Marche avec sa fille, mais elle est faché | Aucun | Chapitre 5 |
| Acte 2 Chapitre 4 Branche BAB | [Bon Dialogue] | Linéaire | Marche avec sa fille, mais elle est heureuse | Aucun | Chapitre 5 |
| Acte 2 Chapitre 3 Branche BB | [Repos] | Linéaire | Les 2 décide de s'arrêter et de profiter de la nature pendant un certain temps | Aucun | Branche BBA |
| Acte 2 Chapitre 4 Branche BBA | [Perdu] | Choix Linéaire | Si ont la carte ou pas, change le texte | Carte ou pas | Chapitre 5 |
| Acte 2 Chapitre 3 Branche BC | [Bête Abattue] | Choix | Choisir quoi faire avec la bête morte | 2 choix: Le laisser et partir, Rester et le manger | Branche BCA ou BCB |
| Acte 2 Chapitre 4 Branche BCA | [Ruisseau] | Linéaire | Vous voyez un ruisseau d'eau et buvez un peu | Aucun | Chapitre 5 |
| Acte 2 Chapitre 4 Branche BCB | [Fuite] | Choix Linéaire | Une bête vous effraient et partez rapidement | Choix entre 2 objets sur 4 à garder | Chapitre 5 |
| Acte 2 Chapitre 5 Branche B | [Le Buisson] | Choix Linéaire | Choisir quoi faire avec le buisson rempli de baies | 2 choix: Prendre des baies, Ignorer le buisson | Acte 3 |
| Acte 3 | [Décision] | Choix | Choisir de grimper la montagne ou pas | 2 choix: Grimper ou retourner en arrière | Branche A (Fin 1) ou Branche B (Continuation) |
| Acte 3 Branche B | [La montagne] | Choix | En grimpant la montagne, il y aura une inconvénience surprise dont tu auras besoin d'un objet crucial | 2 choix: Utiliser la corde ou ne pas utiliser la corde | Branche BA (Continuation), Branche BB (Fin 2) |
| Acte 3 Branche BA | [La fin?] | Choix | Au sommet de la montagne, tu retournes pour voir...  | 4 choix progression | Branche BAA (Fin 3), Branche BAB (Fin 4), Branche BAC (Fin 5), Branche BAD (Fin 6) |


### 2.4 Fins possibles

| # | Nom de la fin | Condition pour l'atteindre | Type (bonne/mauvaise/neutre) |
|---|--------------|---------------------------|------------------------------|
| 1 | [Prudence] | Par choix (Aucun Requis) | Neutre |
| 2 | [Chute Finale] | Monter la montagne, mais manque un objet | Mauvaise |
| 3 | [Déni] | Monter la montagne, avoir l'objet | Neutre |
| 4 | [Marchandage] | Monter la montagne, avoir l'objet, avoir fait la fin "Deni" | Neutre |
| 5 | [Resignation] | Monter la montagne, avoir l'objet, avoir fait la fin "Deni" et "Marchandage" | Mauvaise |
| 6 | [Acceptance] | Monter la montagne, avoir l'objet, avoir fait la fin "Deni" et "Marchandage" | Bonne |

### 2.5 Personnages principaux

| Nom | Rôle | Description | Apparaît dans |
|-----|------|-------------|---------------|
| David | Protagoniste  | Père | Tous les chapitres |
| Aurora | Personnage Pivot | Fille | Tous les chapitres |
| Gerald | Figurant | Vieux monsieur dans la cabane | Chapitre 5 |


### 2.6 Système de conséquences

Comment les choix influencent l'histoire?
- Le choix d'objets (inventaire) force des chemins différents et peuvent éventuellement amener à être forcé d'avoir une des fins possibles
- Les chemins et les choix en randonnées changent l'histoire durant l'acte 2, mais la majorité ne change rien de permanant
- Les choix à l'acte 3 décident de la fin

*Mécanisme choisi:*

- [ ] *Système de karma/moralité* (points bons/mauvais)
- [ ] *Stats du personnage* (courage, intelligence, empathie)
- [x] *Inventaire d'objets* (collecte d'items)
- [ ] *Relations avec personnages* (affinités)
- [x] *Flags de choix* (choix X débloque scène Y)
- [x] *Combinaison de plusieurs systèmes*

*Exemple de tracking:*
```javascript
playerState: {
  inventory: ['Corde', 'Lampe', 'Carabine'],
  flags: {
    hasUnlockedSecretEnding: true,
  }
}
```


## 🎨 3. Design et Identité Visuelle

### 3.1 Moodboard

Insérez ici 3-5 images d'inspiration (ou liens):

- [Image 1: Ambiance générale]
- [Image 2: Style visuel des personnages]
- [Image 3: Palette de couleurs]
- [Image 4: Typographie inspirante]
- [Image 5: Animations de référence]

### 3.2 Palette de couleurs

*Couleurs par ambiance/chapitre:*

- *Chapitres introduction:* [#XXXXXX] - Tons neutres
- *Chapitres tension:* [#XXXXXX] - Tons sombres/dramatiques
- *Chapitres espoir:* [#XXXXXX] - Tons clairs/lumineux
- *Chapitres danger:* [#XXXXXX] - Rouge/orange

*Couleurs système:*

- Primaire (actions principales): [#XXXXXX]
- Secondaire (choix): [#XXXXXX]
- Succès: [#10B981]
- Danger: [#EF4444]
- Neutre: [#6B7280]

### 3.3 Typographie

- *Titres narratifs:* [Nom de la police] - [Lien Google Fonts]
- *Texte de narration:* [Nom de la police] - Lisible, serif ou sans-serif
- *Dialogues:* [Nom de la police] - Différencié du texte narratif
- *Boutons de choix:* [Nom de la police] - Bold, impactant

### 3.4 Style visuel

Choisissez un ou plusieurs styles:

- [ ] Cinématique (film noir, thriller)
- [ ] Illustratif (dessins, concept art)
- [ ] Minimaliste (focus sur le texte)
- [ ] Immersif (photos, ambiances réalistes)
- [ ] Stylisé (flat design, géométrique)

### 3.5 Éléments visuels par chapitre

| Chapitre | Image de fond | Effets visuels | Sons/musique |
|----------|---------------|----------------|--------------|
| 1 | [Description ou lien] | Fade in progressif | Musique douce, intro |
| 2 | | | |
| 3 | | | |
| ... | | | |


## 💻 4. Spécifications Techniques

### 4.1 Stack technologique

*Frontend obligatoire:*

- ✅ Vue.js 3 (Composition API ☐ / Options API ☐)
- ✅ Vite
- ✅ Vue Router
- ✅ Pinia (state management)
- ✅ CSS
- ✅ GSAP + ScrollTrigger (optionnel selon style)

*Librairies additionnelles envisagées:*

- [ ] VueUse (composables utilitaires)
- [ ] Typed.js (effet de machine à écrire)
- [ ] Howler.js (gestion audio avancée)
- [ ] [Autre]

### 4.2 Architecture des composants

Listez vos composants Vue principaux:

*Composants de layout:*

- `AppHeader.vue` - Navigation et menu
- `SaveSlotManager.vue` - Gestion des sauvegardes
- `ProgressBar.vue` - Barre de progression dans l'histoire

*Composants de contenu:*

- `ChapterView.vue` - Vue d'un chapitre/scène
- `NarrativeText.vue` - Affichage du texte narratif
- `DialogueBox.vue` - Boîte de dialogue pour personnages
- `ChoiceButton.vue` - Bouton de choix interactif
- `ChoicePanel.vue` - Panel contenant tous les choix

*Composants système:*

- `InventoryDisplay.vue` - Affichage de l'inventaire
- `StatsPanel.vue` - Affichage des stats du joueur
- `EndingScreen.vue` - Écran de fin avec récapitulatif
- `Modal.vue` - Fenêtre modale (sauvegarde, options)

*Composants UI:*

- `ButtonPrimary.vue` - Bouton principal
- `LoadingSpinner.vue` - Indicateur de chargement
- `AudioController.vue` - Contrôle de la musique/sons

### 4.3 Routes (Vue Router)

| Route | Composant | Description | Params |
|-------|-----------|-------------|--------|
| `/` | `HomeView.vue` | Menu principal | - |
| `/nouvelle-partie` | `CharacterSetupView.vue` | Config initiale (nom, etc.) | - |
| `/chapitre/:id` | `ChapterView.vue` | Vue d'un chapitre | id du chapitre |
| `/fin/:endingId` | `EndingView.vue` | Écran de fin | id de la fin |
| `/sauvegardes` | `SavesView.vue` | Gestion des sauvegardes | - |
| `/credits` | `CreditsView.vue` | Crédits | - |

### 4.4 Gestion de l'état (Pinia)

*Stores prévus:*

1. *`useStoryStore`*
   - State: `currentChapterId`, `visitedChapters`, `storyData`, `availableChoices`
   - Actions: `loadChapter()`, `makeChoice()`, `goToChapter()`
   - Getters: `currentChapter`, `isChapterUnlocked()`

2. *`usePlayerStore`*
   - State: `playerName`, `karma`, `stats`, `inventory`, `flags`, `relationships`
   - Actions: `addToInventory()`, `updateStat()`, `setFlag()`, `updateRelationship()`
   - Getters: `hasItem()`, `getRelationship()`, `canAccessEnding()`

3. *`useSaveStore`*
   - State: `saveSlots` (array de 3 slots)
   - Actions: `saveGame()`, `loadGame()`, `deleteSave()`, `getSaveInfo()`
   - Getters: `hasSaves`, `latestSave`

4. *`useAudioStore`* (optionnel)
   - State: `currentMusic`, `soundEffects`, `volume`, `isMuted`
   - Actions: `playMusic()`, `playSound()`, `toggleMute()`, `setVolume()`

### 4.5 Persistance des données

*Méthode choisie:*

- [x] LocalStorage (obligatoire pour sauvegardes)
- [ ] Firebase Firestore (bonus optionnel pour galerie publique)

*Structure de données LocalStorage:*

```json
{
  "saveSlot1": {
    "savedAt": "2025-01-15T14:30:00Z",
    "playerName": "Alex",
    "currentChapterId": "chapter-5",
    "playerState": {
      "karma": 5,
      "stats": {
        "courage": 7,
        "intelligence": 8,
        "empathy": 6
      },
      "inventory": ["clé", "journal", "photo"],
      "flags": {
        "hasActivatedMachine": true,
        "knowsTheSecret": true,
        "savedMarcus": false
      },
      "relationships": {
        "marcus": 8,
        "chronos": -5
      }
    },
    "visitedChapters": ["ch-1", "ch-2", "ch-3a", "ch-4", "ch-5"],
    "choiceHistory": [
      { "chapterId": "ch-2", "choiceId": "activate", "timestamp": "..." },
      { "chapterId": "ch-3a", "choiceId": "go-past", "timestamp": "..." }
    ]
  },
  "saveSlot2": null,
  "saveSlot3": null,
  "settings": {
    "volume": 0.7,
    "textSpeed": "normal",
    "autoSave": true
  }
}
```

### 4.6 Structure de données de l'histoire

Comment stockez-vous les chapitres et choix?

*Option A: JSON statique* (recommandé)
```javascript
// data/chapters.json
{
  "ch-1": {
    "id": "ch-1",
    "title": "Le Réveil",
    "text": "Vous vous réveillez dans votre laboratoire...",
    "backgroundImage": "/images/bg-lab.jpg",
    "music": "intro-theme.mp3",
    "choices": null,  // Chapitre linéaire
    "nextChapter": "ch-2"
  },
  "ch-2": {
    "id": "ch-2",
    "title": "La Découverte",
    "text": "Face à la machine, vous devez décider...",
    "backgroundImage": "/images/bg-machine.jpg",
    "music": "tension-theme.mp3",
    "choices": [
      {
        "id": "activate",
        "text": "Activer la machine",
        "consequence": "Vous entrez dans l'inconnu...",
        "nextChapter": "ch-3a",
        "effects": {
          "karma": -2,
          "stats": { "courage": +1 },
          "flags": { "hasActivatedMachine": true }
        }
      },
      {
        "id": "report",
        "text": "Rapporter la découverte",
        "consequence": "La prudence avant tout...",
        "nextChapter": "ch-3b",
        "effects": {
          "karma": +2,
          "stats": { "intelligence": +1 },
          "flags": { "hasReported": true }
        }
      }
    ]
  }
}
```


## 🎬 5. Fonctionnalités et User Stories

### 5.1 Fonctionnalités MVP (Minimum Viable Product)

*Obligatoires pour la livraison:*

- [ ] *F1 - Lecture de l'histoire*
  - Affichage du texte narratif chapitre par chapitre
  - Navigation linéaire dans l'intro
  - Transitions fluides entre chapitres

- [ ] *F2 - Système de choix*
  - Affichage de 2-4 choix par chapitre décisionnel
  - Sélection d'un choix
  - Redirection vers le chapitre suivant approprié
  - Minimum 8 chapitres avec au moins 3 fins

- [ ] *F3 - Tracking des conséquences*
  - État du joueur (karma/stats/flags)
  - Mise à jour après chaque choix
  - Conditions pour débloquer fins

- [ ] *F4 - Système de sauvegarde*
  - 3 slots de sauvegarde
  - Sauvegarde manuelle
  - Chargement d'une sauvegarde
  - Affichage des infos de sauvegarde (date, progression)

- [ ] *F5 - Historique des choix*
  - Garder trace des décisions prises
  - Affichage dans un menu (optionnel mais recommandé)

- [ ] *F6 - Écrans de fin*
  - Affichage de la fin atteinte
  - Récapitulatif des choix faits
  - Option de recommencer ou charger

- [ ] *F7 - Interface responsive*
  - Mobile (320px+)
  - Tablette (768px+)
  - Desktop (1024px+)

- [ ] *F8 - Animations de texte*
  - Apparition progressive du texte (optionnel: effet typewriter)
  - Transitions entre chapitres avec GSAP

- [ ] *F9 - Accessibilité*
  - Navigation au clavier
  - ARIA labels
  - Contraste WCAG AA
  - Option skip animations

- [ ] *F10 - Médias intégrés*
  - Images de fond par chapitre
  - Musique d'ambiance (avec contrôle volume)

### 5.2 Fonctionnalités bonus (optionnelles)

- [ ] *B1 - Auto-save*
  - Sauvegarde automatique à chaque chapitre
  - Indication visuelle de la sauvegarde

- [ ] *B2 - Inventaire visuel*
  - Affichage graphique des items
  - Description des objets au survol

- [ ] *B3 - Stats visuelles*
  - Barres de progression pour stats
  - Graphique radar des caractéristiques

- [ ] *B4 - Arbre de choix visualisé*
  - Carte interactive des chemins possibles
  - Indication des chapitres visités/non-visités

- [ ] *B5 - Galerie des fins*
  - Collection de toutes les fins débloquées
  - Pourcentage de complétion

- [ ] *B6 - Mode rejouabilité*
  - Fast-forward pour texte déjà lu
  - Skip to choice (sauter au prochain choix)

- [ ] *B7 - Effets sonores contextuels*
  - Sons lors de choix importants
  - Ambiances sonores par scène

- [ ] *B8 - Animations avancées GSAP*
  - Parallax sur les backgrounds
  - Animations de transition complexes

- [ ] *B9 - Firebase (équipes avancées)*
  - Partage de fins débloquées
  - Galerie publique d'histoires

### 5.3 User Stories

*Format:* En tant que [rôle], je veux [action] afin de [bénéfice]

1. *US-01:* En tant que lecteur, je veux lire une histoire interactive afin de vivre une expérience narrative immersive.

2. *US-02:* En tant que joueur, je veux faire des choix qui ont des conséquences afin de sentir que mes décisions comptent.

3. *US-03:* En tant qu'utilisateur, je veux sauvegarder ma progression afin de reprendre plus tard sans perdre mon avancement.

4. *US-04:* En tant que lecteur, je veux voir l'impact de mes choix afin de comprendre comment ils influencent l'histoire.

5. *US-05:* En tant que joueur, je veux atteindre différentes fins afin de découvrir toutes les possibilités de l'histoire.

6. *US-06:* En tant qu'utilisateur mobile, je veux lire l'histoire sur mon téléphone afin d'en profiter partout.

7. *US-07:* En tant que lecteur, je veux consulter l'historique de mes choix afin de me rappeler mes décisions passées.

8. *US-08:* En tant que joueur, je veux collecter des objets/débloquer des stats afin de me sentir progresser dans l'aventure.

9. *US-09:* En tant qu'utilisateur, je veux contrôler le volume sonore afin d'adapter l'expérience à mon environnement.

10. [Ajoutez vos user stories]


## 📊 6. Maquettes et Wireframes

### 6.1 Lien vers les maquettes Figma

*Lien:* [Insérez votre lien Figma]

### 6.2 Écrans principaux à maquetter

- [ ] Menu principal (nouvelle partie, charger, options)
- [ ] Écran de chapitre avec texte narratif
- [ ] Panel de choix (2-4 options)
- [ ] Inventaire/Stats (si applicable)
- [ ] Écran de fin avec récapitulatif
- [ ] Gestion des sauvegardes (3 slots)
- [ ] Version mobile d'au moins 2-3 écrans

### 6.3 Interactions clés à maquetter

- Apparition progressive du texte
- Animations des boutons de choix
- Transition entre chapitres
- Ouverture de l'inventaire/stats
- États des boutons (hover, actif, disabled)


## 📊 7. Plan de Réalisation

### 7.1 Répartition des rôles

| Membre | Rôle principal | Responsabilités |
|--------|----------------|-----------------|
| [Nom] | Chef de projet + Architecture Vue | Coordination, Vue Router, stores Pinia, structure de l'histoire |
| [Nom] | Design + Animations | CSS, design visuel, animations GSAP, transitions |
| [Nom] | Contenu + Narration | Écriture des chapitres, création de l'arbre narratif, dialogues |
| [Nom] | Données + Système | Gestion des sauvegardes, LocalStorage, logique de choix, stats |

*Note:* Tous participent au développement, mais chacun a sa spécialité.

### 7.2 Tâches transversales

*À répartir entre tous:*

- Tests de l'histoire (lecture complète)
- Correction de fautes et relecture
- Tests et debugging
- Documentation du code
- Présentation finale

### 7.3 Outils de collaboration

- *Git/GitHub:* [Lien du repo]
- *Gestion de projet:* [Trello / Word / GitHub Projects]
- *Communication:* [Teams]
- *Design:* [Figma]
- *Documentation:* [Word / Google Docs / README.md]
- *Écriture collaborative:* [Google Docs / Word]


## 🚀 8. Critères de Succès

### 8.1 Critères techniques

- [ ] Application Vue.js fonctionnelle sans erreurs console
- [ ] Minimum 8 composants Vue bien structurés
- [ ] Vue Router avec 5+ routes
- [ ] Pinia implémenté avec state management cohérent
- [ ] CSS organisé avec variables
- [ ] Animations GSAP fluides
- [ ] Système de sauvegarde fonctionnel
- [ ] Code validé (ESLint)
- [ ] Responsive sur 3 breakpoints
- [ ] Accessibilité WCAG AA

### 8.2 Critères narratifs

- [ ] Histoire cohérente du début à la fin
- [ ] Minimum 8 chapitres/scènes
- [ ] Au moins 3 fins différentes
- [ ] Choix ayant un impact réel sur l'histoire
- [ ] Aucune faute d'orthographe majeure
- [ ] Dialogues naturels et crédibles
- [ ] Rythme narratif bien dosé

### 8.3 Critères de qualité

- [ ] Interface intuitive et facile à utiliser
- [ ] Design cohérent et esthétique
- [ ] Lisibilité du texte (taille, contraste, police)
- [ ] Animations pertinentes (pas excessives)
- [ ] Temps de chargement < 2 secondes
- [ ] Aucun bug bloquant
- [ ] Musique/sons appropriés
- [ ] Documentation complète (README)

### 8.4 Critères créatifs

- [ ] Histoire originale et engageante
- [ ] Personnages mémorables
- [ ] Twist ou surprise dans l'intrigue
- [ ] Expérience émotionnelle impactante
- [ ] Rejouabilité (envie de tester d'autres chemins)


## 📅 9. Calendrier du projet: Planning prévisionnel

### 9.1 *PHASE 1: PLANIFICATION ET DESIGN*
<!--Semaine 1-2 (la 2 étant la semaine de rattrapage)-->

**Du 8 au 22 octobre**

*Remise 22 octobre | 15%*

- Rédaction du cahier de charges
- Écriture de l'arbre narratif complet
- Design: Création des maquettes Figma
- Définition de l'architecture technique
- Setup du projet (Vite + Vue + dépendances)

### 9.2 *PHASE 2: FONDATION*
<!--Semaine 3-4-->

**Du 22 octobre au 2 novembre environ**

*Remise Phases 2 FONDATION et 3 INTERACTIVITÉ : vendredi 14 novembre | 15%*

!!! tip "Le projet portfolio en parallèle"
    Notez que mercredi le 29 octobre c'est la remise et présentation de votre portfolio donc nous laissons un peu plus qu'une semaine pour cette phase car vous allez probablement finaliser votre portfolio en même temps.

- Structure des composants de base
- Vue Router configuré
- Pinia stores créés
- Premiers chapitres (texte + affichage)

### 9.3 *PHASE 3: INTERACTIVITÉ - Système de Choix*
<!-- Semaine 4-5-->

**Environ du 2 novembre au 12 novembre**

*Remise Phases 2 FONDATION et 3 INTERACTIVITÉ : vendredi 14 novembre | 15%*

- Logique de branches narratives
- Système de tracking des conséquences
- Composants de choix interactifs
- Plus de chapitres écrits et intégrés


### 9.4 *PHASE 4: ANIMATIONS ET MÉDIAS*
<!-- Semaine 6 -->

**Du 12 au 19 novembre**

*Remise Phases 4 ANIMATIONS+MÉDIAS et 5 PERSISTANCE : 26 novembre | Formatif*

- Intégration GSAP (transitions)
- Images de fond par chapitre
- Musiques/sons d'ambiance
- Animations de texte


### 9.x *ÉVALUATION PAR LES PAIRS ET AUTO-ÉVALUATION DE MI PARCOURS*

**Sera fait en classe le 19 novembre**

*Remise de l'évaluation par les pairs et auto-évaluation de mi parcours: 19 novembre | 5%*


### 9.5 *PHASE 5: PERSISTANCE ET SAUVEGARDE DES DONNÉES + Fin de l'histoire*
<!-- Semaine 7 -->

**Du 19 au 26 novembre**

*Remise Phases 4 ANIMATIONS+MÉDIAS et 5 PERSISTANCE : 26 novembre | Formatif*

- Système de sauvegarde (3 slots)
- LocalStorage complet
- Toutes les fins écrites et intégrées
- Écrans de fin avec récapitulatif

### 9.6 *PHASE 6: AFFINAGE ET ACCESSIBLITÉ* pour la version *BETA*

**Du 26 novembre au 3 décembre**

*Remise version *BETA* le 3 décembre | Formatif*

- Responsive final
- Accessibilité (ARIA, keyboard)

### 9.7 *PHASE 7:  CONTRÔLE QUALITÉ ET CORRECTIONS*
<!-- Semaine 8 -->
**Du 3 au 8 décembre**

*Remise Phase 7 RAPPORT DU CONTRÔLE DE LA QUALITÉ : 8 décembre | 10%*

- Tests de toutes les branches de l'histoire
- Tests fonctionnels
- Tests multi-plateformes (navigateurs et appareils)
- Relecture et corrections
- Optimisation de la performance
- Gestion des bogues

### 9.8 *PHASE 8:  FINALISATION*
<!-- Semaine 8 + 2 jours-->

**Du 3 au 10 décembre** (peut-être fait en parallèle avec la phase 7)

*Remise et présentation finale : 10 décembre | 50%*

- Documentation (README complet)
- Déploiement - Mise en ligne (GitHub/Netlify/Vercel)
- Vidéo de présentation
- Préparation de la démo en classe

### 9.9 *PHASE 9: POST-MORTEM*

**Du 10 au 12 décembre**

*Remise de l'analyse réflexive et suivi de l'évaluation de mi-parcours: 12 décembre | 5%*


## 🎯 10. Risques et Solutions

| Risque | Probabilité | Impact | Solution préventive |
|--------|-------------|--------|---------------------|
| Scope creep narratif (trop d'histoire) | Élevée | Élevé | Limiter à 8-10 chapitres max, garder histoires simples |
| Manque de temps pour écrire | Élevée | Élevé | Écrire les chapitres AVANT de coder, paralléliser |
| Bugs dans la logique de branches | Moyenne | Élevé | Tester chaque branche manuellement, diagramme clair |
| Incohérences narratives | Moyenne | Moyen | Relecture croisée, document de tracking des flags |
| Fautes d'orthographe | Élevée | Faible | Utiliser correcteur, relecture collective |
| Sauvegardes corrompues | Faible | Élevé | Validation JSON, gestion d'erreurs, tests intensifs |


## 📝 11. Annexes

### 11.1 Ressources et références

*Documentation officielle:*

- Contenu du cours Web 5 https://tim-montmorency.com/compendium/582-511-web5/
- Guide étudiant du projet appli web créative: https://tim-montmorency.com/compendium/582-511-web5/projets/appweb-creative/syllabus_guide_etudiant.html
- Vue.js: https://vuejs.org
- Pinia: https://pinia.vuejs.org
- GSAP: https://greensock.com/docs/

*Inspiration narrative:*

- Bandersnatch (Black Mirror)
- Life is Strange
- Detroit: Become Human
- Twine games

*Tutoriels utiles:*

- [Lien vers tuto 1]
- [Lien vers tuto 2]

### 11.2 Glossaire

- *Branche:* Chemin narratif distinct selon les choix
- *Flag:* Variable booléenne qui track un événement
- *Ending:* Fin possible de l'histoire
- *Karma:* Système de moralité basé sur les choix
- *Node:* Point de décision dans l'arbre narratif
- *Save slot:* Emplacement de sauvegarde



## ✅ Validation du Cahier de Charges

*Date de validation:* [Date]

*Signatures:*

- Chef de projet: _______________
- Membre 2: _______________
- Membre 3: _______________
- Membre 4: _______________ (si applicable)

*Validation enseignant:* _______________  
*Date:* _______________  
*Commentaires:*

---

*Version du document cahier de charge:* 1.0  
*Dernière mise à jour:* [Écrire ici la date]
