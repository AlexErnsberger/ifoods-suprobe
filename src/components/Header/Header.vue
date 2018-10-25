<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-md-4 text-left">
          <header-logo></header-logo>
        </div>
        <div class="col-md-8 text-right">
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
    HeaderLogo, HeaderNav
  }
}
</script>

<style lang="less" scoped>
header {
  position: fixed;
  width: 100%;
  min-height: 70px;
  padding: 10px;
  background: #f8f8f8;
  border-bottom: 1px solid #ccc;
  z-index: 2;

  .row>div {
    height: 50px;
  }
}

</style>
