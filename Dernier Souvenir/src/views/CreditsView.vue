<template>
  <div class="credits-view-wrapper">
    <h1>Credits</h1>
    <h3>Créateurs</h3>
    <p>
      Émeryk Bélisle <br />
      Elie Daher <br />
      Edelwyn Ledru
    </p>
    <h3>Images</h3>
    <p>Images générés avec l'aide de ChatGPT v5</p>
    <move-view-button label="Retour" page="" />
  </div>
</template>

<script setup>
import MoveViewButton from "@/components/common/MoveViewButton.vue";
</script>

<style scoped>
.credits-view-wrapper {
  color: white;
  font-family: "Sebastien";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
  font-size: 4.5vw;
  color: #ffc973;
  text-shadow: 2px 2px 4px #000000, 0 0 10px rgba(255, 201, 115, 0.3);
  margin-bottom: 0;
  margin-top: 1vw;
  letter-spacing: 2px;
}

p {
  font-size: 3vw;
  text-align: center;
  margin-top: 0.2vw;
  margin-bottom: 0.2vw;
  text-shadow: 2px 2px 4px #000000, 0 0 10px rgba(255, 201, 115, 0.3);
}
@media screen and (max-width: 850px) {
  h3,
  p {
    letter-spacing: 2px;
  }
  h1 {
    font-size: 60px;
  }
  h3 {
    font-size: 40px;
  }
  p {
    font-size: 25px;
  }
}
</style>
