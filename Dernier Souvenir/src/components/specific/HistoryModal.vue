<template>
  <div v-if="isOpen" class="modal" @click.self="$emit('close')">
    <div class="modal-content">
      <button class="close-button" @click="$emit('close')">✕</button>
      <h1>Historique</h1>
      <div class="history">
        <div class="history-item" v-for="(entry, index) in historyItems" :key="index">
          <p class="chapter-name">{{ entry.chapterName }}</p>
          <p class="choice-text">{{ entry.choice || "Aucun choix" }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useSaveStore } from "@/stores/SaveStore";
import { useStoryStore } from "@/stores/StoryStore";

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["close"]);

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
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: #4d3715c8;
  background-image: url("@/assets/images/backgrounds/panel-texture.png");
  background-blend-mode: color-burn;
  border: 5px solid #503c20;
  padding: 20px;
  border-radius: 10px;
  max-width: 90vw;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0px 0px 20px #000000;
  display: flex;
  flex-direction: column;
}

.close-button {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #30220e;
  color: #ffc973;
  border: 2px solid #503c20;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-family: Arial, sans-serif;
  padding: 0;
  line-height: 1;
}

.close-button:hover {
  background-color: #382a17;
  transform: scale(1.1);
}

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
}

.history {
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
  flex-shrink: 0;
}

.chapter-name {
  font-size: 1.2rem;
  margin: 0;
  margin-bottom: 3px;
  word-wrap: break-word;
}

.choice-text {
  font-size: 1rem;
  margin: 0;
  opacity: 0.9;
  word-wrap: break-word;
}

@media screen and (max-width: 450px) {
  h1 {
    font-size: 50px;
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
