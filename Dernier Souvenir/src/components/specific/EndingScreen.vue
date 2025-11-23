<template>
  <div class="ending-wrapper">
    <h1>{{ endingTitle }}</h1>
    <p>{{ endingConsequence }}</p>
    <button @click="goToMainMenu">Retour au menu principal</button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStoryStore } from "@/stores/StoryStore";
import { usePlayerStore } from "@/stores/PlayerStore";
import { useSaveStore } from "@/stores/SaveStore";

const router = useRouter();
const storyStore = useStoryStore();
const playerStore = usePlayerStore();
const saveStore = useSaveStore();

const endingTitle = computed(() => {
  return storyStore.currentChapter.title;
});

const endingConsequence = computed(() => {
  return storyStore.currentChapter.consequence;
});

const goToMainMenu = () => {
  const endingId = storyStore.currentChapterId;

  if (endingId === "end-5" || endingId === "end-6") {
    playerStore.setFlag(endingId);

    const currentSlot = saveStore.saveSlots.currentSaveSlot;
    if (currentSlot) {
      saveStore.deleteSave(currentSlot);
      saveStore.setCurrentSaveSlot(currentSlot);
    }
  } else {
    playerStore.setFlag(endingId);
    playerStore.clearInventory();
    saveStore.resetToChapterOne();
  }
  storyStore.visitedChapters = [];
  storyStore.multipleChoiceSelection = [];
  storyStore.currentChoice = null;
  storyStore.showChoicePanel = false;
  storyStore.showConsequencePanel = false;

  router.push("/");
};
</script>

<style scoped>
.ending-wrapper {
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  box-sizing: border-box;
  text-align: center;
  user-select: none;
}

h1 {
  font-family: "Sebastien";
  font-size: 48px;
  color: #ffc973;
  text-shadow: 5px 5px 4px #000000, 0 0 10px rgba(255, 201, 115, 0.3);
  margin-bottom: 20px;
  letter-spacing: 1.5px;
}

p {
  font-family: "F25";
  font-size: 24px;
  color: white;

  margin-bottom: 40px;
  letter-spacing: 1.2px;
}

button {
  margin: 0 auto;
  font-size: 30px;
  padding: 10px 20px;
  background-color: #503c20;
  background-image: url("@/assets/images/backgrounds/button-texture.png");
  background-blend-mode: soft-light;
  border-radius: 5px;
  color: #ffc973;
  text-decoration: none;
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
</style>
