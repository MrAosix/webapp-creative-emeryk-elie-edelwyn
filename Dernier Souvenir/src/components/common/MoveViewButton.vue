<template>
  <!-- Composant de bouton pour naviguer entre les vues -->
  <router-link class="move-view-button" :to="`/${page}`">{{ label }}</router-link>
</template>

<script setup>
// Script setup pour définir les propriétés du composant comme le label et la page
const props = defineProps({
  label: {
    type: String,
  },
  page: {
    type: String,
  },
});
</script>

<style scoped>
a {
  background-color: #503c20;
  background-image: url("@/assets/images/backgrounds/button-texture.png");
  background-blend-mode: soft-light;
  padding: 15px;
  border-radius: 5px;
  color: #ffc973;
  text-decoration: none;
  font-size: 30px;
  font-family: "Sebastien";
  margin: 30px;
  letter-spacing: 3px;
  transition: all 0.7s ease;
  text-shadow: 2px 2px 4px #000000;
  box-shadow: 0px 0px 8px #000000;
}
a:hover {
  background-color: #382a17;
}
</style>
