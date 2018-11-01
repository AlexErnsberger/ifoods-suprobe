<template>
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <transition appear-active-class="animated slideInLeft" appear>
        <article>
          <h3 class="ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">{{data.title}}</h3>
          <p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">{{data.content}}</p>
        </article>
      </transition>
    </div>
  </div>
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
article {
  width: 80%;
  margin: auto;
  color: @home-fs-color;

  h3 {
    .mixin-h(@fs: 1.6em;
    @lh: 2);
    letter-spacing: .1em;
  }

  p {
    text-align: justify;
    .mixin-h(@fs: 1em;
    @lh: 2);
    letter-spacing: .05em;
  }
}
</style>
