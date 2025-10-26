<template>
    <div class="consequence-panel">
        <div v-if="storyStore.hasNoChoices">
            <p>{{ storyStore.currentChapter.consequence }}</p>
            <button @click="storyStore.goToChapter(storyStore.currentChapter.nextChapter)">
                Continuer
            </button>
        </div>
        <div v-else-if="storyStore.isMultipleChoiceActive">
            <p>{{ storyStore.currentChapter.consequence }}</p>
            <button @click="storyStore.goToChapter(storyStore.currentChapter.nextChapter)">
                Continuer
            </button>
        </div>
        <div v-else-if="storyStore.currentChoice">
            <p>{{ storyStore.currentChoice.consequence }}</p>
            <button @click="storyStore.goToChapter(storyStore.currentChoice.nextChapter)">
                Continuer
            </button>
        </div>
    </div>
</template>

<script setup>
    import { useStoryStore } from '@/stores/StoryStore'
    const storyStore = useStoryStore()
</script>

<style scoped>
</style>