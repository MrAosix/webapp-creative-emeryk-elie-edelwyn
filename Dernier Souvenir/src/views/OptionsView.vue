<template>
  <div class="options-view-wrapper">
    <h1>Options</h1>
    <h3>Volume</h3>
    <input type="range" min="0" max="100" v-model="volume" />
    <h3>Vitesse des textes</h3>
    <input type="range" min="0" max="100" v-model="textSpeed" /> <br />
    <move-view-button label="Retour" page="" />
  </div>
</template>

<script setup>
import MoveViewButton from "@/components/common/MoveViewButton.vue";
</script>

<style scoped>
.options-view-wrapper {
  color: white;
  font-family: "Sebastien";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 20px;
}

h1 {
  font-size: 8vw;
  text-align: center;
  font-family: "Viper";
  font-weight: 550;
  margin: 0;
  color: #ffc973;
  text-shadow: 5px 5px 4px #000000, 0 0 10px rgba(255, 201, 115, 0.3);
  animation: fadeIn 1.5s ease-in-out forwards,
    pulse 8s ease-in-out 1.5s infinite;
}
</style>
