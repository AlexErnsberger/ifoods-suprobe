<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide class="slide-1">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <transition appear-active-class="animated slideInLeft" appear>
                <section >
                  <a href="#" class="suprobe-img" />
                </section>
              </transition>
            </div>
            <div class="col-md-6">
              <transition enter-active-class="animated slideInRight" appear>
                <section>
                  <a href="#" class="suprobe-font">
                    <a href="#">立即订购</a>
                  </a>
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
import SwiperContent from '@/components/Home/SwiperContent.vue'
export default {
  components: {
    swiper, swiperSlide, SwiperContent
  },
  data () {
    return {
      slide2: {
        title: '这一刻起，科学家帮你挑选素材',
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
  width: 100%;
  @height: 390px;
  height: @height;
  margin-top: 70px;
  &.slide-1{
    background: url(/static/img/swiper-bg/banner1.png) no-repeat center/100% 100%;
    a{
      display: block;
      position: relative;
      &:hover{
        text-decoration: none;
      }
      &.suprobe-img::after{
        content: '';
        display: block;
        background: url(/static/img/swiper-bg/banner1-suprobe-img.png) no-repeat center/70% 80%;
        height:@height; 
      }
      a{
        position: absolute;
        line-height: 2.6;
        background-color: #1765a2;
        border-radius: 20px;
        width: 36%;
        color: white;
        bottom: 10%;
        left: 50%;
        margin-left: -18%;
      }
      &.suprobe-font::before{
        content: '';
        display: block;
        background: url(/static/img/swiper-bg/banner1-suprobe-font.png) no-repeat center/60% 50%;
        height:@height; 
      }
    }
  }
  &.slide-2{
    background: url(/static/img/swiper-bg/banner2.png) no-repeat center/100% 100%;
    color: white;
    letter-spacing: .3em;
    section{
      margin-top: @height/3;
    }
  }
  &.slide-3{
    background: url(/static/img/swiper-bg/banner3.png) no-repeat center/100% 100%;
    color: #e3a53c;
    section{
      margin-top: @height/3;
      letter-spacing: .3em;
    }
  }
}
</style>

