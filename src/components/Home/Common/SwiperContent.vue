<template>
<ul>
  <li>
    <h1>{{data.title}}</h1>
  </li>
  <li v-for="(desc,index) in data.desc" :key="index">
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
li {
  list-style-type: none;
  letter-spacing: .3em;

  p {
    font-size: 1.5em;
  }
}
</style>
