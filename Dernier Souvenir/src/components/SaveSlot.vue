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
  const chapterToLoad = saveStore.loadGame(props.slotName);
  const saveSlotData = saveStore.getSaveInfo(props.slotName);
  const targetChapter = saveSlotData.currentChapterId || chapterToLoad;
  storyStore.goToChapter(targetChapter);
};

const startNewGame = () => {
  saveStore.loadGame(props.slotName);
  storyStore.goToChapter("ch-1");
};
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
}
</style>
