<template>
  <div>
    <h1>{{ endingTitle }}</h1>
    <p>{{ endingConsequence }}</p>
    <button @click="goToMainMenu">Retour au menu principal</button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStoryStore } from "@/stores/StoryStore";

const router = useRouter();
const storyStore = useStoryStore();

const endingTitle = computed(() => {
  return storyStore.currentChapter.title;
});

const endingConsequence = computed(() => {
  return storyStore.currentChapter.consequence;
});

const goToMainMenu = () => {
  router.push("/");
};
</script>

<style scoped></style>
