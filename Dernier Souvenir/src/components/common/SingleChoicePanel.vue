<template>
  <div>
    <!-- Panneau pour afficher une liste de choix uniques dans une interface narrative -->
    <p>{{ storyStore.currentChapter.choiceDescription }}</p>
    <SingleChoiceButton v-for="choice in storyStore.availableChoices" :choice="choice" />
  </div>
</template>

<script setup>
import { useStoryStore } from "@/stores/StoryStore";
import SingleChoiceButton from "@/components/common/SingleChoiceButton.vue";

// Accès au magasin d'histoire
const storyStore = useStoryStore();
</script>

<style scoped>
div {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 25px;
  color: white;
  font-family: "F25";
  font-size: clamp(15px, 25px, 30px);
  height: 100%;
}
p {
  margin: 5px;
}
</style>
