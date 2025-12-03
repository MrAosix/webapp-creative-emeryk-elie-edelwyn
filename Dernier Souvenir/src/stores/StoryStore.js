import { defineStore } from "pinia";
import router from "@/router";
import story from "@/data/story-static.json";
import { useSaveStore } from "@/stores/SaveStore";
import { usePlayerStore } from "./PlayerStore";

// Store pour gérer l'état de l'histoire interactive
export const useStoryStore = defineStore("StoryStore", {
  state: () => ({
    storyData: story,
    currentChapterId: null,
    currentText: null,
    currentTextIndex: 0,
    currentChoice: null,
    visitedChapters: [],
    availableChoices: [],
    multipleChoiceSelection: [],
    multipleChoiceNeeded: null,
    multipleChoiceButtonAvailable: false,
    showChoicePanel: false,
    showConsequencePanel: false,
  }),

  // Getters pour accéder aux données dérivées de l'état
  getters: {
    // Récupère le chapitre actuel basé sur l'ID du chapitre
    currentChapter: (state) => {
      return state.storyData[state.currentChapterId];
    },
    // Vérifie si le texte actuel est le dernier du chapitre
    isTextFinished: (state) => {
      const Texts = state.currentChapter?.texts;
      return state.currentTextIndex >= Texts?.length;
    },
    // Vérifie si le choix multiple est actif
    isMultipleChoiceActive: (state) => {
      return state.availableChoices.length > 0 && state.availableChoices[0]?.buttonImage;
    },
    // Vérifie s'il n'y a pas de choix disponibles
    hasNoChoices: (state) => {
      return state.availableChoices.length === 0;
    },
    // Vérifie s'il n'y a pas de choix disponibles
    isChoiceSelected: (state) => (choiceName) => {
      return state.multipleChoiceSelection.includes(choiceName);
    },
    // Vérifie si le nombre maximum de sélections pour les choix multiples est atteint
    isMaxSelectionsReached: (state) => {
      return state.multipleChoiceSelection.length >= state.multipleChoiceNeeded;
    },
    // Vérifie si un choix spécifique est désactivé
    isChoiceDisabled: (state) => (choiceName) => {
      if (!state.multipleChoiceNeeded) return false;
      return state.multipleChoiceSelection.length >= state.multipleChoiceNeeded && !state.multipleChoiceSelection.includes(choiceName);
    },
    // Détermine si le panneau de choix simple doit être affiché
    shouldShowSingleChoicePanel: (state) => {
      return state.showChoicePanel && !state.isMultipleChoiceActive && !state.hasNoChoices;
    },
    // Détermine si le panneau de choix multiple doit être affiché
    shouldShowMultipleChoicePanel: (state) => {
      return state.showChoicePanel && state.isMultipleChoiceActive;
    },
    // Détermine si le panneau de conséquences doit être affiché
    shouldShowConsequencePanel: (state) => {
      return state.showConsequencePanel;
    },
  },

  // Actions pour modifier l'état
  actions: {
    // Initialise l'état de l'histoire à partir de la dernière sauvegarde
    initialize() {
      const saveStore = useSaveStore();

      if (saveStore.latestSave) {
        this.currentChapterId = saveStore.latestSave.currentChapterId;
      }
    },

    // Charge un chapitre spécifique et réinitialise l'état
    loadChapter(chapterId) {
      const saveStore = useSaveStore();

      this.currentChapterId = chapterId;
      this.currentChoice = null;
      this.currentTextIndex = 0;
      this.currentText = this.currentChapter.texts[this.currentTextIndex];
      this.multipleChoiceSelection = [];
      this.multipleChoiceButtonAvailable = false;
      this.multipleChoiceNeeded = null;

      // Always reset and reload visited chapters from the current save slot
      this.visitedChapters = [];
      const currentSlot = saveStore.saveSlots.currentSaveSlot;
      if (currentSlot && saveStore.saveSlots[currentSlot] && saveStore.saveSlots[currentSlot].visitedChapters) {
        this.visitedChapters = [...saveStore.saveSlots[currentSlot].visitedChapters];
      }

      this.resetPanels();
    },

    resetStoryState() {
      // Réinitialise l'état de l'histoire
      this.currentChapterId = null;
      this.visitedChapters = [];
      this.multipleChoiceSelection = [];
      this.multipleChoiceButtonAvailable = false;
      this.multipleChoiceNeeded = null;
      this.currentChoice = null;
      this.showChoicePanel = false;
      this.showConsequencePanel = false;
      this.currentText = null;
      this.currentTextIndex = 0;
    },

    // Avance au texte suivant ou affiche les choix/consequences si la fin du texte est atteinte
    goToNextText() {
      const Texts = this.currentChapter.texts;

      if (this.currentTextIndex < Texts.length - 1) {
        this.currentTextIndex++;
        this.currentText = Texts[this.currentTextIndex];
      } else {
        this.loadChoiceOptions();
        if (this.hasNoChoices) {
          this.showConsequencePanel = true;
          this.showChoicePanel = false;
        } else {
          this.showChoicePanel = true;
          this.showConsequencePanel = false;
        }
      }
    },

    // Navigue vers le chapitre suivant en enregistrant l'état actuel
    goToChapter(nextChapterId) {
      const saveStore = useSaveStore();
      if (this.currentChapterId && !this.visitedChapters.some((v) => v.chapterId === this.currentChapterId) && !this.currentChapterId.startsWith("end-")) {
        // Determine choice text based on choice type
        let choiceText = null;
        if (this.currentChoice && this.currentChoice.text) {
          // Single choice
          choiceText = this.currentChoice.text;
        } else if (this.multipleChoiceSelection.length > 0) {
          // Multiple choices
          choiceText = this.multipleChoiceSelection.join(", ");
        }

        const chapterEntry = {
          chapterId: this.currentChapterId,
          choice: choiceText,
        };
        this.visitedChapters.push(chapterEntry);

        const currentSlot = saveStore.saveSlots.currentSaveSlot;
        if (currentSlot && saveStore.saveSlots[currentSlot]) {
          if (!saveStore.saveSlots[currentSlot].visitedChapters.some((v) => v.chapterId === this.currentChapterId)) {
            saveStore.saveSlots[currentSlot].visitedChapters.push(chapterEntry);
          }
        }
      }

      this.currentChapterId = nextChapterId;
      saveStore.latestSave.currentChapterId = this.currentChapterId;
      this.loadChapter(nextChapterId);
      saveStore.saveGame();
      if (this.currentChoice) {
        // vérifier si le type de choix à un image (donc choix multiple) sinon c'est un choix normal
        if (this.isMultipleChoiceActive) {
          router.push(`/chapitre/${nextChapterId}`);
        } else if (this.hasNoChoices) {
          router.push(`/chapitre/${this.currentChapter.nextChapter}`);
        } else {
          router.push(`/chapitre/${this.currentChoice.nextChapterId}`);
        }
      }
      router.push(`/chapitre/${nextChapterId}`);
    },

    // Charge les options de choix disponibles pour le chapitre actuel
    loadChoiceOptions() {
      const chapter = this.currentChapter;
      this.availableChoices = chapter.choices;
      if (this.availableChoices === null) {
        this.availableChoices = [];
      } else {
        this.availableChoices = chapter.choices;
      }

      if (this.isMultipleChoiceActive && chapter.multipleChoiceNeeded) {
        this.multipleChoiceNeeded = chapter.multipleChoiceNeeded;
      }
    },

    // Gère la sélection d'un choix
    makeChoice(choice) {
      if (this.isMultipleChoiceActive) {
        this.multipleChoiceNeeded = this.currentChapter.multipleChoiceNeeded;
        const isAlreadySelected = this.multipleChoiceSelection.includes(choice.name);
        if (isAlreadySelected) {
          const index = this.multipleChoiceSelection.indexOf(choice.name);
          this.multipleChoiceSelection.splice(index, 1);
        } else {
          if (this.multipleChoiceSelection.length < this.multipleChoiceNeeded) {
            this.multipleChoiceSelection.push(choice.name);
          }
        }
        this.multipleChoiceButtonAvailable = this.multipleChoiceSelection.length === this.multipleChoiceNeeded;
      }

      this.currentChoice = choice;
    },

    // Gère la sélection d'un choix unique
    selectSingleChoice(choice) {
      const playerStore = usePlayerStore();
      const saveStore = useSaveStore();

      if (this.currentChapterId === "ch-7a" && choice.text.includes("Aider Gerald (donner la corde)")) {
        playerStore.removeFromInventory("Corde");
      } else if (this.currentChapterId === "ch-7b" && choice.text.includes("Prendre des baies")) {
        playerStore.addToInventory("Baies");
      } else if (this.currentChapterId === "ch-6bcb" && choice.text.includes("Alléger le sac (laisser deux objets aléatoires)")) {
        playerStore.removeRandomItemsFromInventory(2);
      }

      this.currentChoice = choice;
      this.showChoicePanel = false;
      this.showConsequencePanel = true;
    },

    // Confirme les choix multiples sélectionnés
    confirmMultipleChoices() {
      const playerStore = usePlayerStore();
      if (this.multipleChoiceButtonAvailable) {
        this.showChoicePanel = false;
        this.showConsequencePanel = true;
        for (const choiceName of this.multipleChoiceSelection) {
          playerStore.addToInventory(choiceName);
        }
        playerStore.inventory = [];
      }
    },

    // Réinitialise les panneaux de choix et de conséquences
    resetPanels() {
      this.showChoicePanel = false;
      this.showConsequencePanel = false;
    },
  },
});
