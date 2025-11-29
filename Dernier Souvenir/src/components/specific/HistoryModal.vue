<template>
  <div v-if="isOpen" class="modal" @click.self="$emit('close')">
    <div class="modal-content">
      <button class="close-button" @click="$emit('close')">✕</button>
      <h2>Historique des Choix</h2>
      <div class="history-list">
        <div v-if="historyItems.length === 0" class="empty-history">
          <p>Aucun historique disponible pour cette partie.</p>
        </div>
        <HistoryItem v-else v-for="(item, index) in historyItems" :key="index" :chapterName="item.chapterName" :choice="item.choice" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useSaveStore } from "@/stores/SaveStore";
import { useStoryStore } from "@/stores/StoryStore";
import HistoryItem from "@/components/common/HistoryItem.vue";

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

  const choiceHistory = saveStore.saveSlots[currentSlot].choiceHistory || [];

  return choiceHistory.map((entry) => {
    const chapter = storyStore.storyData[entry.chapterId];
    return {
      chapterName: chapter?.name || "Chapitre inconnu",
      choice: entry.choiceText || null,
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
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #503c20;
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

h2 {
  color: #ffc973;
  text-shadow: 5px 5px 4px #000000, 0 0 10px rgba(255, 201, 115, 0.3);
  font-size: 32px;
  text-align: center;
  margin: 0 0 20px 0;
  letter-spacing: 1.5px;
  font-family: "Viper";
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 200px;
}

.empty-history {
  text-align: center;
  color: #cccccc;
  font-size: 20px;
  padding: 40px;
  font-family: "Sebastien";
}

.empty-history p {
  margin: 0;
}
</style>
