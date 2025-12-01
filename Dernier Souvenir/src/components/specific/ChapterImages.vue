<template>
  <div class="image-wrapper">
    <div class="background">
      <img class="background-image" :src="chapterImage" alt="" />
      <img class="character" :class="{ talking: isTalking === 'David' }" src="@/assets/images/characters/david.png" alt="image de David" />
      <img class="character" :class="{ talking: isTalking === 'Aurora' }" src="@/assets/images/characters/aurora.png" alt="image d'Aurora" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStoryStore } from "@/stores/StoryStore";

// Accès au magasin de l'histoire
const storyStore = useStoryStore();
// Calcul de l'image du chapitre actuel et de l'état de dialogue
const chapterImage = computed(() => storyStore.currentChapter?.backgroundImage);
// Détermination du personnage en train de parler
const isTalking = computed(() => storyStore.currentText.talking);
</script>

<style scoped>
.image-wrapper {
  padding: 10px;
  background-color: #4d3715c8;
  background-image: url("@/assets/images/backgrounds/panel-texture.png");
  background-blend-mode: color-burn;
  border: 5px solid #503c20;
  height: 100%;
  user-select: none;
}

.background {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.characters {
  position: absolute;
  bottom: 0;
  display: flex;
}

.character {
  width: clamp(25%, 20%, 30%);
  height: auto;
  filter: grayscale(100%) brightness(50%);
  position: absolute;
  bottom: 0;
}

.talking {
  filter: drop-shadow(0px 0px 1px#ffc973);
}
.character:nth-child(2) {
  left: 0;
  width: clamp(25%, 30%, 40%);
}

.character:last-child {
  right: 0;
}
@media screen and (max-width: 1050px) {
  .character {
    width: 35%;
  }
  .character:nth-child(2) {
    width: clamp(25%, 40%, 50%);
  }
}
</style>
