<template>
  <div id="prodFeat">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <transition appear-active-class="animated slideInLeft" appear>
            <aside>
              <img src="/static/img/prodfeat/suprobeDesc.png">
            </aside>
          </transition>
        </div>
        <div class="col-md-6">
          <transition appear-active-class="animated slideInRight" appear>
            <article>
              <ul>
                <li>
                  <h3>即时性：</h3>
                  <p>随时随地，120s快速检测，满足消费者食品知情权</p>
                </li>
                <li>
                  <h3>智能性：</h3>
                  <p>微纳传感器，具有可靠性高、易于集成和实现智能化特点</p>
                </li>
                <li>
                  <h3>便携性：</h3>
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
#prodFeat{
  background:url(/static/img/prodfeat/background.jpg) no-repeat center/100% 100%;
  padding-top:70px;// header
  width: 100%; height: 100%;
  aside{
    padding: 15% 0;
    img{
      width: 60%;
    }
  }
  article{
    padding: 20% 5%;
    color: white;
    li{
      list-style-type: none;
      text-align: left;
      h3{
        line-height: 2em;
        letter-spacing: .1em;
      }
      p{
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
