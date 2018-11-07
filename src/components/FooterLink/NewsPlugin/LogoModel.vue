<template>
  <ul>
    <li>
      <a href="#">
        <i class="icon iconfont icon-tuitetwitter44"></i>
        <!-- <span>推特</span> -->
      </a>
    </li>
    <li>
      <a href="#">
        <i class="icon iconfont icon-facebookfacebook51"></i>
        <!-- <span>脸书</span> -->
      </a>
    </li>
    <li>
      <a href="#">
        <i class="icon iconfont icon-weibo"></i>
        <!-- <span>微博</span> -->
      </a>
    </li>
    <li>
      <a href="#">
        <i class="icon iconfont icon-weixin"></i>
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
    margin: 1em;
    @media only screen and (max-width:768px){
      display: inline-block;
    }
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
        color: white;
        i.icon-tuitetwitter44{
          background: #4baaf4;
          color: inherit;
        }
        i.icon-facebookfacebook51{
          background: #4862a3;
          color: inherit;
        }
        i.icon-weibo{
          background: #ec0117;
          color: inherit;
        }
        i.icon-weixin{
          background: #00b500;
          color: inherit;
        }
      }
    }
  }
}

</style>
