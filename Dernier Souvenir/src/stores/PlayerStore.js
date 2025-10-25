import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import story from '@/data/story-static.json'
import playerSettings from '@/data/player-settings-static.json'
import playerData from '@/data/player-data-static.json'

export const usePlayerStore = defineStore('PlayerStore', () => {
    const currentChapterId = null
    const doubleCount = computed(() => count.value * 2)
    function increment() {
        count.value++
    }

    return {
        count,
        doubleCount,
        increment
    }
})
