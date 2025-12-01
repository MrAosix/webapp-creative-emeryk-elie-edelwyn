<template>
  <div class="consequence-panel">
    <!-- Affichage des conséquences en fonction de l'état du magasin de l'histoire -->
    <div v-if="storyStore.hasNoChoices">
      <p>{{ storyStore.currentChapter.consequence }}</p>
      <button @click="handleContinue(storyStore.currentChapter.nextChapter)">Continuer</button>
    </div>
    <div v-else-if="storyStore.isMultipleChoiceActive">
      <p>{{ storyStore.currentChapter.consequence }}</p>
      <button @click="handleContinue(storyStore.currentChapter.nextChapter)">Continuer</button>
    </div>
    <div v-else-if="storyStore.currentChoice">
      <p>{{ storyStore.currentChoice.consequence }}</p>
      <button @click="handleContinue(storyStore.currentChoice.nextChapter)">Continuer</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStoryStore } from "@/stores/StoryStore";

// Accès au magasin de l'histoire
const router = useRouter();
// Accès au magasin de l'histoire
const storyStore = useStoryStore();

// Gestion de la continuation vers le chapitre suivant ou la fin
const handleContinue = (nextChapter) => {
  if (nextChapter === null) {
    router.push(`/fin/${storyStore.currentChapter.id}`);
  } else {
    storyStore.goToChapter(nextChapter);
  }
};
</script>

<style scoped>
.consequence-panel {
  position: relative;
  left: 5px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
}

.consequence-panel div {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}

p {
  font-family: "F25";
  font-size: 1.5em;
  color: white;
  letter-spacing: 1.5px;
  margin: 0;
  margin-bottom: 10px;
}

button {
  font-size: 30px;
  padding: 5px 10px;
  background-color: #f3eadcc8;
  border: 2px solid #503c20;
  cursor: pointer;
  font-family: "Sebastien";
  transition: background-color 0.3s ease;
  position: relative;
  align-self: flex-end;
  margin-top: 10px;
}

button:hover {
  background-color: #a78e6b;
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
  .consequence-panel {
    top: 0;
    left: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .consequence-panel div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
  }

  p {
    margin: 0;
    margin-bottom: 10px;
    padding: 0 8px;
    font-size: 25px;
    line-height: 1.5;
    word-wrap: break-word;
    overflow-wrap: break-word;
    width: 100%;
    padding-top: 8px;
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
  .consequence-panel {
    justify-content: flex-start;
  }

  .consequence-panel div {
    justify-content: flex-start;
  }

  p {
    font-size: 30px;
    margin-bottom: 10px;
  }

  button {
    position: relative;
    right: auto;
    bottom: auto;
    align-self: flex-end;
    margin-top: 10px;
  }
}
</style>
