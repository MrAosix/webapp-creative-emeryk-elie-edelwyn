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

@media screen and (max-width: 1400px) {
  .multiple-choices-panel {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    left: 0;
    padding: 10px;
    overflow-y: auto;
  }

  p {
    font-size: 28px;
    margin-bottom: 15px;
    text-align: center;
    padding-top: 5px;
  }

  .choices-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    justify-items: center;
    max-width: 550px;
    margin-bottom: 10px;
  }

  .confirm-button {
    font-size: 24px;
    padding: 10px 20px;
    position: relative;
    bottom: auto;
    right: auto;
    align-self: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 767px) {
  .multiple-choices-panel {
    padding: 8px;
    padding-bottom: 5px;
    left: 0;
    height: auto;
  }

  .choices-wrapper {
    justify-content: center;
    gap: 6px;
    top: 0;
    max-width: 100%;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    margin-bottom: 10px;
    text-align: center;
    padding-top: 5px;
  }

  .confirm-button {
    font-size: 30px;
    padding: 10px 18px;
    position: relative;
    bottom: auto;
    right: auto;
    display: block;
    margin: 10px auto 0 auto;
  }
}
</style>
