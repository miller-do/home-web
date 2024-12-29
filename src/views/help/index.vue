<template>
  <div>
    <!-- <v-vanta></v-vanta> -->
    <v-vanta
      ref="vantaInstance"
      vantaId="vanta-bg"
      :effect="effect"
      :options="options"
    >
      <slot />
    </v-vanta>
  </div>
</template>

<script setup>
import VVanta from 'vue-vanta-revamp'

const options = {
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x3ff7ff,
  shininess: 85.0,
  waveHeight: 6.0,
  waveSpeed: 1,
  zoom: 0.75,
}

const effect = 'globe'
</script>

<style lang="scss" scoped>
#vanta-bg {
  z-index: -1000;
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
}
</style>
