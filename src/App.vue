<template>
  <div id="app">
    <suprobe-header></suprobe-header>
    <router-view/>
  </div>
</template>

<script>
import SuprobeHeader from '@/components/Header/Header.vue'
export default {
  name: 'App',
  components: {
    SuprobeHeader
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}
</style>
