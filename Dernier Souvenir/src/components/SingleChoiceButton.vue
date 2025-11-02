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
    <span v-if="choice.condition && isConditionNotMet" class="requirement">
      (Nécessite: {{ getConditionDisplayName(choice.condition) }})
    </span>
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

// Check if the choice should be visible at all
const isChoiceVisible = computed(() => {
  // If there's no condition, always show the choice
  if (!props.choice.condition) {
    return true;
  }

  // Check if it's an ending condition (starts with "end-")
  if (props.choice.condition.startsWith("end-")) {
    // For ending conditions, only show if the player has that flag
    return playerStore.hasFlag(props.choice.condition);
  }

  // For item conditions, always show the choice (but may be disabled)
  return true;
});

// Check if the condition is not met
const isConditionNotMet = computed(() => {
  if (!props.choice.condition) {
    return false;
  }

  // Check if it's an ending condition
  if (props.choice.condition.startsWith("end-")) {
    return !playerStore.hasFlag(props.choice.condition);
  }

  // For item conditions
  return !playerStore.hasItem(props.choice.condition);
});

const isDisabled = computed(() => {
  return isConditionNotMet.value;
});

// Get a display name for the condition
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
