<template>
  <div class="save-view-wrapper">
    <h1>SAUVEGARDES</h1>
    <save-slot-panel />
    <div class="move-view-button-wrapper">
      <move-view-button label="Retour" page="" />
    </div>
  </div>
</template>

<script setup>
import SaveSlotPanel from "@/components/specific/SaveSlotPanel.vue";
import MoveViewButton from "@/components/common/MoveViewButton.vue";
</script>

<style scoped>
.move-view-button-wrapper {
  display: flex;
}

.save-view-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 20px;
  animation: fadeIn 1.5s ease-in-out forwards;
}

h1 {
  font-size: 6vw;
  text-align: center;
  font-family: "Viper";
  font-weight: 550;
  margin: 0;
  color: #ffc973;
  text-shadow: 5px 5px 4px #000000, 0 0 10px rgba(255, 201, 115, 0.3);
  animation: pulse 8s ease-in-out 1.5s infinite;
}
</style>
