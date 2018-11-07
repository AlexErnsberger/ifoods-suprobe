<template>
<div id="suprobe-home">
  <home-swiper></home-swiper>
  <home-desc-pics></home-desc-pics>
  <home-news></home-news>
  <home-qr-code></home-qr-code>
</div>
</template>

<script>
import HomeSwiper from '@/components/Home/HomeSwiper.vue'
import HomeNews from '@/components/Home/HomeNews.vue'
import HomeQrCode from '@/components/Home/HomeQrCode.vue'
import HomeDescPics from '@/components/Home/HomeDescPics.vue'
import classmix from '@/mixin/mixin-wow.js'
export default {
  components: {
    HomeSwiper,
    HomeNews,
    HomeQrCode,
    HomeDescPics
  },
  mixins: [classmix]
}
</script>

<style lang="less" scoped>
</style>
