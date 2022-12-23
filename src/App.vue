<template>
  <Header></Header>
  <router-view></router-view>
</template>
<script setup>
import Header from './Components/Header.vue';
</script>
<style>
body,
#app {
  width: 100vw;
  height: 100vh;
  background: transparent;
  border: 0;
  margin: 0;
  padding: 0;
}
</style>
