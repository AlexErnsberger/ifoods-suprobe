<template>
<div id="join-us">
  <header></header>
  <div class="container">
    <article-model>
      <h3>加入食安链科技 探索更有趣的世界</h3>
      <h4>触碰全球最前沿的科技</h4>
      <p>作为第四次工业革命的成果，区块链这项颠覆性技术，正在悄悄改变着世界。令我们振奋的，不仅是你对这个领域的满腔热情，还有将与你共事的团队成员。区块链资深从业者、斯坦福密码学大牛、北京航天航空大学的硬件科学家、有着40余年从业经验的食品专家，将会和你一起并肩作战。</p>
      <h4>聚焦最创新的产品应用</h4>
      <p>民，以食为天，让国人吃的更健康、更放心，是我们将区块链技术应用于食品检测的初衷。透过超级探针，你可以深入了解食品产业链的每一个环节，用手中的产品服务于企业、消费者，感受着世界因区块链技术而美好。</p>
      <h4>感知最活力的团队氛围</h4>
      <p>独树难成林，更重要的是，我们珍视团队的价值，尊重每一个创意和想法。在这里的每个人都可以畅所欲言，只要你愿意努力并付诸实践，你将在这个自由空间实现自己的小目标。</p>
      <h4>探索未来的同行者，食安链欢迎你！</h4>
    </article-model>
  </div>
</div>
</template>

<script>
import ArticleModel from '@/components/FooterLink/NewsPlugin/ArticleModel.vue'
export default {
  components: {
    ArticleModel
  }
}
</script>

<style lang="less" scoped>
#join-us {
  @footerlink-joinus-head-url:url(/static/img/home/joinus.jpg);
  header {
    .mixin-bg(@url:@footerlink-joinus-head-url;@height: @common-subpage-head);
    .mixin-flexiable-bg(@url:@footerlink-joinus-head-url;@height:@flexible-footerlink-head);
  }
}
</style>
