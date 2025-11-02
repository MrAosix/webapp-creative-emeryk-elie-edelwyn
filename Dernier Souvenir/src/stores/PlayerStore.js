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
      if (!currentSaveSlot || !saveStore.saveSlots[currentSaveSlot]) {
        return false;
      }
      return saveStore.saveSlots[
        currentSaveSlot
      ].playerState.inventory.includes(itemName);
    },
    hasFlag: (state) => (flagName) => {
      const saveStore = useSaveStore();
      const currentSaveSlot = saveStore.saveSlots.currentSaveSlot;
      if (!currentSaveSlot || !saveStore.saveSlots[currentSaveSlot]) {
        return false;
      }
      return (
        saveStore.saveSlots[currentSaveSlot].playerState.flags[flagName] ===
        true
      );
    },
    canAccessEnding: (state) => (ending) => {
      return state.flags.includes(`has_${ending}_ending`);
    },
  },

  actions: {
    addToInventory(item) {
      const saveStore = useSaveStore();
      const currentSaveSlot = saveStore.saveSlots.currentSaveSlot;
      if (currentSaveSlot && saveStore.saveSlots[currentSaveSlot]) {
        saveStore.saveSlots[currentSaveSlot].playerState.inventory.push(item);
        saveStore.saveGame();
      }
    },
    removeFromInventory(item) {
      const saveStore = useSaveStore();
      const currentSaveSlot = saveStore.saveSlots.currentSaveSlot;
      if (currentSaveSlot && saveStore.saveSlots[currentSaveSlot]) {
        const inventory =
          saveStore.saveSlots[currentSaveSlot].playerState.inventory;
        const index = inventory.indexOf(item);
        if (index > -1) {
          inventory.splice(index, 1);
          saveStore.saveGame();
        }
      }
    },
    removeRandomItemsFromInventory(count) {
      const saveStore = useSaveStore();
      const currentSaveSlot = saveStore.saveSlots.currentSaveSlot;
      if (currentSaveSlot && saveStore.saveSlots[currentSaveSlot]) {
        const inventory =
          saveStore.saveSlots[currentSaveSlot].playerState.inventory;
        const itemsToRemove = Math.min(count, inventory.length);

        for (let i = 0; i < itemsToRemove; i++) {
          const randomIndex = Math.floor(Math.random() * inventory.length);
          inventory.splice(randomIndex, 1);
        }

        saveStore.saveGame();
      }
    },
    setFlag(flagName, value = true) {
      const saveStore = useSaveStore();
      const currentSaveSlot = saveStore.saveSlots.currentSaveSlot;
      if (currentSaveSlot && saveStore.saveSlots[currentSaveSlot]) {
        saveStore.saveSlots[currentSaveSlot].playerState.flags[flagName] =
          value;
        saveStore.saveGame();
      }
    },
    clearInventory() {
      const saveStore = useSaveStore();
      const currentSaveSlot = saveStore.saveSlots.currentSaveSlot;
      if (currentSaveSlot && saveStore.saveSlots[currentSaveSlot]) {
        this.inventory = [];
        saveStore.saveSlots[currentSaveSlot].playerState.inventory = [];
        saveStore.saveGame();
      }
    },
  },
});
