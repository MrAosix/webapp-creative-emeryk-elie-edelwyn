<script setup>
import { useSaveStore } from "@/stores/SaveStore";
import { useStoryStore } from "@/stores/StoryStore";

const saveStore = useSaveStore();
saveStore.initialize();

const storyStore = useStoryStore();
storyStore.initialize();
</script>

<template>
  <img class="background" src="@/assets/images/backgrounds/ch-6aaa.png" alt="background image" />
  <router-view> </router-view>
</template>

<style scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  animation: backgroundFadeIn 10s ease-in-out infinite alternate;
}
</style>
