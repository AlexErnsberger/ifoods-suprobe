<template>
  <div id="prodFeat">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <transition appear-active-class="animated slideInLeft" appear>
            <aside>
              <img src="/static/img/model/superprode1.png">
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
          </transition>
        </div>
        <div class="col-md-6">
          <transition appear-active-class="animated slideInRight" appear>
            <article>
              <ul>
                <li>
                  <h3>即时</h3>
                  <p>随时随地，60s快速检测，满足消费者食品知情权</p>
                </li>
                <li>
                  <h3>智能</h3>
                  <p>微纳传感器，具有可靠性高、易于集成和实现智能化特点</p>
                </li>
                <li>
                  <h3>便携</h3>
                  <p>外观小巧、易于携带，你身边最精巧的智能检测硬件</p>
                </li>
              </ul>
            </article>
          </transition>
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
@span-fs:1.2em;
.mixin-span{
  content: '';
  display: inline-block;
  width: @span-fs*5;height:@span-fs/3;
  position: absolute;
  top:calc(50% + @span-fs/2);
  background: radial-gradient(@common-color  30%,transparent 0);
  background-size: @span-fs/3 @span-fs/3;
}
#prodFeat{
  background:url(/static/img/prodfeat/background.jpg) no-repeat center/100% 100%;
  padding-top:70px;// header
  width: 100%; height: 100%;
  aside{
    padding: 20% 20% 20% 0;
    position: relative;
    color:white;
    img{
      width: 75%;
    }
    span{
      .mixin-h(@span-fs);
      letter-spacing: @span-fs / 6;
      display: inline-block;
      white-space: pre-line;
      position: absolute;
    }
    span:nth-of-type(1) {
      text-align: right;
      left: 0;top:30%;
      &::after{
        margin-left: @span-fs/1.5;
        .mixin-span;
      }
    }
    span:nth-of-type(2) {
      text-align: left;
      bottom: 25%;right: 30%;
      direction: rtl;
      &::after{
        margin-right: @span-fs/1.5;
        .mixin-span;
      }
    }
  }
  article{
    padding: 30% 0;
    color: white;
    li{
      list-style-type: none;
      text-align: left;
      h3{
        .mixin-h(@fs:2em;@lh:2);
        letter-spacing: .1em;
      }
      p{
        .mixin-h(@fs:1.2em;@lh:2);
        letter-spacing: .2em;
      }
      h3:before{
        content: '';
        display: inline-block;
        width: 1em;height: 1em;
        vertical-align: -.1em;
        margin-right: .5em;
      }
      &:nth-of-type(1){
        h3:before{
          background: url(/static/img/prodfeat/icon-immediately.png) no-repeat center/100% 100%;
        }
      }
      &:nth-of-type(2){
        h3:before{
          background: url(/static/img/prodfeat/icon-portable.png) no-repeat center/100% 100%;
        }
      }
      &:nth-of-type(3){
        h3:before{
          background: url(/static/img/prodfeat/icon-intelligence.png) no-repeat center/100% 100%;
          vertical-align: -.2em;
        }
      }
    }
  }
}
</style>
