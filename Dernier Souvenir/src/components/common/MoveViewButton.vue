<template>
  <router-link class="move-view-button" :to="`/${page}`">{{
    label
  }}</router-link>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
  },
  page: {
    type: String,
  },
});
</script>

<style scoped></style>
