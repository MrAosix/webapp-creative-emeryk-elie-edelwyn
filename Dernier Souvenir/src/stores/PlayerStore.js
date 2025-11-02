import { defineStore } from "pinia";

import { useSaveStore } from "@/stores/SaveStore";

export const usePlayerStore = defineStore("PlayerStore", {
  state: () => ({
    inventory: [],
    flags: {},
  }),

  getters: {
    hasItem: (state) => (itemName) => {
      const saveStore = useSaveStore();
      const currentSaveSlot = saveStore.saveSlots.currentSaveSlot;
      return saveStore.saveSlots[
        currentSaveSlot
      ].playerState.inventory.includes(itemName);
    },
    canAccessEnding: (state) => (ending) => {
      return state.flags.includes(`has_${ending}_ending`);
    },
  },

  actions: {
    addToInventory(item) {
      const saveStore = useSaveStore();
      const currentSaveSlot = saveStore.saveSlots.currentSaveSlot;
      this.inventory.push(item);
      saveStore.saveSlots[currentSaveSlot].playerState.inventory =
        this.inventory;
      saveStore.saveGame();
    },
    removeFromInventory(item) {
      const saveStore = useSaveStore();
      const index = this.inventory.indexOf(item);
      this.inventory.splice(index, 1);
      saveStore.saveGame();
    },
    setFlag(flagName, value) {
      const saveStore = useSaveStore();
      const currentSaveSlot = saveStore.saveSlots.currentSaveSlot;
      this.flags[flagName] = value;
      saveStore.saveSlots[currentSaveSlot].playerState.flags[flagName] = value;
      this.flags = {};
      saveStore.saveGame();
    },
  },
});
