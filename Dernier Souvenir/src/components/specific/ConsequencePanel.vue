<template>
  <div class="consequence-panel">
    <div v-if="storyStore.hasNoChoices">
      <p>{{ storyStore.currentChapter.consequence }}</p>
      <button @click="handleContinue(storyStore.currentChapter.nextChapter)">Continuer</button>
    </div>
    <div v-else-if="storyStore.isMultipleChoiceActive">
      <p>{{ storyStore.currentChapter.consequence }}</p>
      <button @click="handleContinue(storyStore.currentChapter.nextChapter)">Continuer</button>
    </div>
    <div v-else-if="storyStore.currentChoice">
      <p>{{ storyStore.currentChoice.consequence }}</p>
      <button @click="handleContinue(storyStore.currentChoice.nextChapter)">Continuer</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStoryStore } from "@/stores/StoryStore";
import { onMounted, watch } from "vue";
import Typed from "typed.js";

const router = useRouter();
const storyStore = useStoryStore();

const handleContinue = (nextChapter) => {
  if (nextChapter === null) {
    router.push(`/fin/${storyStore.currentChapter.id}`);
  } else {
    storyStore.goToChapter(nextChapter);
  }
};
</script>

<style scoped>
div {
  position: relative;
  font-size: 25px;
  color: white;
  font-family: "F25";
  font-size: clamp(15px, 25px, 30px);
  margin: 5px;
  height: 100%;
}

p {
  margin: 0;
}

.consequence-panel {
  height: 100%;
  width: 100%;
}

button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #f3eadcc8;
  border: 2px solid #503c20;
  cursor: pointer;
  font-family: "Sebastien";
  transition: background-color 0.3s ease;
  position: absolute;
  bottom: 10px;
  right: 5px;
}

button:hover {
  background-color: #a78e6b;
}
</style>
