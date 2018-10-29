<template>
  <div class="container" id="suprobe-news">
    <div class="row">
      <div class="col-md-4">
        <a href="#">
          <img src="/static/img/news/ifoodslogo.png">
          <h3>超级探针城市合伙人招募中</h3>
        </a>
      </div>
      <div class="col-md-4">
        <a href="#">
          <img src="/static/img/news/ifoodslogo.png">
          <h3>超级探针与中国人民公安大学达成战略合作</h3>
        </a>
      </div>
      <div class="col-md-4">
        <a href="#">
          <img src="/static/img/news/ifoodslogo.png">
          <h3>超级探针与中国蔬菜流通协会达成战略合作</h3>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scpoed>
#suprobe-news{
  a{
    display: inline-block;
    position: relative;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0 1px 5px 0 rgba(0,0,0,.2);
    margin: 10px;
    img{
      float: left;
    }
    h3{
      float: right;
      color: @home-fs-color;
      font-size: 1.2em;
      text-align: left;
      width: 60%;
    }
  }
  a:hover{
    text-decoration: none;
    box-shadow: 0 1px 5px 1px rgba(0,0,0,.5);
  }
}
</style>
