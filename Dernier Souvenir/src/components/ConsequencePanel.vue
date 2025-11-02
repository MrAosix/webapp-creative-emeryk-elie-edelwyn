<template>
  <div class="consequence-panel">
    <div v-if="storyStore.hasNoChoices">
      <p>{{ storyStore.currentChapter.consequence }}</p>
      <button @click="handleContinue(storyStore.currentChapter.nextChapter)">
        Continuer
      </button>
    </div>
    <div v-else-if="storyStore.isMultipleChoiceActive">
      <p>{{ storyStore.currentChapter.consequence }}</p>
      <button @click="handleContinue(storyStore.currentChapter.nextChapter)">
        Continuer
      </button>
    </div>
    <div v-else-if="storyStore.currentChoice">
      <p>{{ storyStore.currentChoice.consequence }}</p>
      <button @click="handleContinue(storyStore.currentChoice.nextChapter)">
        Continuer
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStoryStore } from "@/stores/StoryStore";

const router = useRouter();
const storyStore = useStoryStore();

const handleContinue = (nextChapter) => {
  if (nextChapter === null) {
    router.push("/fin/" + storyStore.currentChapter.endingId);
  } else {
    storyStore.goToChapter(nextChapter);
  }
};
</script>

<style scoped></style>
