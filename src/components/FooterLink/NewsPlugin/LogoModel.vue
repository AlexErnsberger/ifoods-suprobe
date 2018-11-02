<template>
  <ul class="wow fadeInRight">
    <li>
      <a href="#">
        <i class="icon iconfont">&#xe9be;</i>
        <!-- <span>推特</span> -->
      </a>
    </li>
    <li>
      <a href="#">
        <i class="icon iconfont">&#xe600;</i>
        <!-- <span>脸书</span> -->
      </a>
    </li>
    <li>
      <a href="#">
        <i class="icon iconfont">&#xe60c;</i>
        <!-- <span>微博</span> -->
      </a>
    </li>
    <li>
      <a href="#">
        <i class="icon iconfont">&#xe60b;</i>
        <!-- <span>微信</span> -->
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
    text-align: left;
    margin-top: 2em;
    a{
      display: inline-block;
      font-size: 2em;
      text-decoration: none;
      color: @home-bg-color;
      transition: color .5s;
      i{
        display: inline-block;
        font-size: inherit;color: @home-fs-color;
        width: 2em;
        line-height: 2;text-align: center;
        border-radius: 100%;
        box-shadow: 0 8px 24px rgba(0, 0, 0, .12);
      }
      span{
        display: inline-block;
        padding: 0  2em;
      }
      &:hover{
        i{
          background: @home-fs-color;
          color: white;
        }
      }
    }
  }
}
</style>
