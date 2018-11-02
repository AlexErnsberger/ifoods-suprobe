<template>
<div id="suprobe-home">
  <home-swiper></home-swiper>
  <home-pics></home-pics>
  <home-news></home-news>
  <home-qr-code></home-qr-code>
</div>
</template>

<script>
import HomeSwiper from '@/components/Home/HomeSwiper.vue'
import HomeNews from '@/components/Home/HomeNews.vue'
import HomeQrCode from '@/components/Home/HomeQrCode.vue'
import HomePics from '@/components/Home/HomePics.vue'
import classmix from '@/mixin/mixin.js'
export default {
  components: {
    HomeSwiper,
    HomeNews,
    HomeQrCode,
    HomePics
  },
  mixins: [classmix]
}
</script>

<style lang="less" scoped>
#suprobe-home {}
</style>
