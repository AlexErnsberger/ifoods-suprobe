<template>
<div id="appScene">
  <swiper :options="swiperOption" ref="mySwiper" class="swiper-container">
    <swiper-slide class="slide-1">
      <app-content :data="slide1"></app-content>
    </swiper-slide>
    <swiper-slide class="slide-2">
      <app-content :data="slide2"></app-content>
    </swiper-slide>
    <swiper-slide class="slide-3">
      <app-content :data="slide3"></app-content>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper'
import AppContent from '@/components/AppScene/AppContent.vue'
import * as swiperAni from '@/assets/js/swiper.animate.min.js'
export default {
  components: {
    swiper,
    swiperSlide,
    AppContent
  },
  data () {
    return {
      slide1: {
        title: '食品购买现场检测',
        content: '无论是在超市还是在生鲜市场，消费者可随时使用智能硬件进行食品品质检测，现场采集待监管商贩的食品数据，1分钟内反馈检测结果，为购买行为提供数据参考。'
      },
      slide2: {
        title: '通过DAPP查看周围商铺',
        content: 'DAPP将基于地理位置的周边商铺导览，消费者可一键浏览附近商铺数据信息，自行添加最喜爱的，最信赖的商铺，自定义购买习惯，让食材选购更轻松。'
      },
      slide3: {
        title: '监管机构通过DAPP分析区域内商铺',
        content: 'DAPP将基于地理位置的周边商铺导览，消费者可一键浏览附近商铺数据信息，自行添加最喜爱的，最信赖的商铺，自定义购买习惯，让食材选购更轻松。'
      },
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        effect: 'fade',
        // 无限循环
        loop: true,
        // 自动播放
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        on: {
          init: function () {
            swiperAni.swiperAnimateCache(this)
            swiperAni.swiperAnimate(this)
          },
          slideChange: function () {
            swiperAni.swiperAnimate(this)
          }
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.swiper-slide {
  &.slide-1 {
    .mixin-bg(@url: url(/static/img/appscene/slide1-bg.jpg);@position:60% 50%;
    @height: @common-fullscreen-height);
    .mixin-center;
  }

  &.slide-2 {
    .mixin-bg(@url: url(/static/img/appscene/slide2-bg.jpg);
    @height: @common-fullscreen-height);
    .mixin-center;
  }

  &.slide-3 {
    .mixin-bg(@url: url(/static/img/appscene/slide3-bg.jpg);
    @height: @common-fullscreen-height);
    .mixin-center;
  }
}
</style>
