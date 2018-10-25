<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <article>
            <h3>超级探针城市合伙人
              期待你的加入
            </h3>
            <apply-button>立即申请</apply-button>
          </article>
        </div>
      </div>
    </div>
  </footer>
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
  footer {
    height: 400px;
    background: url(/static/img/citypnr/bg-footer.png) no-repeat center/100% 100%;
    color:white;
    article{
      margin-top:100px;
      h3{
        font-size: @citypnr-head-fsize;
        white-space: pre-line;
        line-height: 2.4;
      }
    }
  }
</style>
