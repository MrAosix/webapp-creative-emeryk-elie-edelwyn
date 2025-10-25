<template>
    <div class="home-view-wrapper">
        <h1>DERNIER SOUVENIR</h1>
        <div class="button-wrapper">
            <MoveViewButton label="Charger Partie" page="sauvegardes"/>
            <MoveViewButton label="Nouvelle Partie" page="chapitre/:ch-1"/>
            <MoveViewButton label="Options" page="options"/>
            <MoveViewButton label="Crédits" page="credits"/>
        </div>
    </div>
</template>

<script setup>
    import MoveViewButton from '@/components/MoveViewButton.vue'
</script>

<style scoped>
</style>