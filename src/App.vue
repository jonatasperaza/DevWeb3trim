<script setup>
import HeaderComponent from './components/global/HeaderComponent.vue'
import FooterComponent from './components/global/FooterComponent.vue'
</script>

<template>
  <HeaderComponent />
  <RouterView />
  <FooterComponent />
</template>