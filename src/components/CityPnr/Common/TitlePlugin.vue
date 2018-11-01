<template>
<header :class="{'hasbg':hasbg}">
  <h2>{{title.zh}}</h2>
  <p>{{title.en}}</p>
</header>
</template>

<script>
export default {
  props: {
    title: Object,
    hasbg: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
header {
  display: inline-block;
  max-width: 34em;
  color: @common-color;
  margin: auto;
  margin-bottom: 80px;

  h2 {
    display: inline-block;
    font-size: @citypnr-head-fsize;
    max-width: 12em;
    padding: 0 1em;
    margin: 0 auto;
    background: white;
    position: relative;
  }

  p {
    margin-top: -@citypnr-head-fsize/2;
    color: #999;
    font-size: 1.2em;
    border: .1em solid @common-color;
    padding: 1em;
    padding-bottom: 0;
  }
}

.hasbg {
  h2 {
    background: linear-gradient(to top, #111b2a, #101b29);
    color: #bce6d7;
  }

  p {
    color: white;
  }
}
</style>
