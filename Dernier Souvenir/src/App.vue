<script setup>
import { useSaveStore } from "@/stores/SaveStore";
import { useStoryStore } from "@/stores/StoryStore";

const saveStore = useSaveStore();
saveStore.initialize();

const storyStore = useStoryStore();
storyStore.initialize();
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
