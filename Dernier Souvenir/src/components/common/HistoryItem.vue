<template>
  <div class="history-item">
    <p class="chapter-name">{{ chapterName }}</p>
    <p v-if="choice" class="choice">{{ choice }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  chapterName: {
    type: String,
    required: true,
  },
  choice: {
    type: String,
    default: null,
  },
});
</script>

<style scoped>
.history-item {
  background-color: #3a2e1a;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  border-left: 4px solid #ffc973;
}

.chapter-name {
  font-weight: bold;
  color: #ffc973;
  font-size: 20px;
  margin-bottom: 5px;
  text-shadow: 2px 2px 4px #000000;
}

.choice {
  font-style: italic;
  color: #ffffff;
  font-size: 16px;
  margin-top: 5px;
  padding-left: 15px;
}
</style>
