<template>
    <save-slot slotNumber="1" act="Acte 1" chapterId="chapitre/:ch-1" chapterName="L'Aventure Commence" imageSrc="chapter1.jpg" lastSaveTime="10:00" slotName="saveSlot1"></save-slot>
    <save-slot slotNumber="2" act="" chapterId="" chapterName="" imageSrc="" lastSaveTime="" slotName="saveSlot2"></save-slot>
    <save-slot slotNumber="3" act="" chapterId="" chapterName="" imageSrc="" lastSaveTime="" slotName="saveSlot3"></save-slot>
</template>

<script setup>
    import SaveSlot from '@/components/SaveSlot.vue';
    import { useSaveStore } from '@/stores/SaveStore'

    const saveStore = useSaveStore()
</script>

<style scoped>
</style>