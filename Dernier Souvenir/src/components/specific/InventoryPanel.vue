<template>
  <div class="inventory-panel">
    <h1>Inventaire</h1>
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
  background-color: #503c20;
  color: white;
  letter-spacing: 2px;
  font-weight: 100;
  padding: 4px;
  margin-bottom: 8px;
}

.inventory-panel {
  display: flex;
  flex-direction: column;
}

.inventory {
  display: flex;
  flex-direction: column;
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
}
</style>
