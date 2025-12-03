import { defineStore } from "pinia";

import playerDataStatic from "@/data/player-data-static.json";

// Store pour gérer les sauvegardes de jeu
export const useSaveStore = defineStore("SaveStore", {
  state: () => ({
    saveSlots: {},
  }),

  // Getters pour accéder aux données dérivées de l'état
  getters: {
    latestSave: (state) => {
      const currentSlot = state.saveSlots.currentSaveSlot;
      return state.saveSlots[currentSlot];
    },
    hasSaves: () => localStorage.getItem("save-slots") !== null,
  },

  // Actions pour modifier l'état
  actions: {
    setCurrentSaveSlot(slotName) {
      this.saveSlots.currentSaveSlot = slotName;
    },

    // Sauvegarde l'état actuel dans le stockage local
    saveGame() {
      if (this.saveSlots.currentSaveSlot) {
        const currentSlot = this.saveSlots.currentSaveSlot;
        this.saveSlots[currentSlot].savedAt = new Date().toLocaleString("en-CA", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false, // 24h format
        });
      }
      localStorage.setItem("save-slots", JSON.stringify(this.saveSlots));
    },

    // Charge une partie depuis un slot de sauvegarde spécifique
    loadGame(slotName) {
      this.setCurrentSaveSlot(slotName);

      const slotData = this.saveSlots[slotName];
      if (slotData && slotData.currentChapterId) {
        return slotData.currentChapterId;
      }

      return "ch-1";
    },

    // Initialise les slots de sauvegarde
    initialize() {
      if (this.hasSaves) {
        this.saveSlots = JSON.parse(localStorage.getItem("save-slots"));
      } else {
        this.saveSlots = { ...playerDataStatic };
      }
      this.saveGame();
    },

    // Supprime une sauvegarde spécifique en réinitialisant son état
    deleteSave(slotName) {
      this.saveSlots[slotName] = {
        savedAt: null,
        currentChapterId: null,
        playerState: {
          inventory: [],
          flags: {},
        },
        visitedChapters: [],
        choiceHistory: [],
      };
      this.setCurrentSaveSlot(null);
      this.saveGame();
    },

    // Récupère les informations d'une sauvegarde spécifique
    getSaveInfo(slotName) {
      return this.saveSlots[slotName];
    },

    // Réinitialise la sauvegarde au chapitre 1
    resetToChapterOne() {
      const currentSlot = this.saveSlots.currentSaveSlot;
      if (currentSlot && this.saveSlots[currentSlot]) {
        this.saveSlots[currentSlot].currentChapterId = "ch-1";
        this.saveSlots[currentSlot].visitedChapters = [];
        this.saveSlots[currentSlot].choiceHistory = [];
        this.saveGame();
      }
    },
  },
});
