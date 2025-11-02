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
        this.saveSlots[currentSlot].savedAt = new Date().toISOString();
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
      this.saveSlots[slotName] = { ...playerDataStatic.saveSlot1 };
      this.setCurrentSaveSlot(null);
      this.saveGame();
    },

    getSaveInfo(slotName) {
      return this.saveSlots[slotName];
    },
  },
});
