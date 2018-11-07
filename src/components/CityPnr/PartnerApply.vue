<template>
<div id="pnr-apply">
  <header>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <title-plugin :title="headTit" hasbg class="wow fadeInDown"></title-plugin>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6">
          <section class="left">
            <p class="wow fadeInDown">提交区域营销计划，团队情况说明等，证实团队实力</p>
            <p class="wow fadeInDown">入选合伙人将获得超级探针提供的相关产品资料，并提供完整话术培训确认</p>
          </section>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6">
          <section class="right">
            <p class="wow fadeInDown">根据合伙人招募要求，评审选出符合合伙人条件的候选人</p>
             <p class="wow fadeInDown">超级探针与合伙人备选人进行深入合作意向洽谈，并确认合作计划</p>
          </section>
        </div>
      </div>
    </div>
  </header>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <title-plugin :title="progTit" class="wow fadeInDown"></title-plugin>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6">
          <section class="wow fadeInDown">
            <header>
              <h3>城市合伙人预选</h3><h3>9月</h3>
              <h3></h3>
            </header>
            <p>官方账号+媒体联动+城市宣讲
              ，启动合伙人招募计划</p>
          </section>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6 col-xs-offset-6 col-sm-offset-6 col-md-offset-6">
          <section class="right wow fadeInDown">
            <header>
              <h3>城市合伙人复审</h3><h3>10月</h3>
              <h3></h3>
            </header>
            <p>项目方根据申请人递交资质，筛选第
              二轮沟通候选名单</p>
          </section>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6">
          <section class="wow fadeInDown">
            <header>
              <h3>城市合伙人确认</h3><h3>11月</h3>
              <h3></h3>
            </header>
            <p>城市合伙人名单确认，计划正式实施</p>
          </section>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import TitlePlugin from '@/components/CityPnr/Common/TitlePlugin.vue'
export default {
  components: {
    TitlePlugin
  },
  data () {
    return {
      headTit: {
        zh: '城市合伙人申请流程',
        en: 'UBRAN PARTNER APPLICATION PROGRESS'
      },
      progTit: {
        zh: '招募计划时间推进表',
        en: 'RECRUIMENT SCHEDULE PROMOTION SCHEDULE'
      }
    }
  }
}
</script>

<style lang="less" scoped>
/**mixin*/
.progress-section {
  color: white;
}

.progress-icon {
  display:block;
  width: 80px;
  background: linear-gradient(90deg, @common-color-light, @common-color);
  border-radius: 50%;
  color: currentColor;
  line-height: 80px;
  text-align: center;
  font-size: 1.4em;
  margin-bottom: 1em;
  cursor: pointer;
}

/**style*/
#pnr-apply {
  &>header {
    .mixin-bg(@url: @citypnr-apply-header-url;@height: @common-bg-height);
    .mixin-center;
    .mixin-flexiable-bg(@url: @citypnr-apply-header-url; @height: 70vh;@position: 30%);
    overflow: hidden;

    section.left {
      text-align: right;
      .progress-section;
      p:nth-of-type(1)::before {
        content: '报名';
        .progress-icon;
        margin-left: calc(100% - 80px);
      }

      p:nth-of-type(2)::before {
        content: '培训';
        .progress-icon;
        margin-left: calc(100% - 80px);
      }
    }

    section.right {
      text-align: left;
      .progress-section;

      p:nth-of-type(1)::before {
        content: '预审';
        .progress-icon;
      }

      p:nth-of-type(2)::before {
        content: '确认';
        .progress-icon;
      }
    }
  }

  &>section {
    @h3-fs:1.5em;
    .mixin-content;

    .row:nth-of-type(2), .row:nth-of-type(3), .row:nth-of-type(4) {
      background: linear-gradient(to bottom, @common-color 0%,  @common-color 100%);
      background-repeat: no-repeat;
      background-size: 1px 100%;
      background-position: 50% 0;
    }

    section {
      color: white;
      text-align: right;
      margin-left: @h3-fs*1.67;
      margin-right: @h3-fs*1.67;
      @media only screen and (max-width:768px) {
        margin-left: 0;
        margin-right: 0;
      }

      h3 {
        display: inline-block;
        font-size: @h3-fs;
        background: @common-color;
        padding: @h3-fs/3;
        margin-top: 0;
      }

      h3:nth-of-type(2) {
        background: @common-color-light;
        margin-left: 0;
      }

      h3:nth-of-type(3) {
        width: @h3-fs*1.4;
        height: @h3-fs*0.67;
        position: absolute;
        background: linear-gradient(to right, @common-color 50%, white 0);
        background-size: @h3-fs/15 100%;
        background-clip: content-box;
        padding: 0;
        padding-top: @h3-fs*0.63;
        vertical-align: top;
        @media only screen and (max-width:768px) {
          width: @h3-fs/3;
        }
      }

      h3:nth-of-type(3)::after {
        content: '';
        position: absolute;
        width: @h3-fs/3;
        height: @h3-fs/3;
        background: @common-color;
        border-radius: 100%;
        margin-top: -@h3-fs/6;
      }

      p {
        color: #666;
        white-space: pre-line;
      }
    }

    section.right {
      direction: rtl;
      text-align: left;
    }
  }
}
</style>
