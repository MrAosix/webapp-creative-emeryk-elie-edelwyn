<template>
  <div class="save-slot">
    <h2>{{ slotNumber }}</h2>
    <p v-if="lastSaveTime">{{ act }}: {{ chapterName }}</p>
    <img
      v-if="lastSaveTime"
      :src="imageSrc"
      :alt="`Image de chapitre pour ${chapterName}`"
    />
    <p v-if="lastSaveTime">{{ lastSaveTime }}</p>
    <button v-if="lastSaveTime" @click="loadSaveSlot()">Charger</button>
    <button v-if="lastSaveTime" @click="saveStore.deleteSave(slotName)">
      Réinitialiser
    </button>
    <p v-if="!lastSaveTime">VIDE</p>
    <button v-if="!lastSaveTime" @click="startNewGame()">
      Nouvelle partie
    </button>
  </div>
</template>

<script setup>
import { useSaveStore } from "@/stores/SaveStore";
import { useStoryStore } from "@/stores/StoryStore";

const saveStore = useSaveStore();
const storyStore = useStoryStore();

const props = defineProps({
  slotNumber: {
    type: String,
  },
  act: {
    type: String,
  },
  chapterName: {
    type: String,
  },
  imageSrc: {
    type: String,
  },
  lastSaveTime: {
    type: String,
  },
  slotName: {
    type: String,
  },
});

const loadSaveSlot = () => {
  // Reset StoryStore state to prevent cross-contamination between save slots
  storyStore.resetStoryState();

  // Load the save slot first
  const chapterToLoad = saveStore.loadGame(props.slotName);
  const saveSlotData = saveStore.getSaveInfo(props.slotName);
  const targetChapter = saveSlotData.currentChapterId || chapterToLoad;

  // Force a complete reset of visited chapters before loading
  storyStore.visitedChapters = [];

  storyStore.goToChapter(targetChapter);
};

const startNewGame = () => {
  // Reset StoryStore state for new games too
  storyStore.resetStoryState();

  saveStore.loadGame(props.slotName);

  // Force a complete reset of visited chapters before loading
  storyStore.visitedChapters = [];

  storyStore.goToChapter("ch-1");
};
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
}
</style>
