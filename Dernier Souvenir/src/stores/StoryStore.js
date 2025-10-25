import { defineStore } from 'pinia'
import router from '@/router'
import story from '@/data/story-static.json'
import { useSaveStore } from '@/stores/SaveStore'

export const useStoryStore = defineStore('StoryStore', {
    state: () => ({
        storyData: story,
        currentChapterId: null,
        visitedChapters: [],
        availableChoices: []
    }),

    getters: {
       currentChapter: (state) => { return state.storyData[state.currentChapterId] },
    },

    actions: {
        initialize() {
            const saveStore = useSaveStore()
            
            if (saveStore.latestSave) {
                this.currentChapterId = saveStore.latestSave.currentChapterId
            }
        },

        goToChapter(nextChapterId) {
            const saveStore = useSaveStore()

            this.currentChapterId = nextChapterId
            saveStore.latestSave.currentChapterId = this.currentChapterId
            saveStore.saveGame()
            router.push(`/chapitre/${nextChapterId}`)
        }
    }
})
