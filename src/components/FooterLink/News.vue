<template>
  <div id="news">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <short-view-model :news="laterlyNews"></short-view-model>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4" v-for="(news,index) in newsList" :key="index">
          <short-view-model :news="news"></short-view-model>
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
      laterlyNews: {
        img: '/static/img/news/news1.jpg',
        path: 'news1',
        href: '',
        title: '食品检测技术公链Ifoods Chain重磅推出终端应用产品超级探针',
        publishTime: '2017-07-07',
        abstract: `超级探针很好的解决了食品信息知情权、安全保障的问题。
        现在中国牛肉年进口量已经超过全球牛肉出口量的30%，市场规模即将过万亿。
        通过Ifoods Chain的开源、开放式的食品区块链生态平台，让大数据及人工智能带动食品技术的得以突破，从而在全球范围内构建完善的食品生态环境。`
      },
      newsList:[
        {
          img: '/static/img/news/news2.jpg',
          path: 'news2',
          href: '',
          title: '食安链超级探针系统为首都大学生运动会保驾护航',
          publishTime: '2017-07-07',
          abstract: `食安链通过运用结构化食品大数据+智能硬件+区块链技术直观判断食品品质，致力于成为全球食品领域的区块链标准制定者。
          本次食安链为大会提供的超级探针食品快检系统，具有便携、易操作等特点。使用时，通过与手机Dapp蓝牙连接的硬件超级探针对着食品轻轻一探，
          高精度传感设备将会检测出食品的各种结构化数据，并将这些数据与食安链在全球采集的结构化食品标准数据库进行对比，通过内置算法，
          最终60-120秒内告诉使用者食品品质如何。`
        },
        {
          img: '/static/img/news/news3.jpg',
          path: 'news3',
          href: '',
          title: '对话卡隆：我们用区块链技术解决食品安全问题的最后一公里',
          publishTime: '2017-07-07',
          abstract: `在食品安全生态建设中，数据的不可篡改是其中的关键。以往传统的存证证明并不严格，因为这些证据都是非常容易被伪造和销毁的。
          区块链技术恰巧能够解决这一问题。当食品公司将连接于物联网的标签贴到货物上，每批货物都分配一个唯一的标识号码，
          那么通过这些标识码可以记录产品的来源、加工信息、存储温度保质期及其他信息。记录存证的整个过程公开透明，
          无需任何第三方的介入便能证明该信息的真实性。`
        },
        {
          img: '/static/img/news/news4.jpg',
          path: 'news3',
          href: '',
          title: '卡隆|如何用区块链解决溯源问题',
          publishTime: '2017-07-07',
          abstract: `本次分享嘉宾为区块链应用资深从业者卡隆: 2015年进入链圈，区块链+农业实验室发起人；
          Ifood Chain创始人，中国教育网络电视台区块链顾问。以第一发明人身份拥有多项区块链相关发明专利及软件著作权; 金融科技创新奖评委.
          溯源是区块链的大场景之一。也是大家都看好的容易落地的应用场景`
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
#news{
  background: @home-bg-color;
  padding:70px 0; 
  .row>div{
    padding-top:50px;
  }
}
</style>
