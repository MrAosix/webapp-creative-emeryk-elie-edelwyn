<template>
  <h1>Options</h1>
  <h3>Volume</h3>
  <input type="range" min="0" max="100" />
  <h3>Sauvegarde automatique</h3>
  <input type="checkbox" />
  <h3>Vitesse des textes</h3>
  <input type="range" min="0" max="100" /> <br />
  <move-view-button label="Retour" page="" />
</template>

<script setup>
import MoveViewButton from "@/components/MoveViewButton.vue";
</script>

<style scoped></style>
