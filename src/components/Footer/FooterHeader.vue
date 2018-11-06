<template>
<div class="container">
  <div class="row">
    <div class="col-xs-6 col-md-3">
      <router-link tag="a" to="salepolicy" class="wow fadeInDown">
          <i class="icon iconfont">&#xe669;</i>
          预约维修服务
        </router-link>
    </div>
    <div class="col-xs-6 col-md-3">
      <router-link tag="a" to="salepolicy" class="wow fadeInDown">
          <i class="icon iconfont">&#xe63a;</i>
          7天无理由退货
        </router-link>
    </div>
    <div class="col-xs-6 col-md-3">
      <router-link tag="a" to="salepolicy" class="wow fadeInDown">
          <i class="icon iconfont">&#xe802;</i>
          15天免费换货
        </router-link>
    </div>
    <div class="col-xs-6 col-md-3">
      <router-link tag="a" to="salepolicy" class="wow fadeInDown">
          <i class="icon iconfont">&#xe72d;</i>
          产品包邮服务
        </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.container {
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;

  .row {
    border-bottom: 1px solid @footer-color;
    padding: 1em 0;

    div+div {
      border-left: .05em solid @footer-color;
    }
  }

  a {
    display: block;
    font-size: 1.2em;
    color: @home-fs-color;
    text-decoration: none;

    i {
      font-size: 1.2em;
      vertical-align: -.1em;
    }

    &:hover {
      color: @common-color;
    }
  }
}
</style>
