<template>
  <div class="history-panel">
    <h2>Historique des Choix</h2>
    <div v-if="historyItems.length === 0" class="empty-history">
      <p>Aucun historique disponible pour cette partie.</p>
    </div>
    <div v-else class="history-list">
      <HistoryItem v-for="(item, index) in historyItems" :key="index" :chapterName="item.chapterName" :choice="item.choice" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useSaveStore } from "@/stores/SaveStore";
import { useStoryStore } from "@/stores/StoryStore";
import HistoryItem from "@/components/common/HistoryItem.vue";

const saveStore = useSaveStore();
const storyStore = useStoryStore();

// Get the history from the current save slot
const historyItems = computed(() => {
  const currentSlot = saveStore.saveSlots.currentSaveSlot;
  if (!currentSlot || !saveStore.saveSlots[currentSlot]) {
    return [];
  }

  const choiceHistory = saveStore.saveSlots[currentSlot].choiceHistory || [];

  // Map the choice history to include chapter names from story data
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
.history-panel {
  padding: 20px;
  background-color: #2c1f0e;
  border-radius: 10px;
  color: #ffffff;
  max-height: 600px;
  overflow-y: auto;
}

.history-panel h2 {
  color: #ffc973;
  text-shadow: 5px 5px 4px #000000, 0 0 10px rgba(255, 201, 115, 0.3);
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
  letter-spacing: 1.5px;
}

.empty-history {
  text-align: center;
  color: #ffffff;
  font-size: 18px;
  padding: 40px;
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Scrollbar styling */
.history-panel::-webkit-scrollbar {
  width: 10px;
}

.history-panel::-webkit-scrollbar-track {
  background: #1a140a;
  border-radius: 10px;
}

.history-panel::-webkit-scrollbar-thumb {
  background: #503c20;
  border-radius: 10px;
}

.history-panel::-webkit-scrollbar-thumb:hover {
  background: #ffc973;
}
@media screen and (max-width: 450px) { 
  .history-panel h2 {
    margin: 0;
  }
}
@media screen and (max-width: 850px) { 
  .history-panel h2 {
    font-size: 40px;
  }
  .history-panel p {
    font-size: 25px;
  }
}
</style>
