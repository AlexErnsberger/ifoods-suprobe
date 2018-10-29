<template>
  <div id="pnr-apply">
    <header>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <title-plugin :title="headTit" hasbg></title-plugin>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <section class="left">
              <p>提交区域营销计划，团队情况说明等，证实团队实力</p>
              <p>入选合伙人将获得超级探针提供的相关产品资料，并提供完整话术培训确认</p>
            </section>
          </div>
          <div class="col-md-6">
            <section class="right">
              <p>提交区域营销计划，团队情况说明等，证实团队实力</p>
              <p>入选合伙人将获得超级探针提供的相关产品资料，并提供完整话术培训确认</p>
            </section>
          </div>
        </div>
      </div>
    </header>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <title-plugin :title="progTit"></title-plugin>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <section>
              <header><h3>城市合伙人预选</h3><h3>9月</h3><h3></h3></header>
              <p>官方账号+媒体联动+城市宣讲
                ，启动合伙人招募计划</p>
            </section>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-md-offset-6">
            <section class="right">
              <header><h3>城市合伙人复审</h3><h3>10月</h3><h3></h3></header>
              <p>项目方根据申请人递交资质，筛选第
                  二轮沟通候选名单</p>
            </section>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <section>
              <header><h3>城市合伙人确认</h3><h3>11月</h3><h3></h3></header>
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
.progress-section{
  margin-top: -80px;
  color: white;
}
.progress-icon{
  display: block;
  width: 80px;
  background: linear-gradient(90deg, @common-color-light, @common-color);
  border-radius: 100%;
  color: currentColor;
  line-height: 80px;text-align: center;
  font-size: 1.4em;
  margin-bottom: 1em;
  cursor: pointer;
}
/**style*/
#pnr-apply{
  &>header{
    .mixin-bg(@url: url(/static/img/citypnr/bg-apply.png);@height:  @common-bg-height);
    .mixin-center;
    & section.left{
      text-align: right;
      .progress-section;
      p:nth-of-type(1)::before{
        content: '报名';
        margin-left: calc(100% - 80px);
        .progress-icon;
      }
      p:nth-of-type(2)::before{
        content: '培训';
        margin-left: calc(100% - 80px);
        .progress-icon;
      }
    }
    & section.right{
      text-align: left;
      .progress-section;
      p:nth-of-type(1)::before{
        content: '预审';
        .progress-icon;
      }
      p:nth-of-type(2)::before{
        content: '确认';
        .progress-icon;
      }
    }
  }
  &>section{
    .content;
    .row:not(:first-child){
      background:linear-gradient(to bottom,@common-color) no-repeat;
      background-size: 1px 100%;
      background-position: 50% 0;
    }
    section{
      color: white;
      text-align: right;
      margin-left: 2.5em;
      margin-right: 2.5em;
      h3{
        display: inline-block;
        font-size: 1.6em;
        background: @common-color;
        padding: .4em;
        margin-top: 0;
      }
      h3:nth-of-type(2){
        background: @common-color-light;
        margin-left: 0;
      }
      h3:nth-of-type(3){
        width: 2em;height: 1em;
        position: absolute;
        background: linear-gradient(to right,@common-color 50%,white 0);
        background-size: .1em 100%;
        background-clip: content-box;
        padding: .95em 0 0 0;
        vertical-align: top;
      }
      h3:nth-of-type(3)::after{
        content: '';
        position: absolute;
        width: .5em;height: .5em;
        background: @common-color;
        border-radius: 100%;
        margin-top: -.25em;
      }
      p{
        color:#666;
        white-space: pre-line;
      }
    }
    section.right{
      direction: rtl;
      text-align: left;
    }
  }
}
</style>
