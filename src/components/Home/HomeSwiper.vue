<template>
<div>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide class="slide-1">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6">
            <img class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s" src="/static/img/home/swiper/banner1-suprobe-img.png">
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <section>
              <!-- <a href="#" class="suprobe-font">
                  <a href="#">立即订购</a>
                </a> -->
              <h1 class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">超极探针</h1>
              <h2 class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">Suprobe Home</h2>
              <h3 class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">创世版首发 品鉴邀请中</h3>
              <a class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s" href="https://weidian.com/item.html?itemID=2621089563&p=iphone&wfr=wxBuyerShare&share_relation=3288c65866e6f5c6_192567885_1">立即订购</a>
            </section>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="slide-2">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-8 text-center">
            <section>
              <swiper-content :data="slide2"></swiper-content>
            </section>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="slide-3">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 text-center">
            <section>
              <swiper-content :data="slide3"></swiper-content>
            </section>
          </div>
        </div>
      </div>
    </swiper-slide>
    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
  </swiper>
</div>
</template>

<script>
import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper'
import SwiperContent from '@/components/Home/Common/SwiperContent.vue'
import * as swiperAni from '@/assets/js/swiper.animate.min.js'
export default {
  components: {
    swiper,
    swiperSlide,
    SwiperContent
  },
  data () {
    return {
      slide2: {
        title: '这一刻起，科学家帮你挑选食材',
        desc: ['40年全球科技食品开发经验', '全球900组牛肉数据解析', '迷你硬件汇聚全球科技']
      },
      slide3: {
        title: '轻松下厨，告别烹饪前的不安',
        desc: ['什么样的肉，才适合孩子成长？', '哪里的牛肉更有营养？', '牛肉买回来需要清洗么？']
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
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev'
        // }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.swiper-slide {
  &.slide-1 {
    .mixin-bg(@url: @home-swiperpic1-url;
    @height: @home-swiper-bg-height);
    .mixin-center;

    img {
      max-width: 100%;
    }

    section {
      width: 80%;
      margin: auto;

      h1,
      h2,
      h3 {
        color: @common-fs-color;
        white-space: nowrap;
        width: 280px;
        text-align: justify;
        text-align-last: justify;
        margin: auto;
      }
      h1{
        .mixin-h(@fw: 100);
      }
      h2{
        .mixin-h(@home-head + @home-head / 30, 400);
         margin-bottom: @home-head / 10;
      }
      h3{
        .mixin-h(@home-head / 1.5, 400);
        color: #999;
        margin-bottom: @home-head / 5;
      }

      a {
        display: inline-block;
        width: 200px;
        margin: auto;
        padding: .6em 0;
        text-decoration: none;
        font-size: 1.2em;
        color: white;
        background: linear-gradient(to right, @common-color-light, @common-color);
        border-radius: 24px;
      }

      a:hover {
        background: @common-color-light linear-gradient(hsla(0, 0%, 100%, .2), transparent);
        text-decoration: none;
      }
    }
  }

  &.slide-2 {
    .mixin-bg(@url: @home-swiperpic2-url;@position:70% 50%;
    @height:@home-swiper-bg-height);
    .mixin-center;
    color: white;
    letter-spacing: .3em;
  }

  &.slide-3 {
    .mixin-bg(@url: @home-swiperpic3-url;
    @height: @home-swiper-bg-height);
    .mixin-center;
    color: #e3a53c;
  }
}
</style>
