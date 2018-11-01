<template>
  <div id="about-us">
    <header></header>
    <main-model :tabs="aboutUs"></main-model>
  </div>
</template>

<script>
import MainModel from '@/components/FooterLink/Plugins/MainModel.vue'
export default {
  components: {
    MainModel
  },
  data () {
    return {
      aboutUs:[
        {
          title:'食安科技',
          content:` 食安科技，是一家基于区块链、大数据分析、高精度传感器开发技术为食品行业开发研制终端智能检测硬件的新型高科技研发企业。
							      主要针对目前食品行业的快检领域提供快速、便捷、低成本且数据真实、无法篡改的食品检测解决方案，并研制出智能硬件产品——超级探针检测系统。
                    研发团队包含区块链底层开发人员、大数据分析人员、传感器研发人员和食品数据采集分析人员，并建有肉类食品数据采集实验室和高精度传感器开发实验室。`,
          type:'article'
        },
        {
          title:'公司愿景',
          content:`为消费者提供快速检测食品安全质量数据的手段
                   保护食品检测专家的权益，推动食品安全事业的发展。`,
          type:'article'
        },
        {
          title:'发展历程',
          content:[
            {
              year:'2018',
              schedule:[
                {
                  month:'09月',
                  work:'发布超级探针智能硬件DEMO版'
                },
                {
                  month:'08月',
                  work:'发布超级探针DAPP DEMO版'
                },
                {
                  month:'06月',
                  work:'发布超级探针谍照'
                },
                {
                  month:'04月',
                  work:'完成超级探针TOP100招募'
                },
                {
                  month:'03月',
                  work:'下旬大数据分析实验室完成全球900组牛肉数据解析'
                },
                {
                  month:'02月',
                  work:'大数据分析实验室采集全球牛肉数据'
                }
              ]
            },
            {
              year:'2017',
              schedule:[
                {
                  month:'11月',
                  work:'食安科技智能硬件实验室成立'
                }
              ]
            }
          ],
          type:'progress'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
header{
  .mixin-bg(@url: url(/static/img/home/aboutus.jpg);@height:@common-subpage-head);
}
</style>
