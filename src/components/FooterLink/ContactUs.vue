<template>
<div id="contact-us">
  <header></header>
  <main-model :tabs="joinus"></main-model>
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
      joinus: [{
        title: '联系我们',
        content: ` 产品咨询：010-57212947
        媒体合作：lin.leng@ifoodschain.com
        技术支持：service@ifoodschain.com`,
        type: 'article'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
#contact-us {
  header {
    .mixin-bg(@url: @footerlink-contactus-header-url;
    @height: @footerlink-titlepic-bg-height);
    .mixin-flexiable-bg(@url:@footerlink-contactus-header-url;@height:@flexible-footerlink-head);
  }
}
</style>
