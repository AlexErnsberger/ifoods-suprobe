<template>
<div id="home-news">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-4" v-for="(news, index) in newsList" :key="index">
        <short-view-model :news="news" style="height:400px" class="wow flipInY"></short-view-model>
      </div>
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
        img: '/static/img/citypnr/bg-header.jpg',
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
        title: 'Ifoods Chain成为中国蔬菜流通协会战略合作伙伴',
        publishTime: '2018-07-19',
        abstract: `近年来，我国的食品安全和区块链技术都是处于高增长态势，将食品安全纳入健康中国建设，
        多次强调要实施食品安全战略，让人民群众吃的放心。人民日报、工信部等则相继出文指出，
        区块链将成为社会发展动力的主轴，且区块链的发展速度将要提升。`
      },
      {
        img: '/static/img/news/news5/news5.png',
        path: '',
        href: 'https://mp.weixin.qq.com/s/WEWERrEEJkp0VokjWt1zCw',
        title: '中国国际肉类展||食安链专家携超级探针参与"最受关注肉类好食材"品评活动',
        publishTime: '2018-09-22',
        abstract: `9月20日至22日，第十六届中国国际肉类工业展览会在京盛大开幕，来自近30个国家和地区的千余家企业参展，
        共同探讨产品品质提升和企业科技创新方法。展会期间，中国肉类协会联合北京市餐饮行业协会特别主办“携手好食材•烹饪美食秀”活动，
        参评产品以企业在产业周现场展示及推广的产品为主，食安链专家携超级探针参与"最受关注肉类好食材"品评活动。`
      }]
    }
  }
}
</script>

<style lang="less">
#home-news {
  padding: 30px 0;
}
</style>
