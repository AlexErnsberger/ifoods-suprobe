<template>
<div id="suprobe-home">
  <home-swiper></home-swiper>
  <home-desc-pics></home-desc-pics>
  <home-news></home-news>
  <home-qr-code></home-qr-code>
  <home-download class="ios-download">
    <span slot="title">IOS 下载</span>
    <img slot="content" src="/static/img/home/download-ios.png" width="80px">
  </home-download>
  <home-download class="andriod-download">
    <span slot="title">Andriod 下载</span>
    <img slot="content" src="/static/img/home/download-andriod.png" width="80px">
  </home-download>
</div>
</template>

<script>
import HomeSwiper from '@/components/Home/HomeSwiper.vue'
import HomeNews from '@/components/Home/HomeNews.vue'
import HomeQrCode from '@/components/Home/HomeQrCode.vue'
import HomeDescPics from '@/components/Home/HomeDescPics.vue'
import classmix from '@/mixin/mixin-wow.js'
import HomeDownload from '@/components/download/download.vue'
export default {
  components: {
    HomeSwiper,
    HomeNews,
    HomeQrCode,
    HomeDescPics,
    HomeDownload
  },
  mixins: [classmix]
}
</script>

<style lang="less" scoped>
.ios-download{
  top: 40%;
}
.andriod-download{
  top: 52%;
}
</style>
