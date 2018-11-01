<template>
<div id="footer-bottom">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <nav>
          <h4 class="wow fadeInLeft">友情合作</h4>
          <a target="_blank" href="http://www.buaa.edu.cn/" class="wow fadeInLeft">北京航空航天大学</a>
          <a target="_blank" href="http://www.fsfda.gov.cn/" class="wow fadeInLeft">佛山食药监局</a>
          <a target="_blank" href="http://www.ppsuc.edu.cn/" class="wow fadeInLeft">中国公安人民大学</a>
          <a target="_blank" href="http://www.cava.org.cn/" class="wow fadeInLeft">中国蔬菜流通协会</a>
        </nav>
      </div>
      <div class="col-md-6" >
        <span class="wow fadeInRight">北京食安链科技有限公司 京ICP备18052254号</span>
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
#footer-bottom {
  background: @home-bg-color;
  padding: 20px;

  h4,
  a,
  span {
    display: inline-block;
    color: @home-fs-color;
    font-size: .8em;
  }

  h4 {
    margin: 0;
  }

  a {
    color: @home-fs-color-lighter;
    text-decoration: none;

    &:hover {
      text-decoration: none;
      color: @common-color;
    }
  }
}
</style>
