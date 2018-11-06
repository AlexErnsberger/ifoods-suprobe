<template>
<header id="suprobe-header">
  <div class="container">
    <div class="row">
      <div class="col-xs-2 col-sm-2 col-md-2 text-left">
        <header-logo></header-logo>
      </div>
      <div class="col-xs-10 col-sm-10 col-md-10 text-right">
        <header-nav></header-nav>
      </div>
    </div>
  </div>
</header>
</template>

<script>
import HeaderLogo from '@/components/Header/HeaderLogo.vue'
import HeaderNav from '@/components/Header/HeaderNav.vue'
export default {
  components: {
    HeaderLogo,
    HeaderNav
  }
}
</script>

<style lang="less" scoped>
header {
  position: fixed;
  width: 100%;
  min-height: 70px;
  padding: 10px;
  background: @header-bg-color;
  z-index: 2;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);

  .row>div {
    height: 50px;
  }
}
</style>
