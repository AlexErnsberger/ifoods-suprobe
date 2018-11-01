<template>
<div class="container" id="pnr-desc">
  <section>
    <div class="row">
      <div class="col-md-12">
        <h2 class="wow fadeInUp">什么是超级探针城市合伙人？</h2>
        <p class="wow fadeInUp">
          超级探针计划在全国招募城市合伙人
          基于食品安全质量检测生态建立利润分享机制
          奖励在<span>项目参与、硬件推广、理念传播</span>上有突出表现的超级探针持有者
        </p>
      </div>
    </div>
  </section>
  <section>
    <div class="row">
      <div class="col-md-12">
        <!-- <img src="/static/img/citypnr/desc-view.png"> -->
        <title-plugin :title="descTitle" class="wow fadeInDown"></title-plugin>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <content-plugin :data="descOne" class="wow fadeInUp"></content-plugin>
      </div>
      <div class="col-md-4">
        <content-plugin :data="descTwo" class="wow fadeInUp"></content-plugin>
      </div>
      <div class="col-md-4">
        <content-plugin :data="descThree" class="wow fadeInUp"></content-plugin>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import TitlePlugin from '@/components/CityPnr/Common/TitlePlugin.vue'
import ContentPlugin from '@/components/CityPnr/Common/ContentPlugin.vue'
export default {
  components: {
    TitlePlugin,
    ContentPlugin
  },
  data () {
    return {
      descTitle: {
        zh: '当前场景',
        en: 'MARKET PROSPECT'
      },
      descOne: {
        topSrc: '/static/img/citypnr/desc/desc-icon1.png',
        bgSrc: '/static/img/citypnr/desc/desc-bg1.png',
        cont: '受消费升级影响，国务院先后印发《“十三五”国家食品安全规划》，将食品安全纳入健康中国建设，多次强调要实施食品安全战略，让人民群众吃的放心。'
      },
      descTwo: {
        topSrc: '/static/img/citypnr/desc/desc-icon2.png',
        bgSrc: '/static/img/citypnr/desc/desc-bg2.png',
        cont: '人民日报、工信部等则相继出文指出，区块链将成为社会发展动力的主轴，且区块链的发展速度将得到快速提升。'
      },
      descThree: {
        topSrc: '/static/img/citypnr/desc/desc-icon3.png',
        bgSrc: '/static/img/citypnr/desc/desc-bg3.png',
        cont: '超级探针等食品质量检测智能硬件，可帮助消费者打破食品消费的知情权盲区，重建食品消费习惯，让消费者成为食品品质标准制定者。'
      }
    }
  }
}
</script>

<style lang="less" scoped>
#pnr-desc {
  .content;

  section:nth-of-type(1) {
    line-height: 2.4;

    h2 {
      font-size: @citypnr-head-fsize;
      color: @common-color;
    }

    p {
      white-space: pre-line;
      margin-top: -1.4em;

      span {
        color: @common-color;
      }
    }
  }

  section+section {
    padding-top: 20px;
  }
}
</style>
