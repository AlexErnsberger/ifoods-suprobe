<template>
  <div id="suprobe-home">
    <home-swiper></home-swiper>
    <home-news></home-news>
  </div>
</template>

<script>
import HomeSwiper from '@/components/Home/Swiper.vue'
import HomeNews from '@/components/Home/SuprobeNews.vue'
export default {
  components: {
    HomeSwiper, HomeNews
  }
}
</script>

<style lang="less" scoped>
#suprobe-home{
  height: 100%;
}
</style>
