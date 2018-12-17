<template>
  <div class="download-module">
    <div class="download-title">
      <slot name="title"></slot>
    </div>
    <div class="download-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .download-module{
    position: fixed;
    z-index: 2;
    display: inline-block;
    width: 180px;
    right:-80px;
    transition: transform .5s linear;
    .download-title, .download-content{
      float: left;
    }
    .download-title{
      background-color:  @common-color;
      color: #fff;
      text-align: center;
      width: 100px;line-height: 80px;
    }
    &:hover{
      transition: transform .5s linear;
      transform: translateX(-80px);
    }
    .download-content{
      text-align: center;
    }
  }
</style>
