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
.consequence-panel {
  position: relative;
  left: 5px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.consequence-panel div {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}

p {
  font-family: "F25";
  font-size: 25px;
  color: white;
  letter-spacing: 1.5px;
  margin: 0;
}

button {
  font-size: 30px;
  padding: 5px 10px;
  background-color: #f3eadcc8;
  border: 2px solid #503c20;
  cursor: pointer;
  font-family: "Sebastien";
  transition: background-color 0.3s ease;
  position: absolute;
  align-self: flex-end;
  bottom: 10px;
}

button:hover {
  background-color: #a78e6b;
}

@media screen and (max-width: 768px) {
  .consequence-panel {
    top: 0;
    left: 0;
    padding: 5px;
  }

  p {
    margin-bottom: 10px;
    font-size: 20px;
  }

  button {
    font-size: 22px;
    right: 5px;
    bottom: 5px;
  }
}
</style>
