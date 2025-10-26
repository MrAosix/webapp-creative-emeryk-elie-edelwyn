<template>
    <button 
        @click="storyStore.selectSingleChoice(choice)"
        :disabled="isDisabled"
        :class="{ 'disabled': isDisabled }"
    >
        {{ choice.text }}
        <span v-if="choice.condition" class="requirement">
            (Nécessite: {{ choice.condition }})
        </span>
    </button>
</template>

<script setup>
    import { computed } from 'vue'
    import { useStoryStore } from '@/stores/StoryStore'
    import { usePlayerStore } from '@/stores/PlayerStore'
    
    const storyStore = useStoryStore()
    const playerStore = usePlayerStore()
    
    const props = defineProps({
        choice: {
            type: Object
        }
    })
    const isDisabled = computed(() => {
        if (!props.choice.condition) {
            return false
        }
        return !playerStore.hasItem(props.choice.condition)
    })

    storyStore.loadChoiceOptions()
</script>

<style scoped>

.requirement {
    font-style: italic;
}
</style>