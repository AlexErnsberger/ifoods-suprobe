<template>
<div class="container" id="suprobe-news">
  <div class="row">
    <div class="col-md-4" v-for="(news, index) in newsList" :key="index">
      <short-view-model :news="news" style="height:400px" class="wow flipInY"></short-view-model>
    </div>
  </div>
</div>
</template>

<script>
import ShortViewModel from '@/components/FooterLink/NewsPlugin/ShortViewModel.vue'
export default {
  components: {
    ShortViewModel
  },
  data () {
    return {
      newsList: [{
        img: '/static/img/citypnr/bg-header.png',
        path: 'citypnr',
        href: '',
        title: '超级探针城市合伙人招募中',
        publishTime: '1小时前',
        abstract: ` 超级探针计划在全国招募城市合伙人基于食品安全质量检测生态建立利润分享机制
                    奖励在项目参与、硬件推广、理念传播上有突出表现的超级探针持有者`
      },
      {
        img: '/static/img/news/news1/news1-6.jpg',
        path: '',
        href: 'https://mp.weixin.qq.com/s/C4dZVv7SP04pGHSU581WvQ',
        title: 'Ifoods Chain成为中国蔬菜流通协会战略合作伙伴 用区块链提升食品信任',
        publishTime: '2018-07-19',
        abstract: `近年来，我国的食品安全和区块链技术都是处于高增长态势，将食品安全纳入健康中国建设，
        多次强调要实施食品安全战略，让人民群众吃的放心。人民日报、工信部等则相继出文指出，
        区块链将成为社会发展动力的主轴，且区块链的发展速度将要提升。`
      },
      {
        img: '/static/img/news/news3/news3-1.jpeg',
        path: 'news3',
        href: '',
        title: '对话卡隆：我们用区块链技术解决食品安全问题的最后一公里',
        publishTime: '2017-07-07',
        abstract: `在食品安全生态建设中，数据的不可篡改是其中的关键。以往传统的存证证明并不严格，因为这些证据都是非常容易被伪造和销毁的。
        区块链技术恰巧能够解决这一问题。当食品公司将连接于物联网的标签贴到货物上，每批货物都分配一个唯一的标识号码，
        那么通过这些标识码可以记录产品的来源、加工信息、存储温度保质期及其他信息。记录存证的整个过程公开透明，
        无需任何第三方的介入便能证明该信息的真实性。`
      }]
    }
  }
}
</script>

<style lang="less">
#suprobe-news {
  padding: 50px 0;
  // a{
  //   display: inline-block;
  //   position: relative;
  //   padding: 10px;
  //   border-radius: 20px;
  //   box-shadow: 0 1px 5px 0 rgba(0,0,0,.2);
  //   margin: 10px;
  //   img{
  //     float: left;
  //   }
  //   h3{
  //     float: right;
  //     color: @home-fs-color;
  //     font-size: 1.2em;
  //     text-align: left;
  //     width: 60%;
  //   }
  // }
  // a:hover{
  //   text-decoration: none;
  //   box-shadow: 0 1px 5px 1px rgba(0,0,0,.5);
  // }
}
</style>
