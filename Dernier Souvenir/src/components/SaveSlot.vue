<template>
    <div class="save-slot">
        <h2>{{ slotNumber }}</h2>
        <p v-if="lastSaveTime">{{ act }}: {{ chapterName }}</p>
        <img v-if="lastSaveTime" :src="imageSrc" :alt="`Image de chapitre pour ${chapterName}`"/>
        <p v-if="lastSaveTime">{{ lastSaveTime }}</p>
        <router-link v-if="lastSaveTime" @click="saveStore.loadGame(slotName)" :to="`/${chapterId}`">Charger</router-link>
        <button v-if="lastSaveTime" @click="saveStore.deleteSave(slotName)">Réinitialiser</button>
        <p v-if="!lastSaveTime">VIDE</p>
    </div>
</template>

<script setup>
    import { useSaveStore } from '@/stores/SaveStore'

    const saveStore = useSaveStore()

    const props = defineProps({
        slotNumber: {
            type: String
        },
        act: {
            type: String
        },
        chapterId: {
            type: String
        },
        chapterName: {
            type: String
        },
        imageSrc: {
            type: String
        },
        lastSaveTime: {
            type: String
        },
        slotName: {
            type: String
        }
    })
</script>

<style scoped>
</style>