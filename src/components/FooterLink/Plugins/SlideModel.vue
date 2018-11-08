<template>
<article>
  <ul>
    <li v-for="(list, index) in slide" :key="index" class="wow fadeInUp">
      <slide-content :list="list"></slide-content>
    </li>
  </ul>
</article>
</template>

<script>
import SlideContent from '@/components/FooterLink/Plugins/SlideContent.vue'
export default {
  components: {
    SlideContent
  },
  props: {
    slide: Array
  }
}
</script>

<style lang="less" scoped>
article {
  .footerlink-plugins-article;

  ul {
    margin-bottom: 0;
    padding: 0;
    li {
      list-style-type: none;
      margin-bottom: 10px;
    }
  }
}
</style>
