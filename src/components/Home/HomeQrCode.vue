<template>
<div id="qrCode">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <section class="wow zoomIn">
          <h3>扫码关注【<span>超级探针</span>】微信公众号</h3>
        </section>
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
#qrCode {
  background: @home-bg-color;
  padding: 20px 0;

  h3 {
    display: inline-block;
    font-size: 1.6em;

    span {
      color: @common-color;
    }

    &::before {
      content: '';
      display: inline-block;
      background: url(/static/img/home/qrcode.jpg) no-repeat center/100% 100%;
      vertical-align: middle;
      margin-right: 1em;
      width: 4em;
      height: 4em;
    }
  }
}
</style>
