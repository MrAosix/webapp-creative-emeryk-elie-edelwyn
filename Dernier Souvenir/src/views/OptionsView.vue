<template>
  <div class="options-view-wrapper">
    <h1>Options</h1>
    <h3>Vitesse des textes - {{ textSpeed }}</h3>
    <input type="range" min="0" max="10" v-model="textSpeed" /> <br />
    <move-view-button label="Retour" page="" />
  </div>
</template>

<script setup>
import MoveViewButton from "@/components/common/MoveViewButton.vue";
import { ref } from "vue";

const volume = ref(50);
const textSpeed = ref(5);
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
  animation: fadeIn 1.5s ease-in-out forwards;
}

h1 {
  font-size: 8vw;
  text-align: center;
  font-family: "Viper";
  font-weight: 550;
  margin: 0;
  color: #ffc973;
  text-shadow: 5px 5px 4px #000000, 0 0 10px rgba(255, 201, 115, 0.3);
  animation: pulse 8s ease-in-out 1.5s infinite;
}

h3 {
  font-size: 2vw;
  color: #ffc973;
  text-shadow: 2px 2px 4px #000000, 0 0 10px rgba(255, 201, 115, 0.3);
  margin-bottom: 0;
}

input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  width: 20vw;
  border-radius: 50px;
  background: #503c20;
  accent-color: #ffc973;
  cursor: pointer;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
}
</style>
