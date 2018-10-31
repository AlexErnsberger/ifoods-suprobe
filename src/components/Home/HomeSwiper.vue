<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide class="slide-1">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <transition appear-active-class="animated slideInLeft" appear>
                <img src="/static/img/home/swiper/banner1-suprobe-img.png">
              </transition>
            </div>
            <div class="col-md-6">
              <transition enter-active-class="animated slideInRight" appear>
                <section>
                  <!-- <a href="#" class="suprobe-font">
                    <a href="#">立即订购</a>
                  </a> -->
                  <h1>超级探针</h1>
                  <h2>Suprobe Home</h2>
                  <h3>创世版首发 品鉴邀请中</h3>
                  <a href="https://weidian.com/item.html?itemID=2621089563&p=iphone&wfr=wxBuyerShare&share_relation=3288c65866e6f5c6_192567885_1">立即订购</a>
                </section>
              </transition>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="slide-2">
        <div class="container">
          <div class="row">
            <div class="col-md-8 text-center">
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
            <div class="col-md-12 text-center">
              <section>
                <swiper-content :data="slide3"></swiper-content>
              </section>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
  </div>
</template>
<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import SwiperContent from '@/components/Home/Common/SwiperContent.vue'
export default {
  components: {
    swiper, swiperSlide, SwiperContent
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
  margin-top: 70px;
  &.slide-1 {
    .mixin-bg(@url:url(/static/img/home/swiper/banner1.png);@height:@common-bg-height);
    .mixin-center;
    img{
      width:60%;
    }
    section{
      width: 80%;
      margin:auto;
      h1, h2, h3{
        color: @home-fs-color;
      }
      h1{
        .mixin-h(@fw:100;);
        text-indent: @home-head / 3;
        letter-spacing: @home-head / 3;
      }
      h2{
        .mixin-h( @home-head + @home-head / 30,400);
        margin-bottom: @home-head / 4;
      }
      h3{
        .mixin-h(@home-head / 1.5,400);
        color:#999;
        margin-bottom:  @home-head / 4;
      }
      a{
        display: block;
        width:200px;
        margin:auto;padding: .6em 0;
        text-decoration: none;
        font-size: 1.2em;
        color: white;
        background: linear-gradient(to right,@common-color-light,@common-color);
        border-radius: 24px;
      }
      a:hover{
        background: @common-color-light linear-gradient(hsla(0,0%,100%,.2),transparent);
        text-decoration: none;
      }
    }
  }
  &.slide-2{
    .mixin-bg(@url: url(/static/img/home/swiper/banner2.png);@height: @common-bg-height);
    .mixin-center;
    color: white;
    letter-spacing: .3em;
  }
  &.slide-3{
    .mixin-bg(@url: url(/static/img/home/swiper/banner3.png);@height: @common-bg-height);
    .mixin-center;
    color: #e3a53c;
  }
}
</style>

