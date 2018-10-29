<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <nav>
          <h5>关于我们</h5>
          <router-link tag="a" to="/aboutus">了解我们</router-link>
          <router-link tag="a" to="/aboutus">媒体报道</router-link>
          <router-link tag="a" to="/aboutus">加入我们</router-link>
        </nav>
      </div>
      <div class="col-md-3">
        <nav>
          <h5>关注我们</h5>
          <a target="_blank" href="https://weibo.com/6544925985/profile?topnav=1&wvr=6">新浪微博</a>
          <router-link tag="a" to="/aboutus">官方微信</router-link>
          <router-link tag="a" to="/aboutus">联系我们</router-link>
        </nav>
      </div>
      <div class="col-md-3">
        <nav>
          <h5>关于我们</h5>
          <router-link tag="a" to="/aboutus">售后政策</router-link>
          <router-link tag="a" to="/aboutus">自助服务</router-link>
          <router-link tag="a" to="/aboutus">相关下载</router-link>
        </nav>
      </div>
      <div class="col-md-3">
        <address>
          <h4>010-57212947</h4>
          <span>周一至周日:09:00-21:00</span>
          <span>(仅收市话费)</span>
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
.row{
  padding: 10px 0;
  div:last-child{
    border-left: .05em solid @footer-color;
  }
  nav{
    text-align: center;
    h5{
      color:@home-fs-color;
    }
    a{
      display: block;
      text-decoration: none;
      font-size: .9em;
      line-height: 2;
      color:#9b9b9b;
      &:hover{
        text-decoration: none;
        color:@common-color;
      }
    }
  }
  address{
    h4{
      color:@common-color;
    }
    span{
      display: block;
      font-size: 1em;
      color:@home-fs-color;
    }
  }
}
</style>
