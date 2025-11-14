<template>
  <button
    v-if="isChoiceVisible"
    @click="storyStore.selectSingleChoice(choice)"
    :disabled="isDisabled"
    :class="{
      disabled: isDisabled,
      'condition-not-met': isConditionNotMet,
    }"
  >
    {{ choice.text }}
    <span v-if="choice.condition && isConditionNotMet" class="requirement"> (Nécessite: {{ getConditionDisplayName(choice.condition) }}) </span>
  </button>
</template>

<script setup>
import { computed } from "vue";
import { useStoryStore } from "@/stores/StoryStore";
import { usePlayerStore } from "@/stores/PlayerStore";

const storyStore = useStoryStore();
const playerStore = usePlayerStore();

const props = defineProps({
  choice: {
    type: Object,
  },
});

const isChoiceVisible = computed(() => {
  if (!props.choice.condition) {
    return true;
  }

  if (props.choice.condition.startsWith("end-")) {
    return playerStore.hasFlag(props.choice.condition);
  }

  return true;
});

const isConditionNotMet = computed(() => {
  if (!props.choice.condition) {
    return false;
  }

  if (props.choice.condition.startsWith("end-")) {
    return !playerStore.hasFlag(props.choice.condition);
  }

  return !playerStore.hasItem(props.choice.condition);
});

const isDisabled = computed(() => {
  return isConditionNotMet.value;
});

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

storyStore.loadChoiceOptions();
</script>

<style scoped></style>
