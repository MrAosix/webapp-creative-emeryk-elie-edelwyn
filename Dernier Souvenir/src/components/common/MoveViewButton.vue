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

<style scoped>
a {
  background-color: #625149;
  padding: 15px;
  border-radius: 5px;
  color: #FFC973;
  text-decoration: none;
  font-size: 30px;
  font-family: "Sebastien";
  margin: 30px;
  letter-spacing : 3px;
}
a:hover {
  background-color: #422B26;
  transition: 0.5s;
  transform: translateY(5px);
  box-shadow: 0 5px 10px #625149;
}
a:active {
  color: #a87c60ff;
}
</style>
