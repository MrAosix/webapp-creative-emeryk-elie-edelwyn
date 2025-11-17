<template>
  <!-- Composant de bouton pour gérer un choix unique dans une interface narrative -->
  <button
    v-if="isChoiceVisible"
    @click="storyStore.selectSingleChoice(choice)"
    :disabled="isDisabled"
    :class="{
      disabled: isDisabled,
      'condition-not-met': isConditionNotMet,
    }"
  >
    → {{ choice.text }}
    <span v-if="choice.condition && isConditionNotMet" class="requirement"> (Nécessite: {{ getConditionDisplayName(choice.condition) }}) </span>
  </button>
</template>

<script setup>
// Script setup pour gérer l'affichage et la sélection d'un choix unique dans une interface narrative
import { computed } from "vue";
import { useStoryStore } from "@/stores/StoryStore";
import { usePlayerStore } from "@/stores/PlayerStore";

// Accès aux magasins d'histoire et de joueur
const storyStore = useStoryStore();
const playerStore = usePlayerStore();

// Définition des props du composant
const props = defineProps({
  choice: {
    type: Object,
  },
});

// Calculs pour déterminer la visibilité et l'état du choix
const isChoiceVisible = computed(() => {
  if (!props.choice.condition) {
    return true;
  }

  if (props.choice.condition.startsWith("end-")) {
    return playerStore.hasFlag(props.choice.condition);
  }

  return true;
});

// Vérification si la condition du choix n'est pas remplie
const isConditionNotMet = computed(() => {
  if (!props.choice.condition) {
    return false;
  }

  if (props.choice.condition.startsWith("end-")) {
    return !playerStore.hasFlag(props.choice.condition);
  }

  return !playerStore.hasItem(props.choice.condition);
});

// Désactivation du bouton si la condition n'est pas remplie
const isDisabled = computed(() => {
  return isConditionNotMet.value;
});

// Fonction pour obtenir le nom affichable d'une condition
const getConditionDisplayName = (condition) => {
  const endingNames = {
    "end-1": "Fin 1",
    "end-2": "Fin 2",
    "end-3": "Fin 3 - Déni",
    "end-4": "Fin 4 - Marchandage",
    "end-5": "Fin 5 - Résignation",
    "end-6": "Fin 6 - Acceptance",
  };

  return endingNames[condition] || condition;
};

// Chargement des options de choix après le montage du composant
storyStore.loadChoiceOptions();
</script>

<style scoped>
button {
  padding: 5px 10px;
  cursor: pointer;
  font-family: "F25";
  transition: color 0.5s ease;
  background: none;
  border: none;
  font-size: 1.2rem;
}

button:hover {
  color: white;
}
</style>
