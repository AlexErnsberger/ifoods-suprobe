<template>
  <footer id="footer">
      <footer-header></footer-header>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-3"></div>
            <div class="col-md-3"></div>
            <div class="col-md-3"></div>
          </div>
        </div>
      </section>
      <footer></footer>
  </footer>
</template>

<script>
import FooterHeader from '@/components/Footer/FooterHeader.vue'
export default {
  components: {
    FooterHeader
  }
}
</script>

<style lang="less" scoped>
#footer{
  header{
    color:#999;
    border-bottom: 1px solid #999;
    padding: 10px 0;
    a{
      display: inline-block;
      font-size: 1.2em;
      color: currentColor;
      padding: .5em 0 .3em 0;
      i{
        font-size: 1.2em;
        vertical-align: -.1em;
      }
      &:hover{
        color:@common-color;
        border-bottom: 2px solid @common-color;
      }
    }
  }
}
</style>
