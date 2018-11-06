<template>
<article>
  <slot></slot>
</article>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
article {
  padding: 5em 20em;
  @media only screen and (max-width:768px){
    padding:0;
  }
  h3,
  h4,
  h6,
  p {
    letter-spacing: .25em;
  }

  h6 {
    color: @home-fs-color-lighter;
    text-align: right;
  }

  h3 {
    color: @home-fs-color-deeper;
    line-height: 3;
  }

  h4,
  p {
    color: @home-fs-color;
    line-height: 2;
  }

  p {
    text-align: justify;
    white-space: pre-line;
  }

  img {
    max-width: 100%;
    margin: 10px 0;
  }
}
</style>
