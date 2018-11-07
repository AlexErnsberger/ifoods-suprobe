<template>
<header></header>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
header {
  @citypnr-head-url:url(/static/img/citypnr/bg-header.jpg);
  .mixin-bg(@url:@citypnr-head-url;@height:@common-bg-height);
  .mixin-flexiable-bg(@url:@citypnr-head-url;@height:35vh);
}
</style>
