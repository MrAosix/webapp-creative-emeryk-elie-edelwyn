<template>
  <div class="save-slot">
    <AlertConfirmation v-if="modalIsOpen" :modalIsOpen="modalIsOpen" :slotName="slotName" @close="modalIsOpen = false" />

    <div class="slotTitle-wrapper">
      <h2>{{ slotNumber }} .</h2>
      <p class="act-text" v-if="lastSaveTime">{{ act }} :</p>
      <p class="chapter-text">{{ chapterName }}</p>
    </div>

    <img v-if="lastSaveTime" :src="imageSrc" :alt="`Image de chapitre pour ${chapterName}`" />

    <p class="last-save-text" v-if="lastSaveTime">{{ lastSaveTime }}</p>

    <div v-if="lastSaveTime" class="has-save-wrapper">
      <button @click="loadSaveSlot()">Charger</button>
      <button @click="openModal()">Réinitialiser</button>
    </div>

    <div v-if="!lastSaveTime" class="empty-save-wrapper">
      <p class="empty-text">VIDE</p>
      <button class="new-game-button" @click="startNewGame()">Nouvelle partie</button>
    </div>
  </div>
</template>

<script setup>
// Script setup pour gérer les actions de chargement et de réinitialisation des slots de sauvegarde
import { ref } from "vue";
import { useSaveStore } from "@/stores/SaveStore";
import { useStoryStore } from "@/stores/StoryStore";
import AlertConfirmation from "@/components/common/AlertConfirmation.vue";

// Accès aux magasins de sauvegarde et d'histoire
const saveStore = useSaveStore();
const storyStore = useStoryStore();

// Définition des props du composant
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

// Gestion de l'état du modal de confirmation
const modalIsOpen = ref(false);
const openModal = () => {
  modalIsOpen.value = true;
};

// Fonction pour charger un slot de sauvegarde
const loadSaveSlot = () => {
  // Réinitialiser l'état de l'histoire avant de charger
  storyStore.resetStoryState();

  // Charger la partie depuis le slot spécifié
  const chapterToLoad = saveStore.loadGame(props.slotName);
  const saveSlotData = saveStore.getSaveInfo(props.slotName);
  const targetChapter = saveSlotData.currentChapterId || chapterToLoad;

  // Réinitialiser les chapitres visités avant de naviguer
  storyStore.visitedChapters = [];

  // Naviguer vers le chapitre chargé
  storyStore.goToChapter(targetChapter);
};

// Fonction pour démarrer une nouvelle partie
const startNewGame = () => {
  storyStore.resetStoryState();

  // Charger une nouvelle partie (réinitialiser le slot)
  saveStore.loadGame(props.slotName);

  storyStore.visitedChapters = [];

  // Aller au premier chapitre
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
  letter-spacing: 2px;
  margin: 0;
  align-self: center;
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
