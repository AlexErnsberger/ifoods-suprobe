<template>
<div id="pnr-spot">
  <header>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <section>
            <h2 class="wow fadeInUp">超极探针城市合伙人亮点</h2>
            <p class="wow fadeInUp">
              让每一个投资者都成为生态的参与者
              让每一个合伙人能成为项目的推动者
              让每一个持有人能成为利益的获得者
            </p>
          </section>
        </div>
      </div>
    </div>
  </header>
  <article>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12">
          <title-plugin :title="title" class="wow fadeInDown"></title-plugin>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <content-plugin :data="spot1" class="wow fadeInUp"></content-plugin>
        </div>
        <div class="col-sm-12 col-md-4">
          <content-plugin :data="spot2" class="wow fadeInUp"></content-plugin>
        </div>
        <div class="col-sm-12 col-md-4">
          <content-plugin :data="spot3" class="wow fadeInUp"></content-plugin>
        </div>
      </div>
    </div>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12">
            <p class="wow fadeInUp">
              熟悉超极探针的应用场景和市场前景
              有意向通过合伙人计划助力当地团队组建
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12">
            <apply-button class="wow fadeInUp">立即申请</apply-button>
          </div>
        </div>
      </div>
    </footer>
  </article>
</div>
</template>

<script>
import TitlePlugin from '@/components/CityPnr/Common/TitlePlugin.vue'
import ContentPlugin from '@/components/CityPnr/Common/ContentPlugin.vue'
import ApplyButton from '@/components/CityPnr/Common/ApplyButton.vue'
export default {
  components: {
    TitlePlugin,
    ContentPlugin,
    ApplyButton
  },
  data () {
    return {
      title: {
        zh: '合作支持',
        en: 'COOPERATIVE SUPPORT'
      },
      spot1: {
        topSrc: '/static/img/citypnr/spot/spot-icon1.png',
        bgSrc: '/static/img/citypnr/spot/spot-bg1.png',
        contTit: '品牌独家授权',
        cont: '超极探针C&P城市合伙人独家证书，快速提升合伙人地方影响力'
      },
      spot2: {
        topSrc: '/static/img/citypnr/spot/spot-icon2.png',
        bgSrc: '/static/img/citypnr/spot/spot-bg2.png',
        contTit: '业务系统培训',
        cont: '将提供专业的客服、运营团队，为合伙人的工作开展提供培训及业务支持'
      },
      spot3: {
        topSrc: '/static/img/citypnr/spot/spot-icon3.png',
        bgSrc: '/static/img/citypnr/spot/spot-bg3.png',
        contTit: '专业营销体系',
        cont: '超极探针统一定价、产品供给及售后，城市合伙人负责分销，获得利润'
      }
    }
  }
}
</script>

<style lang="less" scoped>
#pnr-spot {
  &>header {
    .mixin-center;
    .mixin-bg(@url: @citypnr-spot-header-url;
    @height: @citypnr-nestpic-bg-height);
    color: white;
    line-height: @citypnr-lh;

    section {
      display: inline-block;
      letter-spacing: .1em;

      h2 {
        font-size: @citypnr-head-fsize;
      }

      p {
        white-space: pre-line;
      }
    }
  }

  &>article {
    .mixin-content;

    footer {
      color: white;

      p {
        color: @common-color;
        white-space: pre-line;
        font-size: 1.4em;
        padding-bottom: 20px;
      }
    }
  }
}
</style>
