<template>
<ul>
  <li class="ani"  swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
    <h1 >{{data.title}}</h1>
  </li>
  <li v-for="(desc,index) in data.desc" :key="index" class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
    <p>{{desc}}</p>
  </li>
</ul>
</template>

<script>
export default {
  props: {
    data: Object
  }
}
</script>

<style lang="less" scoped>
ul{
  padding: 0;
  li {
    list-style-type: none;
    letter-spacing: .3em;
    h1{
      line-height: 2;
    }
    p {
      font-size: 1.5em;
      white-space: nowrap;
    }
  }
}

</style>
