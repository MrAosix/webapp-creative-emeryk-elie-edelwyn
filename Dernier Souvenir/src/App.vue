<script setup>
    import { useSaveStore } from '@/stores/SaveStore'

    const saveStore = useSaveStore()
    saveStore.initialize()
</script>

<template>
    <router-view></router-view>
</template>

<style scoped></style>
