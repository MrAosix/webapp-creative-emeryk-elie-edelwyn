<template>
  <div class="chapter-screen-wrapper">
    <chapter-title />
    <chapter-images />
    <div class="text-wrapper">
      <narrative-text-box
        v-if="
          !storyStore.isTextFinished &&
          !storyStore.showChoicePanel &&
          !storyStore.showConsequencePanel
        "
      />
      <consequence-panel
        v-if="storyStore.shouldShowConsequencePanel"
      ></consequence-panel>
      <single-choice-panel v-if="storyStore.shouldShowSingleChoicePanel" />
      <multiple-choices-panel v-if="storyStore.shouldShowMultipleChoicePanel" />
    </div>
    <move-view-button label="Retour" page="" />
  </div>
</template>

<script setup>
import { useStoryStore } from "@/stores/StoryStore";

import MoveViewButton from "@/components/common/MoveViewButton.vue";
import ChapterTitle from "@/components/specific/ChapterTitle.vue";
import ChapterImages from "@/components/specific/ChapterImages.vue";
import NarrativeTextBox from "@/components/specific/NarrativeTextBox.vue";
import SingleChoicePanel from "@/components/common/SingleChoicePanel.vue";
import MultipleChoicesPanel from "@/components/specific/MultipleChoicesPanel.vue";
import ConsequencePanel from "@/components/specific/ConsequencePanel.vue";

const storyStore = useStoryStore();
storyStore.loadChapter(storyStore.currentChapterId);
</script>

<style scoped>
.text-wrapper {
  background-color: grey;
}</style>
