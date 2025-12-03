<template>
  <div class="chapter-title">
    <h1>{{ currentTitle }}</h1>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStoryStore } from "@/stores/StoryStore";

// Accès au magasin de l'histoire
const storyStore = useStoryStore();
// Calcul du titre du chapitre actuel
const currentTitle = computed(() => storyStore.currentChapter?.title);
</script>

<style scoped>
.chapter-title {
  background-color: #4d3715c8;
  background-image: url("@/assets/images/backgrounds/panel-texture.png");
  background-blend-mode: color-burn;
  margin: 0;
  padding: 15px 10px;
  text-align: center;
  border: 5px solid #503c20;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chapter-title h1 {
  color: #ffc973bd;
  text-shadow: 5px 5px 4px #000000, 0 0 10px rgba(255, 201, 115, 0.3);
  font-size: 45px;
  letter-spacing: 2px;
  font-family: "F25";
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
}

@media screen and (max-width: 1400px) and (min-width: 769px) {
  .chapter-title h1 {
    font-size: 32px;
  }
}

@media screen and (max-width: 768px) {
  .chapter-title h1 {
    font-size: 32px;
  }
}
</style>
