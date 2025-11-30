<template>
  <div class="save-panel">
    <!-- Affichage du panneau des emplacements de sauvegarde -->
    <save-slot
      slotNumber="1"
      :act="saveSlot1Chapter?.act"
      :chapterName="saveSlot1Chapter?.title"
      :imageSrc="saveSlot1Chapter?.backgroundImage"
      :lastSaveTime="saveSlot1?.savedAt"
      slotName="saveSlot1"
    ></save-slot>
    <save-slot
      slotNumber="2"
      :act="saveSlot2Chapter?.act"
      :chapterName="saveSlot2Chapter?.title"
      :imageSrc="saveSlot2Chapter?.backgroundImage"
      :lastSaveTime="saveSlot2?.savedAt"
      slotName="saveSlot2"
    ></save-slot>
    <save-slot
      slotNumber="3"
      :act="saveSlot3Chapter?.act"
      :chapterName="saveSlot3Chapter?.title"
      :imageSrc="saveSlot3Chapter?.backgroundImage"
      :lastSaveTime="saveSlot3?.savedAt"
      slotName="saveSlot3"
    ></save-slot>
  </div>
</template>

<script setup>
import { computed } from "vue";
import SaveSlot from "@/components/common/SaveSlot.vue";
import { useSaveStore } from "@/stores/SaveStore";
import { useStoryStore } from "@/stores/StoryStore";

// Accès aux magasins de sauvegarde et d'histoire
const saveStore = useSaveStore();

// Accès au magasin de l'histoire
const storyStore = useStoryStore();

// Calculs pour obtenir les emplacements de sauvegarde
const saveSlot1 = computed(() => saveStore.saveSlots.saveSlot1);
const saveSlot2 = computed(() => saveStore.saveSlots.saveSlot2);
const saveSlot3 = computed(() => saveStore.saveSlots.saveSlot3);

// Calculs pour obtenir les chapitres actuels des emplacements de sauvegarde
const saveSlot1Chapter = computed(() => storyStore.storyData[saveSlot1.value?.currentChapterId]);
const saveSlot2Chapter = computed(() => storyStore.storyData[saveSlot2.value?.currentChapterId]);
const saveSlot3Chapter = computed(() => storyStore.storyData[saveSlot3.value?.currentChapterId]);
</script>

<style scoped>
.save-panel {
  display: flex;
  gap: 50px;
  font-family: "Sebastien";
  justify-content: center;
}

@media screen and (max-width: 1490px) {
  .save-panel {
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 500px;
  }
}
</style>
