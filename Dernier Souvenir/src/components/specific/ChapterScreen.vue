<template>
  <div class="chapter-screen-wrapper">
    <div class="menu-buttons">
      <move-view-button label="Retour" page="" />
    </div>
    <chapter-title class="title" />
    <HistoryPanel class="history" />
    <chapter-images class="images" />
    <div class="text-wrapper">
      <narrative-text-box v-if="!storyStore.isTextFinished && !storyStore.showChoicePanel && !storyStore.showConsequencePanel" />
      <consequence-panel v-if="storyStore.shouldShowConsequencePanel"></consequence-panel>
      <single-choice-panel v-if="storyStore.shouldShowSingleChoicePanel" />
      <multiple-choices-panel v-if="storyStore.shouldShowMultipleChoicePanel" />
    </div>
    <InventoryPanel class="inventory" />
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
import InventoryPanel from "./InventoryPanel.vue";
import HistoryPanel from "./HistoryPanel.vue";

const storyStore = useStoryStore();
storyStore.loadChapter(storyStore.currentChapterId);
</script>

<style scoped>
.chapter-screen-wrapper {
  display: grid;
  grid-template-columns: 0.1fr 1fr 0.2fr;
  grid-template-rows: 0.04fr minmax(300px, 1fr) 0.3fr;
  gap: 30px;
  height: 100vh;
}

.menu-buttons {
  grid-row: span 2 / span 2;
}

.title {
  background-color: #b68f50c8;
  margin: 0;
  padding: 0 10px;
  border: 5px solid #503c20;
  color: #503c20;
  font-size: 1.2vw;
}

.history {
  grid-column-start: 1;
  grid-row-start: 1;
}
.inventory {
  grid-column-start: 3;
  grid-row-start: 3;
  border: 5px solid #503c20;
}

.images {
  grid-column-start: 2;
  grid-row-start: 2;
  padding: 10px;
  background-color: #b68f50c8;
  align-self: center;
  border: 5px solid #503c20;
  height: 100%; /* Added height for consistency */
}

.text-wrapper {
  grid-column-start: 2;
  grid-row-start: 3;
  padding: 10px;
  background-color: #b68f50c8;
  border: 5px solid #503c20;
}
</style>
