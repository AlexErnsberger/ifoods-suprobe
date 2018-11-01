<template>
<div id="suprobe">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <transition appear-active-class="animated slideInLeft" appear>
          <article>
            <h1>超级探针</h1>
            <p>由Ifood chain智能硬件实验室研发
              针对肉类质量检测的智能设备</p>
          </article>
        </transition>
      </div>
      <div class="col-md-6">
        <transition appear-active-class="animated slideInRight" appear>
          <aside>
            <img src="/static/img/model/superprode.png">
            </aside>
        </transition>
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
  .mixin-bg(@url: url(/static/img/model/background.jpg);
  @height: @common-fullscreen-height);
  .mixin-center;

  .row {
    .mixin-center;

    article {
      color: white;
      text-align: left;

      h1 {
        .mixin-h(@fw: 100);
        letter-spacing: @home-head / 30;
      }

      p {
        .mixin-h(@fs: @home-subHeadCont;
        @fw: 100;
        @lh: 2);
        white-space: pre-line;
      }
    }

    aside {
      img {
        width: 50%;
      }
    }
  }
}
</style>
