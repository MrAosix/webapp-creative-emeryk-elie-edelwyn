<template>
  <div class="multiple-choices-panel">
    <p>{{ storyStore.currentChapter.choiceDescription }}</p>
    <div class="choices-wrapper">
      <MultipleChoicesButton v-for="choice in storyStore.availableChoices" :choice="choice" />
    </div>
    <button class="confirm-button" :disabled="!storyStore.multipleChoiceButtonAvailable" @click="storyStore.confirmMultipleChoices()">Confirmer</button>
  </div>
</template>

<script setup>
import { useStoryStore } from "@/stores/StoryStore";

import MultipleChoicesButton from "@/components/specific/MultipleChoicesButton.vue";

const storyStore = useStoryStore();
</script>

<style scoped>
p {
  font-weight: bold;
  font-size: 28px;
  letter-spacing: 1.5px;
  color: white;
  font-family: "F25";
  margin: 0;
}
button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #f3eadcc8;
  border: 2px solid #503c20;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.multiple-choices-panel {
  position: relative;
  left: 5px;
  height: 100%;
}

.choices-wrapper {
  position: relative;
  top: -10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.confirm-button {
  font-size: 30px;
  padding: 5px 10px;
  background-color: #f3eadcc8;
  border: 2px solid #503c20;
  cursor: pointer;
  font-family: "Sebastien";
  transition: background-color 0.3s ease;
  position: absolute;
  align-self: flex-end;
  bottom: 10px;
  right: 5px;
}

.confirm-button:not(:disabled):hover {
  background-color: #a78e6b;
}

@media screen and (max-width: 768px) {
  .multiple-choices-panel {
    padding: 5px;
    padding-bottom: 60px;
    left: 0;
  }

  .choices-wrapper {
    justify-content: center;
    gap: 6px;
    top: 0;
    max-width: 100%;
  }

  p {
    font-size: 18px;
    margin-bottom: 10px;
    text-align: center;
  }

  .confirm-button {
    font-size: 20px;
    padding: 10px 18px;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
}
</style>
