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
  background-color: #140e05d2;
  background-image: url("@/assets/images/backgrounds/panel-texture.png");
  border-radius: 10px;
  background-blend-mode: soft-light;
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
  background-image: url("@/assets/images/backgrounds/button-texture.png");
  background-blend-mode: soft-light;
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
  user-select: none;
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
  user-select: none;
}

.chapter-text {
  color: #ffffff;
  text-shadow: 5px 5px 4px #000000, 0 0 10px rgba(255, 201, 115, 0.3);
  font-size: 30px;
  margin-left: 10px;
  user-select: none;
}

.empty-text {
  color: #cccccc;
  font-size: 60px;
  letter-spacing: 1px;
  user-select: none;
}

h2 {
  display: flex;
  color: white;
  text-shadow: 5px 5px 4px #000000, 0 0 10px rgba(255, 201, 115, 0.3);
  font-size: 30px;
  align-items: center;
  user-select: none;
}

.last-save-text {
  color: #cccccc;
  font-size: 26px;
  letter-spacing: 2px;
  margin: 0;
  align-self: center;
  user-select: none;
}

.empty-save-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 133px;
  padding-left: 50px;
  padding-right: 50px;
}

.has-save-wrapper {
  display: flex;
  gap: 20px;
  justify-content: center;
}

@media screen and (max-width: 768px) {
  .save-slot {
    padding: 15px;
    gap: 15px;
  }

  img {
    width: 100%;
    max-width: 350px;
    height: auto;
  }

  button {
    font-size: 25px;
    padding: 8px;
  }

  h2 {
    font-size: 24px;
  }

  .act-text,
  .chapter-text {
    font-size: 30px;
    margin-left: 8px;
  }

  .last-save-text {
    font-size: 30px;
  }

  .empty-text {
    font-size: 48px;
  }

  .empty-save-wrapper {
    gap: 80px;
  }
}

@media screen and (max-width: 400px) {
  .save-slot {
    padding: 10px;
    gap: 10px;
  }

  button {
    font-size: 18px;
  }

  .act-text,
  .chapter-text {
    font-size: 24px;
  }

  .last-save-text {
    font-size: 24px;
  }
}
</style>
