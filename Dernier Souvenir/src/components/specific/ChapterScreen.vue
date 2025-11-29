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
      <button class="mobile-history-btn" @click="showHistoryModal = true">Historique</button>
      <button class="mobile-inventory-btn" @click="showInventoryModal = true">Inventaire</button>
    </div>

    <HistoryModal :isOpen="showHistoryModal" @close="showHistoryModal = false" />
    <InventoryModal :isOpen="showInventoryModal" @close="showInventoryModal = false" />
  </div>
</template>

<script setup>
import { ref } from "vue";
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
import HistoryModal from "./HistoryModal.vue";
import InventoryModal from "./InventoryModal.vue";

const storyStore = useStoryStore();
storyStore.loadChapter(storyStore.currentChapterId);

const showHistoryModal = ref(false);
const showInventoryModal = ref(false);
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
}

.history {
  grid-column-start: 3;
  grid-row: 1 / span 3;
  margin-left: -12px;
  align-self: flex-start;
  height: 50vh;
  pointer-events: auto;
  z-index: 9;
  position: relative;
}
.inventory {
  grid-column-start: 3;
  grid-row: 1 / span 3;
  align-self: end;
  margin-left: -12px;
  height: 40vh;
  z-index: 10;
}

.images {
  grid-column-start: 2;
  grid-row-start: 2;
  align-self: center;
  height: 100%;
  min-height: 0;
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

/* Tablet */
@media screen and (max-width: 1400px) {
  .chapter-screen-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr auto;
    gap: 4px;
    padding: 4px;
    max-width: 100vw;
    width: 100%;
    overflow-x: hidden;
    height: 100vh;
    box-sizing: border-box;
  }

  .move-view-button:not(.mobile-back) {
    display: none;
  }

  .title {
    grid-column: 1;
    grid-row: 1;
    font-size: 24px;
    margin: 0;
    padding: 5px 10px;
    min-height: auto;
    box-sizing: border-box;
  }

  .title h1 {
    margin: 0;
    padding: 0;
    line-height: 1.2;
  }

  .images {
    grid-column: 1;
    grid-row: 2;
    height: 36vh;
    padding: 5px;
    margin: 0;
    box-sizing: border-box;
  }

  .images img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  .text-wrapper {
    grid-column: 1;
    grid-row: 3;
    min-height: 25vh;
    max-height: 45vh;
    padding: 8px;
    padding-bottom: 8px;
    margin: 0;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
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
    height: auto;
    box-sizing: border-box;
    align-self: end;
    margin: 0 0 5px 0;
  }

  .mobile-history-btn,
  .mobile-inventory-btn {
    flex: 1;
    padding: 10px 8px;
    font-size: 24px;
    background-color: #503c20;
    background-image: url("@/assets/images/backgrounds/button-texture.png");
    background-blend-mode: soft-light;
    border: 2px solid #503c20;
    border-radius: 5px;
    color: #ffc973;
    cursor: pointer;
    font-family: "Sebastien";
    transition: all 0.7s ease;
    text-shadow: 2px 2px 4px #000000;
    box-shadow: 0px 0px 8px #000000;
    box-sizing: border-box;
  }

  .mobile-history-btn:hover,
  .mobile-inventory-btn:hover {
    background-color: #382a17;
  }

  .mobile-back {
    flex: 1;
  }
}

/* Mobile */
@media screen and (max-width: 480px) {
  .chapter-screen-wrapper {
    max-width: 100%;
    width: 100%;
    gap: 3px;
    padding: 3px;
  }

  .title {
    font-size: 15px;
    padding: 4px 8px;
    max-height: 20vh;
  }

  .images {
    max-height: 50vh;
    padding: 3px;
  }

  .text-wrapper {
    padding: 5px;
    padding-bottom: 5px;
    min-height: 22vh;
    max-height: 45vh;
    overflow-y: auto;
  }

  .mobile-buttons {
    gap: 5px;
    height: 80px;
    min-height: 55px;
    padding: 0 3px 3px 3px;
    margin-top: auto;
  }

  .mobile-history-btn,
  .mobile-inventory-btn {
    font-size: 18px;
    padding: 6px 4px;
  }

  .mobile-back {
    font-size: 35px;
  }
}
</style>
