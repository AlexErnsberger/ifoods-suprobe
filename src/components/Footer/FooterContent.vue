<template>
<div class="container">
  <div class="row">
    <div class="col-xs-4 col-md-3">
      <nav>
        <h5 class="wow fadeInDown">关于我们</h5>
        <router-link tag="a" to="/aboutus" class="wow fadeInDown">了解我们</router-link>
        <router-link tag="a" to="/news" class="wow fadeInDown">媒体报道</router-link>
        <router-link tag="a" to="/joinus" class="wow fadeInDown">加入我们</router-link>
      </nav>
    </div>
    <div class="col-xs-4 col-md-3">
      <nav>
        <h5 class="wow fadeInDown">关注我们</h5>
        <a target="_blank" href="https://weibo.com/6544925985/profile?topnav=1&wvr=6" class="wow fadeInDown">新浪微博</a>
        <router-link tag="a" to="/aboutus" class="wow fadeInDown">官方微信</router-link>
        <router-link tag="a" to="/contactus" class="wow fadeInDown">联系我们</router-link>
      </nav>
    </div>
    <div class="col-xs-4 col-md-3">
      <nav>
        <h5 class="wow fadeInDown">服务支持</h5>
        <router-link tag="a" to="/faq" class="wow fadeInDown">常见问题</router-link>
        <router-link tag="a" to="/salepolicy" class="wow fadeInDown">售后政策</router-link>
        <router-link tag="a" to="/download" class="wow fadeInDown">相关下载</router-link>
      </nav>
    </div>
    <div class="col-xs-12 col-md-3">
      <address>
          <h4 class="wow fadeInDown">010-57212947</h4>
          <span class="wow fadeInDown">周一至周日:09:00-21:00</span>
          <span class="wow fadeInDown">(仅收市话费)</span>
        </address>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.row {
  padding: 10px 0;

  div:last-child {
    border-left: .05em solid @footer-color;
  }

  nav {
    text-align: center;

    h5 {
      color: @common-fs-color;
    }

    a {
      display: block;
      text-decoration: none;
      font-size: .9em;
      line-height: 2;
      color: #9b9b9b;

      &:hover {
        text-decoration: none;
        color: @common-color;
      }
    }
  }

  address {
    h4 {
      color: @common-color;
    }

    span {
      display: block;
      font-size: 1em;
      color: @common-fs-color;
    }
  }
}
</style>
