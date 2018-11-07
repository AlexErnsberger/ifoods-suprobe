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
  text-align: left;
  padding: 1em 3em 2em 3em;
  letter-spacing: .2em;
  background: @active-bg-color;

  h4,
  p {
    line-height: 2;
    color: @home-fs-color;
  }

  p {
    white-space: pre-line;
  }
}
</style>
