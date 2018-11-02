<template>
  <ul>
    <li>
      <a href="#">
        <i class="icon iconfont">&#xe9be;</i>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    icons: Array
  }
}
</script>

<style lang="less" scoped>
ul{
  padding: 0;
  li{
    list-style-type: none;
    a{
      display: block;
      text-decoration: none;
      color: @home-fs-color;
      text-align: left;
      i{
        display: inline-block;
        font-size: 2em;
        width: 2em;
        line-height: 2;text-align: center;
        border-radius: 100%;
        box-shadow: 0 8px 24px rgba(0, 0, 0, .12);
      }
    }
  }
}
</style>
