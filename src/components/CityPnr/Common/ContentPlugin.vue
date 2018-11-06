<template>
<div>
  <figure>
    <img :src="data.topSrc">
  </figure>
  <img :src="data.bgSrc">
  <article>
    <h4 v-if="data.contTit">{{data.contTit}}</h4>
    <p>{{data.cont}}</p>
  </article>
</div>
</template>

<script>
export default {
  props: {
    data: Object
  }
}
</script>

<style lang="less" scoped>
@radius: 8px;

div {
  width: 100%;
  border: 1px solid #e1e1e1;
  border-radius: @radius;
  color: #7c7770;
  margin: 50px 0;
  img {
    max-width: 100%;
    border-radius: @radius @radius 0 0;
  }

  article {
    padding: 1em 1.2em 1.4em 1.2em;

    h4 {
      font-size: 1.2em;
      color: #58554f;
    }

    p {
      text-align: justify;
    }
  }

  figure {
    img {
      width: 80px;
      position: absolute;
      left: 50%;
      margin: -40px 0 0 -40px;
      border-radius: 100%;
      background: white;
    }
  }

  &:hover {
    box-shadow: 0 1px 5px 1px rgba(0, 0, 0, .5);
  }
}
</style>
