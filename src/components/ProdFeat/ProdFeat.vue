<template>
<div id="prodFeat">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6">
        <aside class="wow fadeInDown">
          <img src="/static/img/model/superprode.png">
          <span>
              手拉抓握处
              呈肌理感
              抓握舒适
            </span>
          <span>
              探针底部模块分离
              便于清洗
            </span>
        </aside>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6">
        <article class="wow fadeInDown">
          <ul>
            <li>
              <h3><i class="icon iconfont">&#xe619;</i>即时</h3>
              <p>随时随地，60s快速检测，满足消费者食品知情权</p>
            </li>
            <li>
              <h3><i class="icon iconfont">&#xe74b;</i>智能</h3>
              <p>微纳传感器，具有可靠性高、易于集成和实现智能化特点</p>
            </li>
            <li>
              <h3><i class="icon iconfont">&#xe6e8;</i>便携</h3>
              <p>外观小巧、易于携带，你身边最精巧的智能检测硬件</p>
            </li>
          </ul>
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
@span-fs: 1.2em;
@img-width: 80%;

.mixin-span {
  content: '';
  display: inline-block;
  width: @span-fs*5;
  @media only screen and (max-width:768px) {
    width:@span-fs*3;
  }
  height: @span-fs/3;
  position: absolute;
  top: calc(50% + @span-fs/2);
  background: radial-gradient(@common-color 30%, transparent 0);
  background-size: @span-fs/3 @span-fs/3;
}

#prodFeat {
  .mixin-bg(@url: url(/static/img/prodfeat/background.jpg);@position:left;
  @height: @common-fullscreen-height);
  .mixin-center;

  aside {
    position: relative;
    color: white;

    img {
      max-width: 50%;
    }

    span {
      .mixin-h(@span-fs);
      letter-spacing: @span-fs / 6;
      display: inline-block;
      white-space: pre-line;
      position: absolute;
    }

    span:nth-of-type(1) {
      text-align: right;
      left: @img-width/7;
      top: @img-width/10;
      @media only screen and (max-width:768px) {
         left: @img-width/1000;
      }

      &::after {
        margin-left: @span-fs/1.5;
        .mixin-span;
      }
    }

    span:nth-of-type(2) {
      text-align: left;
      bottom: 0;
      right: @img-width/5;
      @media only screen and (max-width:768px) {
         right: @img-width/1000;
      }
      direction: rtl;

      &::after {
        margin-right: @span-fs/1.5;
        .mixin-span;
      }
    }
  }

  article {
    color: white;
    ul{
      padding: 0;
    }
    li {
      list-style-type: none;
      text-align: left;

      h3 {
        .mixin-h(@fs: 2em);
        letter-spacing: .1em;

        i {
          font-size: 1em;
          padding-right: .5em;
        }
      }

      p {
        .mixin-h(@fs: 1.2em);
        letter-spacing: .2em;
      }
    }
  }
}
</style>
