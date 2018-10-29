<template>
  <div id="home-pic">
    <section v-for="(desc,index) in picDesc" :key="index">
      <pic-content :desc="desc"></pic-content>
    </section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
  </div>
</template>

<script>
import PicContent from '@/components/Home/Common/PicContent.vue'
export default {
  components: {
    PicContent
  },
  data () {
    return {
      picDesc: [
        {
          name: '洋洋妈妈',
          age: '（27岁）',
          post: '',
          info: '我家宝宝现在9个月啦，正是长身体的时候，决定尝试添加牛肉松作为辅食，自从有了超级探针，可以更放心的购买食材，给宝宝最健康的饮食。',
          right: true
        },
        {
          name: '李哥',
          age: '（32岁）',
          post: '火锅店老板',
          info: '我们的餐厅不仅有网红店的人气，也有百年老店的口味，每天用餐的客流量非常大，以前供货的检测手续复杂，用了超级探针方便多了，能节省不少成本。',
          right: true
        },
        {
          name: '林博士',
          age: '（70岁）',
          post: '',
          info: '从美国到中国，我从事牛肉行业已经40余年，很高兴看到越来越多的人了解牛肉的营养，同时，我和团队还想让大家吃的健康，用最简单的方法了解食品的品质。',
          right: false
        },
        {
          name: '张经理',
          age: '（38岁）',
          post: '牛肉企业负责人',
          info: '食品企业最重视的是品牌声誉，从养殖到餐桌，我们会层层检验、道道把关，希望从这里运出的每一块牛肉都能让消费者放心。',
          right: true
        },
        {
          name: '张阿姨',
          age: '（57岁）',
          post: '',
          info: '孩子每天早出晚归，上班特别忙根本没时间好好吃饭，为了让他们补足必须的营养，每天我会送餐到公司楼下，用心挑选的食材，才能吃的放心。',
          right: true
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
#home-pic{
  section{
    .mixin-center;
  }
  section:nth-of-type(1){
    .mixin-bg(@url: url(/static/img/home/pic/eg1.jpg);@height:@home-fullscreen-pic);
  }
  section:nth-of-type(2){
    .mixin-bg(@url: url(/static/img/home/pic/eg2.jpg);@height:@home-fullscreen-pic);
  }
  section:nth-of-type(3){
    .mixin-bg(@url: url(/static/img/home/pic/eg3.jpg);@height:@home-fullscreen-pic);
  }
  section:nth-of-type(4){
    .mixin-bg(@url: url(/static/img/home/pic/eg4.jpg);@height:@home-fullscreen-pic);
  }
  section:nth-of-type(5){
    .mixin-bg(@url: url(/static/img/home/pic/eg5.jpg);@height:@home-fullscreen-pic);
  }
}
</style>
