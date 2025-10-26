<template>
    <div>
        <p>{{ storyStore.currentChapter.choiceDescription }}</p>
        <SingleChoiceButton v-for="choice in storyStore.availableChoices" :choice="choice" />
    </div>
</template>

<script setup>
    import { useStoryStore } from '@/stores/StoryStore'
    import SingleChoiceButton from '@/components/SingleChoiceButton.vue'

    const storyStore = useStoryStore()
</script>

<style scoped>
</style>