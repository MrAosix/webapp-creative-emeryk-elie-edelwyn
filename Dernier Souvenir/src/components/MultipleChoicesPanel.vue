<template>
    <div>
        <p>{{ storyStore.currentChapter.choiceDescription }}</p>
        <MultipleChoicesButton v-for="choice in storyStore.availableChoices" :choice="choice" />
        <button 
            :disabled="!storyStore.multipleChoiceButtonAvailable"
            @click="storyStore.confirmMultipleChoices()">
            Confirmer
        </button>
    </div>
</template>

<script setup>
    import { useStoryStore } from '@/stores/StoryStore'
    import MultipleChoicesButton from '@/components/MultipleChoicesButton.vue'

    const storyStore = useStoryStore()
</script>

<style scoped>

</style>