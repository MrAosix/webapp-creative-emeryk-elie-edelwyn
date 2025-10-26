<template>
    <div class="narrative-text-box">
        <p v-if="storyStore.currentText?.talking !== 'Narrator' && !storyStore.isTextFinished">
            {{ storyStore.currentText.talking }}:
        </p>
        <p>{{ storyStore.currentText.text }}</p>
        <button @click="storyStore.goToNextText()" v-if="!storyStore.isTextFinished">Suivant</button>
    </div>
</template>

<script setup>
    import { useStoryStore } from '@/stores/StoryStore'
    const storyStore = useStoryStore()


</script>

<style scoped>
</style>