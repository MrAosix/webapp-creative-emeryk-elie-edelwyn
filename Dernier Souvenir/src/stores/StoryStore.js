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
    currentChapter: (state) => {
      return state.storyData[state.currentChapterId];
    },
    isTextFinished: (state) => {
      const Texts = state.currentChapter?.texts;
      return state.currentTextIndex >= Texts?.length;
    },
    isMultipleChoiceActive: (state) => {
      return state.availableChoices.length > 0 && state.availableChoices[0]?.buttonImage;
    },
    hasNoChoices: (state) => {
      return state.availableChoices.length === 0;
    },
    isChoiceSelected: (state) => (choiceName) => {
      return state.multipleChoiceSelection.includes(choiceName);
    },
    isMaxSelectionsReached: (state) => {
      return state.multipleChoiceSelection.length >= state.multipleChoiceNeeded;
    },
    isChoiceDisabled: (state) => (choiceName) => {
      if (!state.multipleChoiceNeeded) return false;
      return state.multipleChoiceSelection.length >= state.multipleChoiceNeeded && !state.multipleChoiceSelection.includes(choiceName);
    },

    shouldShowSingleChoicePanel: (state) => {
      return state.showChoicePanel && !state.isMultipleChoiceActive && !state.hasNoChoices;
    },

    shouldShowMultipleChoicePanel: (state) => {
      return state.showChoicePanel && state.isMultipleChoiceActive;
    },

    shouldShowConsequencePanel: (state) => {
      return state.showConsequencePanel;
    },
  },

  // Actions pour modifier l'état
  actions: {
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
      if (this.currentChapterId && !this.visitedChapters.includes(this.currentChapterId) && !this.currentChapterId.startsWith("end-")) {
        this.visitedChapters.push(this.currentChapterId);

        const currentSlot = saveStore.saveSlots.currentSaveSlot;
        if (currentSlot && saveStore.saveSlots[currentSlot]) {
          if (!saveStore.saveSlots[currentSlot].visitedChapters.includes(this.currentChapterId)) {
            saveStore.saveSlots[currentSlot].visitedChapters.push(this.currentChapterId);
          }
        }
      }

      this.currentChapterId = nextChapterId;
      saveStore.latestSave.currentChapterId = this.currentChapterId;
      saveStore.saveGame();
      this.loadChapter(nextChapterId);
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
