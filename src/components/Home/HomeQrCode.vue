<template>
<div id="qrCode">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <section class="wow zoomIn">
          <img src="/static/img/home/qrcode.jpg">
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
  background: @common-bg-color;
  padding: 20px 0;

  img{
    max-width: 100%;
    margin-right: 1em;
  }

  h3 {
    display: inline-block;
    font-size: 1.6em;
    vertical-align: middle;
    span {
      color: @common-color;
    }
  }
}
</style>
