<template>
  <button
    @click="storyStore.makeChoice(choice)"
    :disabled="storyStore.isChoiceDisabled(choice.name)"
    :class="{ selected: storyStore.isChoiceSelected(choice.name) }"
  >
    <img :src="`.${choice.buttonImage}`" :alt="'Image ' + choice.name" />
  </button>
</template>

<script setup>
import { useStoryStore } from "@/stores/StoryStore";

// Accès au magasin de l'histoire
const storyStore = useStoryStore();

// Définition des props du composant
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
  background-color: #755140;
}
button:hover:not(.selected, :disabled) {
  background-color: #c8a28e;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  padding: 5px 10px;
  background-color: #89746a;
  cursor: not-allowed;
  font-family: "Sebastien";
  transition: background-color 0.3s ease;
}

button img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

@media screen and (max-width: 768px) {
  button {
    padding: 4px;
  }

  button img {
    width: 70px;
    height: 70px;
  }
}

@media screen and (max-width: 400px) {
  button {
    padding: 3px;
  }

  button img {
    width: 55px;
    height: 55px;
  }
}
</style>
