<template>
  <header>
    <div class="container">
      <div class="row">
          <div class="col-md-3">
            <a href="#">
              <i class="icon iconfont">&#xe669;</i>
              预约维修服务
            </a>
          </div>
          <div class="col-md-3">
            <a href="#">
              <i class="icon iconfont">&#xe63a;</i>
              7天无理由退货
            </a>
          </div>
          <div class="col-md-3">
            <a href="#">
              <i class="icon iconfont">&#xe802;</i>
              15天免费换货
            </a>
          </div>
          <div class="col-md-3">
            <a href="#">
              <i class="icon iconfont">&#xe72d;</i>
              产品包邮服务
            </a>
          </div>
        </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  header{
    color:#999;
    border-bottom: 1px solid #999;
    padding: 10px 0;
    text-align: center;
    a{
      display: inline-block;
      font-size: 1.2em;
      color: currentColor;
      padding: .5em 0 .3em 0;
      text-decoration: none;
      i{
        font-size: 1.2em;
        vertical-align: -.1em;
      }
      &:hover{
        color:@common-color;
        border-bottom: 2px solid @common-color;
      }
    }
    a::before{
    }
  }
</style>
