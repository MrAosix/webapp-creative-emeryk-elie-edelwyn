<template>
  <div class="save-slot">
    <div class="slotTitle-wrapper">
      <h2>{{ slotNumber }} .</h2>
      <p class="act-text" v-if="lastSaveTime">{{ act }} :</p>
      <p class="chapter-text">{{ chapterName }}</p>
    </div>

    <img
      v-if="lastSaveTime"
      :src="imageSrc"
      :alt="`Image de chapitre pour ${chapterName}`"
    />

    <p class="last-save-text" v-if="lastSaveTime">{{ lastSaveTime }}</p>

    <div v-if="lastSaveTime" class="has-save-wrapper">
      <button @click="loadSaveSlot()">Charger</button>
      <button @click="saveStore.deleteSave(slotName)">Réinitialiser</button>
    </div>

    <div v-if="!lastSaveTime" class="empty-save-wrapper">
      <p class="empty-text">VIDE</p>
      <button class="new-game-button" @click="startNewGame()">
        Nouvelle partie
      </button>
    </div>
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
.save-slot {
  display: flex;
  flex-direction: column;
  background-color: #453c30d2;
  padding: 25px;
  gap: 20px;
}

.slotTitle-wrapper {
  display: flex;
}

img {
  align-self: center;
  width: 400px;
  height: 250px;
}

button {
  background-color: #503c20;
  padding: 10px;
  border-radius: 5px;
  color: #ffc973;
  text-decoration: none;
  font-size: 30px;
  letter-spacing: 2px;
  transition: all 0.7s ease;
  text-shadow: 2px 2px 4px #000000;
  box-shadow: 0px 0px 8px #000000;
  border: none;
  font-family: "Sebastien";
}

button:hover {
  background-color: #382a17;
  cursor: pointer;
}

.act-text {
  color: #ffc973;
  text-shadow: 5px 5px 4px #000000, 0 0 10px rgba(255, 201, 115, 0.3);
  font-size: 30px;
  margin-left: 15px;
}

.chapter-text {
  color: #ffffff;
  text-shadow: 5px 5px 4px #000000, 0 0 10px rgba(255, 201, 115, 0.3);
  font-size: 30px;
  margin-left: 10px;
}

.empty-text {
  color: #cccccc;
  font-size: 60px;
}

h2 {
  display: flex;
  color: white;
  text-shadow: 5px 5px 4px #000000, 0 0 10px rgba(255, 201, 115, 0.3);
  font-size: 30px;
  align-items: center;
}

.last-save-text {
  color: #cccccc;
  font-size: 20px;
  margin: 0;
}

.empty-save-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 133px;
}

.has-save-wrapper {
  display: flex;
  gap: 20px;
}
</style>
