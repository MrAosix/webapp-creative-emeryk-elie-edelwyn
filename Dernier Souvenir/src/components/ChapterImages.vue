<template>
    <div>
        <img class="background" :src="chapterImage" alt="">
        <img class="character" :class="{ talking: isTalking === 'Aurora' }" src="@/assets/images/characters/aurora.jpg" alt="image d'Aurora">
        <img class="character" :class="{ talking: isTalking === 'David' }" src="@/assets/images/characters/david.jpg" alt="image de David">
    </div>
</template>

<script setup>
    import { computed, watchEffect } from 'vue'
    import { useStoryStore } from '@/stores/StoryStore'

    const storyStore = useStoryStore()
    const chapterImage = computed(() => storyStore.currentChapter?.backgroundImage)
    const isTalking = computed(() => storyStore.currentText.talking)
</script>

<style scoped>
    .background {
        width: 300px;
        height: 300px;
    }
    .character {
        width: 150px;
        height: 300px;
        filter: grayscale(100%) brightness(30%);
    }
    .talking {
        filter: none;
    }

</style>