<template>
    <ChapterTitle/>
    <ChapterImages/>
    <div class="text-wrapper">
        <narrative-text-box v-if="!storyStore.isTextFinished && !storyStore.showChoicePanel && !storyStore.showConsequencePanel"/>
        <consequence-panel v-if="storyStore.shouldShowConsequencePanel"></consequence-panel>
        <single-choice-panel v-if="storyStore.shouldShowSingleChoicePanel"/>
        <multiple-choices-panel v-if="storyStore.shouldShowMultipleChoicePanel"/>
    </div>
    <MoveViewButton label="Retour" page=""/>
</template>

<script setup>
    import { useStoryStore } from '@/stores/StoryStore'

    import MoveViewButton from '@/components/MoveViewButton.vue'
    import ChapterTitle from '@/components/ChapterTitle.vue'
    import ChapterImages from '@/components/ChapterImages.vue';
    import NarrativeTextBox from '@/components/NarrativeTextBox.vue';
    import SingleChoicePanel from '@/components/SingleChoicePanel.vue';
    import MultipleChoicesPanel from '@/components/MultipleChoicesPanel.vue';
    import ConsequencePanel from '@/components/ConsequencePanel.vue';

    const storyStore = useStoryStore()
    storyStore.loadChapter(storyStore.currentChapterId)
</script>

<style scoped>
</style>