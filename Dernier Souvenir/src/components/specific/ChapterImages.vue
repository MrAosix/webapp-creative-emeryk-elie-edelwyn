<template>
  <div>
    <img
      class="character"
      :class="{ talking: isTalking === 'David' }"
      src="@/assets/images/characters/david.png"
      alt="image de David"
    />
    <img class="background" :src="chapterImage" alt="" />
    <img
      class="character"
      :class="{ talking: isTalking === 'Aurora' }"
      src="@/assets/images/characters/aurora.png"
      alt="image d'Aurora"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStoryStore } from "@/stores/StoryStore";

const storyStore = useStoryStore();
const chapterImage = computed(() => storyStore.currentChapter?.backgroundImage);
const isTalking = computed(() => storyStore.currentText.talking);
</script>

<style scoped>
.background {
  width: 1000px;
}
.character {
  width: 250px;
  filter: grayscale(100%) brightness(50%);
}
.talking {
  filter: none;
}
</style>
