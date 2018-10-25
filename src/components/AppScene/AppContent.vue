<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <transition appear-active-class="animated slideInLeft" appear>
          <article>
            <h3>{{data.title}}</h3>
            <p>{{data.content}}</p>
          </article>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data : Object
  }
}
</script>

<style lang="less" scoped>
article{
  width: 80%;
  margin: 30% auto;
  h3{
    font-size: 1.6em;
    line-height: 2em;
    letter-spacing: .1em;
  }
  p{
    text-align: justify;
    line-height: 2em;
    letter-spacing: .05em;
  }
}
</style>
