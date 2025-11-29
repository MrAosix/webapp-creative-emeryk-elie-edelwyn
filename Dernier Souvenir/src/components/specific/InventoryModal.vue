<template>
  <div v-if="isOpen" class="modal" @click.self="$emit('close')">
    <div class="modal-content">
      <button class="close-button" @click="$emit('close')">✕</button>
      <h1>Inventaire</h1>
      <div class="inventory">
        <div class="item" v-for="item in filteredItems" :key="item">
          <img :src="`/src/assets/images/items/${item}.png`" :alt="item" />
          <p>{{ item }}</p>
        </div>
        <p v-if="filteredItems.length === 0" class="empty-message">Aucun objet dans l'inventaire</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useSaveStore } from "@/stores/SaveStore";

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["close"]);

const saveStore = useSaveStore();
const filteredItems = computed(() => {
  const currentSaveSlot = saveStore.latestSave;
  return currentSaveSlot.playerState.inventory;
});
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: #4d3715c8;
  background-image: url("@/assets/images/backgrounds/panel-texture.png");
  background-blend-mode: color-burn;
  border: 5px solid #503c20;
  padding: 20px;
  border-radius: 10px;
  max-width: 90vw;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0px 0px 20px #000000;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #503c20;
  color: #ffc973;
  border: 2px solid #503c20;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-family: Arial, sans-serif;
  padding: 0;
  line-height: 1;
}

.close-button:hover {
  background-color: #382a17;
  transform: scale(1.1);
}

h1 {
  text-align: center;
  color: white;
  background-color: #2e200c;
  background-image: url("@/assets/images/backgrounds/panel-texture.png");
  background-blend-mode: overlay;
  letter-spacing: 2px;
  font-weight: 100;
  padding: 10px;
  margin: 0 0 20px 0;
  font-family: "Viper";
  font-size: 36px;
  text-shadow: 5px 5px 4px #000000, 0 0 10px rgba(255, 201, 115, 0.3);
}

.inventory {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 200px;
}

.item {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  background-color: #503c20;
  padding: 10px;
  color: white;
  border-radius: 5px;
  font-family: "Sebastien";
}

img {
  width: 60px;
  height: 60px;
  margin-right: 15px;
}

.item p {
  margin: 0;
  letter-spacing: 1px;
}

.empty-message {
  text-align: center;
  color: #cccccc;
  font-size: 20px;
  padding: 40px;
  font-family: "Sebastien";
}
</style>
