<template>
  <a href="#">
    <span>
      <slot></slot>
    </span>
  </a>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  a{
    display: inline-block;
    background: @common-color linear-gradient(to right,@common-color-light,@common-color);
    width: 11em;
    margin: auto;padding: .7em;
    border-radius: .4em;
    color: currentColor;
    font-size: 1.2em;
    text-decoration: none;
    &:hover{
      background: @common-color-light linear-gradient(hsla(0,0%,100%,.2),transparent);
      text-decoration: none;
    }
    span{
      font-size: 1.2em;
    }
  }
</style>
