<template>
    <div>
        <img class="background" :src="chapterImage" alt="">
        <img class="character" src="@/assets/images/characters/aurora.jpg" alt="image d'Aurora">
        <img class="character" src="@/assets/images/characters/david.jpg" alt="image de David">
    </div>
</template>

<script setup>
    import { computed } from 'vue'
    import { useStoryStore } from '@/stores/StoryStore'

    const storyStore = useStoryStore()
    const chapterImage = computed(() => storyStore.currentChapter.backgroundImage)

</script>

<style scoped>
    .background {
        width: 300px;
        height: 300px;
    }
    .character {
        width: 150px;
        height: 300px;
    }

</style>