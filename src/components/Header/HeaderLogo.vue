<template>
<a href="#" ></a>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
a {
  font-size: 0;

  &::after {
    content: '';
    display: inline-block;
    background: url(../../assets/img/header/header-logo.svg) no-repeat center;
    width: 100px;
    height: 50px;
  }
}
</style>
