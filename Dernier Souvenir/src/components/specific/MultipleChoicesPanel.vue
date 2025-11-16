<template>
  <div>
    <p>{{ storyStore.currentChapter.choiceDescription }}</p>
    <MultipleChoicesButton v-for="choice in storyStore.availableChoices" :choice="choice" />
    <button :disabled="!storyStore.multipleChoiceButtonAvailable" @click="storyStore.confirmMultipleChoices()">Confirmer</button>
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
  letter-spacing: 2px;
  color: white;
}
button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #f3eadcc8;
  border: 2px solid #503c20;
  cursor: pointer;
  font-family: "Sebastien";
  transition: background-color 0.3s ease;
}
</style>
