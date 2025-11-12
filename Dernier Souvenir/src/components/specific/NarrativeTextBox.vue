<template>
  <div class="narrative-text-box">
    <p cl>{{ storyStore.currentText.talking }}</p>
    <p id="typed-element" class="hidden"></p>
    <button
      @click="storyStore.goToNextText()"
      v-if="!storyStore.isTextFinished"
    >
      Suivant
    </button>
  </div>
</template>

<script setup>
import { onMounted, watch } from "vue";
import { useStoryStore } from "@/stores/StoryStore";
import Typed from "typed.js";

const storyStore = useStoryStore();
let typed = null;

const initializeTyped = () => {
  if (typed) {
    typed.destroy();
  }
  const options = {
    strings: [storyStore.currentText.text],
    typeSpeed: 10,
    onComplete: () => {
      const element = document.querySelector("#typed-element");
      if (element) {
        element.classList.remove("hidden");
      }
    },
  };
  typed = new Typed("#typed-element", options);
};

onMounted(() => {
  initializeTyped();
});

watch(
  () => storyStore.currentText.text,
  (newText) => {
    if (newText) {
      initializeTyped();
    }
  }
);
</script>

<style scoped>
#typed-element {
  display: inline;
}

.typed-cursor {
  display: inline;
  font-weight: bold;
  color: inherit;
}

.narrative-text-box {
  position: relative;
  height: 90%;
}

button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #f3eadcc8;
  border: 2px solid #503c20;
  cursor: pointer;
  font-family: "Sebastien";
  transition: background-color 0.3s ease;
  position: absolute;
  bottom: 0;
  right: 0;
}

button:hover {
  background-color: #a78e6b;
}
</style>
