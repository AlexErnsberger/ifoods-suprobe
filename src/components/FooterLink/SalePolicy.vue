<template>
<div id="sale-policy">
  <header></header>
  <main-model :tabs="salePolicy"></main-model>
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
      salePolicy: [{
        title: '退换货政策',
        content: `1 凡通过超极探针微店或超极探针官网购买本产品的用户，可在自签收次日起七日内享受无理由退货服务。退货时用户须出示有效购买凭证，并退回发票。用户须保证退货商品保持原有品质和功能、外观完好、商品本身及配件的商标和各种标识完整齐全，如有赠品需一并退回。如果商品出现人为损坏、包装箱缺失、零配件缺失的情况，不予办理退货。退货时产生的物流费用由用户承担。自收到退货商品之日起七日内向用户返还已支付的货款。退款方式与付款方式相同。具体到账日期可能会受银行、支付机构等因素影响。
                2 自用户签收次日起七日内，发生非人为损坏性能故障，经由超极探针售后服务中心检测确认后，为用户办理退货业务，退货时用户须出示有效购买凭证，并退回发票。如有赠品需一并退回。
                3 自用户签收次日起十五日内，发生非人为损坏性能故障，经由超极探针售后服务中心检测确认后，为用户办理换货业务，更换整套商品。换货后，商品本身三包期重新计算。`,
        type: 'article'
      },
      {
        title: '保修政策',
        content: `自用户签收次日起十五日后，发生非人为损坏性能故障，经由超极探针售后服务中心检测确认后，为用户办理维修业务。
              保修内容： 超极探针
              保修期限：1年`,
        type: 'article'
      },
      {
        title: '非保修条款',
        content: ` 以下情况不属于保修范围：
                1 超过三包有效期限；
                2 无保修卡、发票或保修卡与发票信息不符；
                3 人为原因造成的损坏；
                4 不可抗拒因素造成的损坏；
                5 未按《用户手册》的要求使用、保养及调整造成的任何损坏；
                6 超出正常使用条件，强行使用本产品造成的故障或损伤；`,
        type: 'article'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
#sale-policy {
  header {
    .mixin-bg(@url: @footerlink-salepolicy-header-url;@height: @footerlink-titlepic-bg-height);
    .mixin-flexiable-bg(@url:@footerlink-salepolicy-header-url;@height:@flexible-footerlink-head);
  }
}
</style>
