<template>
<div id="pnr-footer">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <article class="wow fadeInUp">
          <h3>超级探针城市合伙人
            期待你的加入
          </h3>
          <apply-button>立即申请</apply-button>
        </article>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ApplyButton from '@/components/CityPnr/Common/ApplyButton.vue'
export default {
  components: {
    ApplyButton
  }
}
</script>

<style lang="less" scoped>
#pnr-footer {
  .mixin-bg(@url: url(/static/img/citypnr/bg-footer.jpg);
  @height: @common-bg-height);
  .mixin-center;
  color: white;

  article {
    h3 {
      font-size: @citypnr-head-fsize;
      white-space: pre-line;
      line-height: 2.4;
    }
  }
}
</style>
