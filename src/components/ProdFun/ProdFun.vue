<template>
  <div id="prodFunc">
    <div class="contain">
      <div class="row">
        <div class="col-md-7"></div>
        <div class="col-md-5">
          <transition appear-active-class="animated slideInRight" appear>
            <article>
              <h2>产品功能</h2>
              <p>超级探针是基于可信的食品数据模型，对待检测的食品进行数据采集，并可以上传食品检测，位置等脱敏数据的分布式设备，也是Ifoods Chain智能硬件实验室研制的针对肉类食品检测的成熟应用形式。</p>
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
#prodFunc{
  background:url(/static/img/prodfunc/background.jpg) no-repeat center/100% 100%;
  padding-top:70px;// header
  width: 100%; height: 100%;
  color:white;
  article{
    width: 55%;
    margin: auto;padding: 25% 0;
    h2{
      .mixin-h(@fs:2.4em;@fw:100;@lh:2);
      text-align: right;
    }
    p{
      .mixin-h(@fs:1.2em;@fw:100;@lh:2);
      letter-spacing: .1em;
      text-align: justify;
    }
  }
  
}
</style>
