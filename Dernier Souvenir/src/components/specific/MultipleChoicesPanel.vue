<template>
  <div class="multiple-choices-panel">
    <p>{{ storyStore.currentChapter.choiceDescription }}</p>
    <MultipleChoicesButton v-for="choice in storyStore.availableChoices" :choice="choice" />
    <button class="confirm-button" :disabled="!storyStore.multipleChoiceButtonAvailable" @click="storyStore.confirmMultipleChoices()">Confirmer</button>
  </div>
</template>

<script setup>
import { useStoryStore } from "@/stores/StoryStore";

import MultipleChoicesButton from "@/components/specific/MultipleChoicesButton.vue";

const storyStore = useStoryStore();
</script>

<style scoped>
p {
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 1.5px;
  color: white;
  font-family: "F25";
  margin: 0;
}
button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #f3eadcc8;
  border: 2px solid #503c20;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.multiple-choices-panel {
  position: relative;
  height: 100%;
}

.confirm-button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #f3eadcc8;
  border: 2px solid #503c20;
  cursor: pointer;
  font-family: "Sebastien";
  transition: background-color 0.3s ease;
  position: absolute;
  bottom: 0;
  right: 0;
}

.confirm-button:not(:disabled):hover {
  background-color: #a78e6b;
}
</style>
