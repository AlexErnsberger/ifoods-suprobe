<template>
<div id="download">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <aside class="wow fadeInDown">
          <img src="/static/img/home/app.png">
        </aside>
      </div>
      <div class="col-md-6">
        <article>
          <h2 class="wow fadeInDown">超级探针APP下载</h2>
          <section class="wow fadeInLeft">
            <img src="/static/img/home/download-qrcode.png" >
            <a href="#">
                <i class="icon iconfont">&#xe68c;</i>
                <span>IOS(敬请期待)</span>
              </a>
          </section>
          <section class="wow fadeInRight">
            <img src="/static/img/home/download-qrcode.png" >
            <a href="#" >
                <i class="icon iconfont">&#xe68d;</i>
                <span>Andriod(敬请期待)</span>
              </a>
          </section>
        </article>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
#download {
  .mixin-bg(@url: url(/static/img/home/download.png);
  @height: @common-fullscreen-height);
  .mixin-center;

  .row {
    .mixin-center;

    aside {
      img {
        width: 50%;
      }
    }

    article {
      color: @home-fs-color;

      h2 {
        color: currentColor;
      }

      section {
        display: inline-block;
        width: 12em;
        padding: 10px;

        img {
          border-radius: 1em;
          margin: 0 0 2em 0;
        }

        a {
          display: block;
          text-decoration: none;
          font-size: 1em;
          color: currentColor;
          padding: .8em 0;
          border: .05em solid currentColor;
          border-radius: .5em;

          &:hover {
            text-decoration: none;
            background: rgba(255, 255, 255, .2);
          }
        }
      }
    }
  }
}
</style>
