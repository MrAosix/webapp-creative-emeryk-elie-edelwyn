import { defineStore } from "pinia";

import playerDataStatic from "@/data/player-data-static.json";

export const useSaveStore = defineStore("SaveStore", {
  state: () => ({
    saveSlots: {},
  }),

  getters: {
    latestSave: (state) => {
      const currentSlot = state.saveSlots.currentSaveSlot;
      return state.saveSlots[currentSlot];
    },
    hasSaves: () => localStorage.getItem("save-slots") !== null,
  },

  actions: {
    setCurrentSaveSlot(slotName) {
      this.saveSlots.currentSaveSlot = slotName;
    },

    saveGame() {
      if (this.saveSlots.currentSaveSlot) {
        const currentSlot = this.saveSlots.currentSaveSlot;
        this.saveSlots[currentSlot].savedAt = new Date().toLocaleString(
          "en-CA",
          {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false, // 24-hour format
          }
        );
      }
      localStorage.setItem("save-slots", JSON.stringify(this.saveSlots));
    },

    loadGame(slotName) {
      this.setCurrentSaveSlot(slotName);

      const slotData = this.saveSlots[slotName];
      if (slotData && slotData.currentChapterId) {
        return slotData.currentChapterId;
      }

      return "ch-1";
    },

    initialize() {
      if (this.hasSaves) {
        this.saveSlots = JSON.parse(localStorage.getItem("save-slots"));
      } else {
        this.saveSlots = { ...playerDataStatic };
      }
      this.saveGame();
    },

    deleteSave(slotName) {
      // Create a fresh empty save slot structure
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

    getSaveInfo(slotName) {
      return this.saveSlots[slotName];
    },

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
