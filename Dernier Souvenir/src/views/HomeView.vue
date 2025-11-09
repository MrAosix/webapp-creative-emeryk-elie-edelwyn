<template>
  <img
    class="background"
    src="@/assets/images/backgrounds/ch-6aaa.png"
    alt="background image"
  />
  <div class="home-view-wrapper">
    <h1>DERNIER SOUVENIR</h1>
    <div class="button-wrapper">
      <MoveViewButton label="Options" page="options" class="fade-in delay-2" />
      <MoveViewButton
        label="Jouer"
        page="sauvegardes"
        class="fade-in delay-1"
      />
      <MoveViewButton label="Crédits" page="credits" class="fade-in delay-3" />
    </div>
  </div>
</template>

<script setup>
import MoveViewButton from "@/components/common/MoveViewButton.vue";
</script>

<style scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  animation: backgroundFadeIn 10s ease-in-out infinite alternate;
}

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

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes backgroundFadeIn {
  from {
    filter: brightness(80%);
    transform: scale(1.1);
  }
  to {
    filter: brightness(100%);
    transform: scale(1);
  }
}

h1 {
  font-size: 8vw;
  text-align: center;
  font-family: "Viper";
  font-weight: 550;
  margin: 0;
  color: #ffc973;
  text-shadow: 5px 5px 4px #000000, 0 0 10px rgba(255, 201, 115, 0.3);
  animation: fadeIn 1.5s ease-in-out forwards,
    pulse 8s ease-in-out 1.5s infinite;
}

@keyframes pulse {
  0%,
  100% {
    text-shadow: 5px 5px 4px #000000, 0 0 10px rgba(255, 201, 115, 0.3);
  }
  50% {
    text-shadow: 5px 5px 4px #000000, 0 0 20px rgba(255, 201, 115, 0.6),
      0 0 30px rgba(255, 201, 115, 0.4);
  }
}

.button-wrapper {
  display: flex;
  justify-content: center;
}

a {
  min-width: 10vw;
  text-align: center;
  margin-top: 2vw;
}
</style>
