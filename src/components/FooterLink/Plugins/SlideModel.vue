<template>
<article>
  <ul>
    <li v-for="(list, index) in slide" :key="index">
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
  text-align: left;
  padding: 1em 3em 2em 3em;
  letter-spacing: .2em;
  background: @active-bg-color;

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
