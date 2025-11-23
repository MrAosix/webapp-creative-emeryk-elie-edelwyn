<template>
  <div class="chapter-screen-wrapper">
    <move-view-button label="↩" page="" />
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
    <div class="mobile-buttons">
      <move-view-button label="↩" page="" class="mobile-back" />
      <button class="mobile-history-btn">Historique</button>
      <button class="mobile-inventory-btn">Inventaire</button>
    </div>
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
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 70px;
}

.move-view-button a {
  width: 100%;
  height: 100%;
  display: flex;
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
  font-family: "Viper";
  user-select: none;
}

.history {
  grid-column-start: 3;
  grid-row: 1 / span 3;
  border: 5px solid #503c20;
  background-color: #4d3715c8;
  background-image: url("@/assets/images/backgrounds/panel-texture.png");
  background-blend-mode: color-burn;
  margin-left: -12px;
  overflow-y: auto;
  align-self: flex-start;
  height: 805px;
  user-select: none;
  font-family: "Viper";
}
.inventory {
  grid-column-start: 3;
  grid-row: 1 / span 3;
  border: 5px solid #503c20;
  background-color: #4d3715c8;
  background-image: url("@/assets/images/backgrounds/panel-texture.png");
  background-blend-mode: color-burn;
  align-self: end;
  margin-left: -12px;
  min-height: 0;
  overflow-y: auto;
  height: 380px;
  user-select: none;
  font-family: "Viper";
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
  user-select: none;
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
  user-select: none;
}
.mobile-buttons {
  display: none;
}

/* Mobile + Tablet */
@media screen and (max-width: 1400px) {
  .chapter-screen-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr auto;
    gap: 10px;
    padding: 10px;
    max-width: 100vw;
    overflow-x: hidden;
  }

  .move-view-button:not(.mobile-back) {
    display: none;
  }

  .title {
    grid-column: 1;
    grid-row: 1;
    font-size: 28px;
  }

  .images {
    grid-column: 1;
    grid-row: 2;
    height: 45vh;
    padding: 8px;
  }

  .images img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  .text-wrapper {
    grid-column: 1;
    grid-row: 3;
    min-height: 20vh;
    padding: 8px;
  }

  .history {
    display: none;
  }

  .inventory {
    display: none;
  }

  .mobile-buttons {
    display: flex;
    grid-column: 1;
    grid-row: 4;
    gap: 8px;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
  }

  .mobile-history-btn,
  .mobile-inventory-btn {
    flex: 1;
    padding: 12px 8px;
    font-size: 18px;
    background-color: #f3eadcc8;
    border: 2px solid #503c20;
    cursor: pointer;
    font-family: "Sebastien";
    transition: background-color 0.3s ease;
    text-transform: uppercase;
    box-sizing: border-box;
  }

  .mobile-history-btn:hover,
  .mobile-inventory-btn:hover {
    background-color: #a78e6b;
  }

  .mobile-back {
    flex: 1;
  }
}
</style>
