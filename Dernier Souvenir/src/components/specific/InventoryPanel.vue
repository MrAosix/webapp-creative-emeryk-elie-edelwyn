<template>
  <div class="inventory-panel">
    <h1>INVENTAIRE</h1>
    <div class="inventory">
      <div class="item" v-for="item in filteredItems" :key="item.id">
        <img :src="`/src/assets/images/items/${item}.png`" alt="" />
        <p>{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useSaveStore } from "@/stores/SaveStore";

const saveStore = useSaveStore();
const filteredItems = computed(() => {
  const currentSaveSlot = saveStore.latestSave;
  return currentSaveSlot.playerState.inventory;
});
</script>

<style scoped>
h1 {
  text-align: center;
  color: #503c20;
  margin: 5px;
  background-color: #2e200c;
  background-image: url("@/assets/images/backgrounds/panel-texture.png");
  background-blend-mode: overlay;
  color: white;
  letter-spacing: 2px;
  font-weight: 100;
  padding: 4px;
  font-family: "F25";
  font-size: 1.6rem;
}

.inventory-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 5px solid #503c20;
  background-color: #4d3715c8;
  background-image: url("@/assets/images/backgrounds/panel-texture.png");
  background-blend-mode: color-burn;
  min-height: 0;
  overflow-y: auto;
  user-select: none;
  font-family: "Viper";
}

.inventory {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  flex: 1;
  min-height: 0;
}

img {
  width: 60px;
  height: 60px;
  margin: 0 5px;
}

.item {
  display: flex;
  font-size: 1.2rem;
  background-color: #503c20;
  margin: 2px 5px;
  color: white;
  font-family: "F25";
  font-weight: bold;
}
@media screen and (max-width: 450px) {
  input[type="range"] {
    width: 60vw;
  }
  h1 {
    font-size: 50px;
  }
  h3 {
    font-size: 25px;
  }
}
@media screen and (max-width: 850px) {
  .inventory p,
  .inventory {
    font-size: 25px;
  }
}
</style>
