<template>
  <div class="chapter-screen-wrapper">
    <move-view-button label="Retour" page="" />
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
  grid-template-rows: auto 1.8fr 0.6fr;
  gap: 20px;
  height: 100vh;
  max-width: 2000px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
}

.move-view-button {
  position: relative;
  margin-right: 0;
  align-self: center;
}

.title {
  grid-column: 2;
  background-color: #4d3715c8;
  background-image: url("@/assets/images/backgrounds/panel-texture.png");
  background-blend-mode: color-burn;
  margin: 0;
  padding: 0 10px;
  text-align: center;
  border: 5px solid #503c20;
  color: #ffc973bd;
  text-shadow: 5px 5px 4px #000000, 0 0 10px rgba(255, 201, 115, 0.3);
  font-size: 1.2vw;
  letter-spacing: 2px;
}

.history {
  grid-column-start: 3;
  grid-row: 1 / span 3;
  border: 5px solid #503c20;
  background-color: #4d3715c8;
  background-image: url("@/assets/images/backgrounds/panel-texture.png");
  background-blend-mode: color-burn;
  margin: 0;
  margin-left: -12px;
  min-height: 0;
  overflow-y: auto;
  align-self: start;
  height: 70%;
}
.inventory {
  grid-column-start: 3;
  grid-row: 1 / span 3;
  border: 5px solid #503c20;
  background-color: #4d3715c8;
  background-image: url("@/assets/images/backgrounds/panel-texture.png");
  background-blend-mode: color-burn;
  align-self: end;
  margin: 0;
  margin-left: -12px;
  min-height: 0;
  overflow-y: auto;
  height: 30%;
}

.images {
  grid-column-start: 2;
  grid-row-start: 2;
  padding: 10px;
  background-color: #4d3715c8;
  background-image: url("@/assets/images/backgrounds/panel-texture.png");
  background-blend-mode: color-burn;
  align-self: center;
  border: 5px solid #503c20;
  height: 100%;
  min-height: 0;
  overflow: hidden;
}

.text-wrapper {
  grid-column-start: 2;
  grid-row-start: 3;
  padding: 10px;
  background-image: url("@/assets/images/backgrounds/panel-texture.png");
  background-blend-mode: color-burn;
  background-color: #4d3715c8;
  border: 5px solid #503c20;
  overflow-y: auto;
  max-height: 100%;
}
@media screen and (max-width: 1050px) {
  a {
    font-size: 25px;
  }
  .chapter-screen-wrapper {
    display: flex;
    flex-direction: column;
  }
  .title {
    font-size: 25px;
  }
  .history {
    height: 20vh;
  }
}
</style>
