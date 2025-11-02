<template>
  <button
    @click="storyStore.makeChoice(choice)"
    :disabled="storyStore.isChoiceDisabled(choice.name)"
    :class="{ selected: storyStore.isChoiceSelected(choice.name) }"
  >
    <img :src="choice.buttonImage" :alt="'Image ' + choice.name" />
  </button>
</template>

<script setup>
import { useStoryStore } from "@/stores/StoryStore";
const storyStore = useStoryStore();
const props = defineProps({
  choice: {
    type: Object,
  },
});
</script>

<style scoped>
button {
  border: 2px solid transparent;
}

button.selected {
  background-color: #4caf50;
  border-color: #45a049;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

button img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>
