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

<style scoped>
h1 {
  font-size : 120px;
  text-align: center;
  font-family: "Viper";
  font-weight: 550;
}
.button-wrapper {
  display: flex;
  justify-content: space-around;
}
</style>
