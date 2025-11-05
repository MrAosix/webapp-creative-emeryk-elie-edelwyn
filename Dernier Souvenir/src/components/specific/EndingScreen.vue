<template>
  <div>
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

<style scoped></style>
