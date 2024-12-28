<template>
  <!-- <transition mode="out-in" name="fade-transform"> </transition> -->
  <keep-alive :include="cachedRoutes" max="99">
    <router-view :key="key" class="app-main-height" />
  </keep-alive>

  <!-- <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view> -->
</template>

<script setup>
const cachedRoutes = ['/login', '/404']
const key = useRoute().path
</script>

<style lang="scss" scoped></style>
