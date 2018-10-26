<template>
  <div id="suprobe">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <transition appear-active-class="animated slideInLeft" appear>
            <article>
              <h1>超级探针</h1>
              <p>由Ifood chain智能硬件实验室研发
                针对肉类质量检测的智能设备</p>
            </article>
          </transition>
        </div>
        <div class="col-md-6">
          <transition appear-active-class="animated slideInRight" appear>
            <aside>
              <img src="/static/img/model/superprode1.png">
            </aside>
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
#suprobe{
  background:url(/static/img/model/background.jpg) no-repeat center/100% 100%;
  padding-top:70px;// header
  width: 100%; height: 100%;
  article{
    padding: 50% 0 50% 10%;
    color: white;
    text-align: left;
    h1{
      .mixin-h(@fw:100);
      letter-spacing:  @home-head / 30;
    }
    p{
      .mixin-h(@fs:@home-subHeadCont;@fw:100;@lh:2);
      white-space: pre-line;
    }
  }
  aside{
    padding: 20% 20% 20% 0;
    img{
      width: 75%;
    }
  }
}

</style>
