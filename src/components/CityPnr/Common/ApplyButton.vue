<template>
<a href="http://cn.mikecrm.com/zF12G1w">
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
a {
  display: inline-block;
  background: @common-color linear-gradient(to right, @common-color-light, @common-color);
  width: 11em;
  margin: auto;
  padding: .7em;
  border-radius: .4em;
  color: white;
  font-size: 1.2em;
  text-decoration: none;

  &:hover {
    background: @common-color-light linear-gradient(hsla(0, 0%, 100%, .2), transparent);
    text-decoration: none;
  }

  &:active {
    text-decoration: none;
  }

  span {
    font-size: 1.2em;
    color: currentColor;
  }
}
</style>
