<template>
  <div v-if="modalIsOpen" class="modal">
    <div class="modal-content">
      <h2>Confirmer</h2>
      <p>Êtes-vous sûr de vouloir réinitialiser? Cela effacera votre sauvegarde actuelle.</p>
      <button class="confirm-button" @click="confirmReset()">Oui</button>
      <button class="cancel-button" @click="$emit('close')">Non</button>
    </div>
  </div>
</template>

<script setup>
import { useSaveStore } from "@/stores/SaveStore";

const saveStore = useSaveStore();

const props = defineProps({
  modalIsOpen: Boolean,
  slotName: String,
});

const emit = defineEmits(["close"]);

const confirmReset = () => {
  if (props.slotName) {
    saveStore.deleteSave(props.slotName);
  }
  emit("close");
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: #2c1f0e;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 0px 10px #000000;
}

button {
  margin-left: 10px;
  background-color: #503c20;
  background-image: url("@/assets/images/backgrounds/button-texture.png");
  background-blend-mode: soft-light;
  padding: 10px;
  border-radius: 5px;
  color: #ffc973;
  text-decoration: none;
  font-size: 30px;
  letter-spacing: 2px;
  transition: all 0.7s ease;
  text-shadow: 2px 2px 4px #000000;
  box-shadow: 0px 0px 8px #000000;
  border: none;
  font-family: "Sebastien";
}

button:hover {
  background-color: #382a17;
  cursor: pointer;
}

h2 {
  display: flex;
  color: #ffc973;
  text-shadow: 5px 5px 4px #000000, 0 0 10px rgba(255, 201, 115, 0.3);
  font-size: 30px;
  align-items: center;
  letter-spacing: 1.5px;
  justify-content: center;
}

p {
  color: white;
  letter-spacing: 1.5px;
  font-size: 25px;
  margin: 20px 0;
}
</style>
