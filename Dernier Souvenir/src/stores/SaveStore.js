import { defineStore } from 'pinia'

import playerDataStatic from '@/data/player-data-static.json'

export const useSaveStore = defineStore('SaveStore', {
    state: () => ({
        saveSlots: {}
    }),

    getters: {
        latestSave: (state) => state.saveSlots.currentSaveSlot,
        hasSaves: () => localStorage.getItem('save-slots') !== null
    },

    actions: {
        setCurrentSaveSlot(slotName) {
            this.saveSlots.currentSaveSlot = slotName
        },

        saveGame() {
            localStorage.setItem('save-slots', JSON.stringify(this.saveSlots))
        },

        loadGame(slotName) {
            this.setCurrentSaveSlot(slotName)
            this.saveGame()
        },

        initialize() {
            if (this.hasSaves) {
                this.saveSlots = JSON.parse(localStorage.getItem('save-slots'))
            } else {
                this.saveSlots = { ...playerDataStatic }
            }
            this.saveGame()
        },

        deleteSave(slotName) {
            this.saveSlots[slotName] = { ...playerDataStatic.saveSlot1 }
            this.setCurrentSaveSlot(null)
            this.saveGame()
        },

        getSaveInfo(slotName) {
            return this.saveSlots[slotName]
        }

    }
})
