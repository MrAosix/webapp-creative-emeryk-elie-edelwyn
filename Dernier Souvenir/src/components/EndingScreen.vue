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

  // For endings 5 and 6, completely reset the save (important choice)
  if (endingId === "end-5" || endingId === "end-6") {
    // Set the ending flag before complete reset
    playerStore.setFlag(endingId);

    // Complete save reset - delete and recreate the save slot
    const currentSlot = saveStore.saveSlots.currentSaveSlot;
    if (currentSlot) {
      saveStore.deleteSave(currentSlot);
      saveStore.setCurrentSaveSlot(currentSlot); // Set it as current again but empty
    }
  } else {
    // For other endings, just reset to chapter 1 (keeping flags and some progress)
    playerStore.setFlag(endingId);
    playerStore.clearInventory();
    saveStore.resetToChapterOne();
  }

  // Reset StoryStore state
  storyStore.visitedChapters = [];
  storyStore.multipleChoiceSelection = [];
  storyStore.currentChoice = null;
  storyStore.showChoicePanel = false;
  storyStore.showConsequencePanel = false;

  router.push("/");
};
</script>

<style scoped></style>
