<template>
<div id="home-news">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-4" v-for="(news, index) in newsList" :key="index">
        <short-view-model :news="news" style="height:400px" class="wow flipInY"></short-view-model>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ShortViewModel from '@/components/FooterLink/NewsPlugin/ShortViewModel.vue'
import {HOME_NEWS} from '@/constant/newsJson.js'
export default {
  components: {
    ShortViewModel
  },
  data () {
    return {
      newsList: HOME_NEWS
    }
  }
}
</script>

<style lang="less">
#home-news {
  padding: 30px 0;
}
</style>
