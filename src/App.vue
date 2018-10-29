<template>
  <div id="app">
    <suprobe-header></suprobe-header>
    <router-view/>
    <suprobe-footer></suprobe-footer>
  </div>
</template>

<script>
import SuprobeHeader from '@/components/Header/Header.vue'
import SuprobeFooter from '@/components/Footer/Footer.vue'
export default {
  name: 'App',
  components: {
    SuprobeHeader, SuprobeFooter
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
