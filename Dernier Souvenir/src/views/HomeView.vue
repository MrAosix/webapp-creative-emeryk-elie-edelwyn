<template>
  <div class="home-view-wrapper">
    <h1>DERNIER SOUVENIR</h1>
    <div class="button-wrapper">
      <MoveViewButton label="Jouer" page="sauvegardes" class="fade-in delay-1" />
      <MoveViewButton label="Crédits" page="credits" class="fade-in delay-2" />
    </div>
  </div>
</template>

<script setup>
import MoveViewButton from "@/components/common/MoveViewButton.vue";
</script>

<style scoped>
.home-view-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1.5s ease-in-out forwards;
}

.delay-1 {
  animation-delay: 0.5s;
}

.delay-2 {
  animation-delay: 1s;
}

.delay-3 {
  animation-delay: 1.5s;
}

h1 {
  font-size: 8vw;
  text-align: center;
  font-family: "Viper";
  font-weight: 550;
  margin: 0;
  margin-bottom: 5vh;
  color: #ffc973;
  text-shadow: 5px 5px 4px #000000, 0 0 10px rgba(255, 201, 115, 0.3);
  animation: fadeIn 1.5s ease-in-out forwards, pulse 8s ease-in-out 1.5s infinite;
  user-select: none;
}

.button-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

a {
  min-width: 15vw;
  text-align: center;
  margin-top: 2vw;
}

/* Version Tablet */
@media screen and (max-width: 1024px) and (min-width: 601px) {
  .button-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .button-wrapper a {
    min-width: 40vw;
  }
}

/* Version Mobile */
@media screen and (max-width: 600px) {
  .button-wrapper {
    display: flex;
    flex-direction: column;
  }
  h1 {
    font-size: 70px;
  }

  .button-wrapper a {
    min-width: 50vw;
  }
}
</style>
