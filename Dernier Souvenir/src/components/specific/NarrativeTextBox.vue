<template>
  <div class="narrative-text-box">
    <p class="speaker">{{ storyStore.currentText.talking }}</p>
    <p id="typed-element" class="hidden"></p>
    <button @click="storyStore.goToNextText()" v-if="!storyStore.isTextFinished">Suivant</button>
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
  position: relative;
  display: inline;
  font-size: 1.5em;
  color: white;
  letter-spacing: 1.5px;
}

.narrative-text-box {
  position: relative;
  left: 5px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
}

p {
  font-family: "F25";
}

button {
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
  right: 10px;
}

button:hover {
  background-color: #a78e6b;
}

.speaker {
  font-weight: bold;
  font-size: 45px;
  letter-spacing: 2px;
  color: wheat;
  margin: 0;
}

@media screen and (max-width: 1400px) and (min-width: 769px) {
  button {
    font-size: 40px;
    padding: 8px 18px;
    right: 10px;
    bottom: 0;
  }
}

@media screen and (max-width: 768px) {
  .narrative-text-box {
    top: 0;
    left: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  p {
    margin: 0;
    margin-bottom: 8px;
    padding: 0 8px;
  }

  .speaker {
    font-size: 35px;
    margin-top: 0;
    padding-top: 8px;
  }

  #typed-element {
    font-size: 35px;
    line-height: 1.5;
    width: 100%;
    margin-bottom: 10px;
  }

  button {
    font-size: 30px;
    padding: 8px 16px;
    position: relative;
    right: auto;
    bottom: auto;
    align-self: flex-end;
    margin-top: 10px;
  }
}

@media screen and (max-width: 375px) {
  .narrative-text-box {
    justify-content: flex-start;
  }

  #typed-element {
    margin-bottom: 10px;
  }

  button {
    position: relative;
    right: auto;
    bottom: auto;
    align-self: flex-end;
  }
}
</style>
