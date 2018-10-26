<template>
  <div id="suprobe-home">
    <home-swiper></home-swiper>
    <home-news></home-news>
  </div>
</template>

<script>
import HomeSwiper from '@/components/Home/HomeSwiper.vue'
import HomeNews from '@/components/Home/HomeNews.vue'
export default {
  components: {
    HomeSwiper, HomeNews
  }
}
</script>

<style lang="less" scoped>
#suprobe-home{
  height: 100%;
  overflow: auto;
}
</style>
