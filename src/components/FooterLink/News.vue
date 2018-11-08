<template>
<div id="news">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-8">
        <short-view-model :news="laterlyNews"  class="wow slideInUp" ></short-view-model>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4">
        <logo-model class="wow slideInUp"></logo-model>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-4" v-for="(news,index) in newsList" :key="index">
        <short-view-model :news="news" style="height:400px;"  class="wow slideInUp"></short-view-model>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ShortViewModel from '@/components/FooterLink/NewsPlugin/ShortViewModel.vue'
import LogoModel from '@/components/FooterLink/NewsPlugin/LogoModel.vue'
import {TITLE_NEWS, MEDIA_NEWS} from '@/constant/newsJson.js'
export default {
  components: {
    ShortViewModel, LogoModel
  },
  data () {
    return {
      laterlyNews: TITLE_NEWS,
      newsList: MEDIA_NEWS
    }
  }
}
</script>

<style lang="less" scoped>
#news {
  background: @common-bg-color;
}
</style>
