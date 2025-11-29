<template>
  <div class="history-panel">
    <h1>HISTORIQUE</h1>
    <div class="history-list">
      <div class="history-item" v-for="(entry, index) in historyItems" :key="index">
        <p class="chapter-name">{{ entry.chapterName }}</p>
        <p class="choice-text">{{ entry.choice || "Aucun choix" }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useSaveStore } from "@/stores/SaveStore";
import { useStoryStore } from "@/stores/StoryStore";

const saveStore = useSaveStore();
const storyStore = useStoryStore();

const historyItems = computed(() => {
  const currentSlot = saveStore.saveSlots.currentSaveSlot;
  if (!currentSlot || !saveStore.saveSlots[currentSlot]) {
    return [];
  }

  const visitedChapters = saveStore.saveSlots[currentSlot].visitedChapters || [];

  return visitedChapters.map((entry) => {
    const chapter = storyStore.storyData[entry.chapterId];
    return {
      chapterName: chapter?.title || "Chapitre inconnu",
      choice: entry.choice,
    };
  });
});
</script>

<style scoped>
h1 {
  text-align: center;
  color: #503c20;
  margin: 5px;
  background-color: #2e200c;
  background-image: url("@/assets/images/backgrounds/panel-texture.png");
  background-blend-mode: overlay;
  color: white;
  letter-spacing: 2px;
  font-weight: 100;
  padding: 4px;
  font-family: "F25";
  font-size: 1.6rem;
}

.history-panel {
  position: relative;
  width: 100%;
  height: 100%;
  border: 5px solid #503c20;
  background-color: #4d3715c8;
  background-image: url("@/assets/images/backgrounds/panel-texture.png");
  background-blend-mode: color-burn;
  overflow: hidden;
  user-select: none;
  font-family: "Viper";
}

.history-list {
  position: absolute;
  top: 46px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.history-item {
  display: flex;
  flex-direction: column;
  background-color: #503c20;
  margin: 2px 5px;
  padding: 5px 10px;
  color: white;
}

.chapter-name {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  margin-bottom: 3px;
  word-wrap: break-word;
  font-family: "F25";
}

.choice-text {
  font-size: 1rem;
  margin: 0;
  opacity: 0.9;
  word-wrap: break-word;
  font-family: "F25";
}

@media screen and (max-width: 450px) {
  h1 {
    font-size: 30px;
  }
}

@media screen and (max-width: 850px) {
  .chapter-name {
    font-size: 25px;
  }
  .choice-text {
    font-size: 20px;
  }
}
</style>
