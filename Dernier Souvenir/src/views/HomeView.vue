<template>
  <div class="home-view-wrapper">
    <h1>DERNIER SOUVENIR</h1>
    <div class="button-wrapper">
      <MoveViewButton label="Jouer" page="sauvegardes" />
      <MoveViewButton label="Options" page="options" />
      <MoveViewButton label="Crédits" page="credits" />
    </div>
  </div>
</template>

<script setup>
import MoveViewButton from "@/components/common/MoveViewButton.vue";
</script>

<style scoped></style>
