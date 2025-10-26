<template>
    <div>
        <h1>{{ currentTitle }}</h1>
    </div>
</template>

<script setup>
    import { computed } from 'vue'
    import { useStoryStore } from '@/stores/StoryStore'

    const storyStore = useStoryStore()
    const currentTitle = computed(() => storyStore.currentChapter?.title )
</script>

<style scoped>
</style>