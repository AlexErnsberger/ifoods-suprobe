<template>
<div id="prodFunc">
  <div class="container">
    <div class="row">
      <div class="cos-xs-12 cos-sm-12 col-md-5 col-md-offset-7">
        <article class="wow fadeInDown">
          <h2>产品功能</h2>
          <p>超级探针是基于可信的食品数据模型，对待检测的食品进行数据采集，并可以上传食品检测，位置等脱敏数据的分布式设备，也是Ifoods Chain智能硬件实验室研制的针对肉类食品检测的成熟应用形式。</p>
        </article>
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
#prodFunc {
  .mixin-bg(@url: @prodFun-bg-url;@position: left;@height: @common-fullscreen-height);
  .mixin-center;

  article {
    color: white;
    margin: auto;

    h2 {
      .mixin-h(@fs: 2.4em;
      @lh: 2);
      text-align: center;
    }

    p {
      .mixin-h(@fs: 1.2em;
      @lh: 2);
      letter-spacing: .1em;
      text-align: justify;
    }
  }
}
</style>
