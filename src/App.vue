<template>
<div id="app">
  <suprobe-header></suprobe-header>
  <div class="placeholder"></div>
  <router-view />
  <suprobe-footer></suprobe-footer>
</div>
</template>

<script>
import SuprobeHeader from '@/components/Header/Header.vue'
import SuprobeFooter from '@/components/Footer/Footer.vue'
export default {
  name: 'App',
  components: {
    SuprobeHeader,
    SuprobeFooter
  }
}
</script>

<style lang="less" scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  div.placeholder{
    height: 70px;// 标题fixed占位符
  }
}
</style>
