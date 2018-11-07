<template>
<div id="suprobe">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6">
        <article class="wow fadeInDown">
          <h1>超级探针</h1>
          <p>由Ifoods chain智能硬件实验室研发
            针对肉类质量检测的智能设备</p>
        </article>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6">
        <aside class="wow fadeInDown">
          <img src="/static/img/model/superprode.png">
        </aside>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
#suprobe {
  .mixin-bg(@url:  @model-bg-url;@position:left;
  @height: @common-fullscreen-height);
  .mixin-center;

  .row {
    article {
      color: white;
      text-align: center;
      margin: 20% 0;

      h1 {
        .mixin-h;
        letter-spacing: @home-head / 30;
      }

      p {
        .mixin-h(@fs: @home-subHeadCont;
        @lh: 2);
        white-space: pre-line;
      }
    }

    aside {
      img {
        max-width: 100%;
      }
    }
  }
}
</style>
