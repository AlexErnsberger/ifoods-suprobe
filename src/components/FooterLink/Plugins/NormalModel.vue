<template>
<article class="wow fadeInUp">
  <h4>{{title}}</h4>
  <p>{{content}}</p>
</article>
</template>

<script>
export default {
  props: {
    title: String,
    content: String
  }
}
</script>

<style lang="less" scoped>
article {
  .footerlink-plugins-article;

  h4,
  p {
    line-height: 2;
    color: @common-fs-color;
  }

  p {
    white-space: pre-line;
  }
}
</style>
