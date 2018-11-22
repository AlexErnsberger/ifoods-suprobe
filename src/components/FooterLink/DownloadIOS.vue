<template>
<div id="ios-download">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="ios-download-header">
          <img src="../../assets/img/logo.png">
          <h2>超级探针APP</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="ios-download-content">
          <img src="/static/img/home/download-qrcode.png" alt="">
          <a @click="iosDownload">
              <i class="icon iconfont">&#xe68c;</i>
              <span>立即安装</span>
            </a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    iosDownload () {
      window.location.href = ''
    }
  }
}
</script>

<style lang="less" scoped>
#ios-download {
  .mixin-bg(@url: @footerlink-download-bg-url;
  @height: @common-fullscreenpic-height);
  .mixin-center;

  img {
    max-width: 100%;
  }

  .ios-download-header {
    h2 {
      font-size: 2.4rem;
    }

    img {
      width: 7rem;
      border-radius: .8rem;
    }
  }

  .ios-download-content {
    display: flex;
    flex-direction: column;
    text-justify: center;
    align-items: center;

    img {
      width: 19rem;
      margin-top: 3rem;
    }

    a {
      width: 15rem;
      line-height: 2rem;
      border-radius: .8rem;
      text-decoration: none;
      color: @common-fs-color;
      cursor: pointer;
      padding: .8rem 0;
      border: .05rem solid @common-fs-color;
      border-radius: .5rem;
      margin-top: 1rem;
    }
  }
}
</style>
