<template>
<div>
  <a href="#" @click.prevent="ishow(list)">
    {{list.title}}
    <i :class="{'show-i':currentTab === list}"></i>
  </a>
  <transition name="slide-fade" mode="out-in">
    <p v-if="currentTab === list"  ref="content">{{list.content}}</p>
  </transition>
</div>
</template>

<script>
export default {
  props: {
    list: Object
  },
  data () {
    return {
      currentTab: null,
      tabHeight: 0
    }
  },
  computed: {

  },
  methods: {
    ishow (list) {
      if (!this.currentTab) {
        this.currentTab = list
      } else {
        this.currentTab = null
        this.tabHeight = 0
      }
    },
    getHeight (list) {
      if (this.currentTab === list) {
        return this.$refs.content.offsetHeight
      }
    }
  }
}
</script>

<style lang="less" scoped>
@slide-a-fs: 1em;
div {
  a{
    padding: 1em 1.2em;
  }

  a {
    display: block;
    border-bottom: .05em solid @border-bottom-color ;
    text-decoration: none;
    font-size: @slide-a-fs;
    color: @home-fs-color-deeper;
    position: relative;

    &:hover {
      text-decoration: none;
    }

    &::before {
      content: '';
      display: inline-block;
      width: @slide-a-fs/2;
      height: @slide-a-fs/2;
      margin-right: @slide-a-fs;
      vertical-align: @slide-a-fs/10;
      background: @common-color;
      border-radius: 100%;
    }

    &>i {
      display: inline-block;
      width: @slide-a-fs;
      height: @slide-a-fs;
      background-image: linear-gradient(to right, @home-fs-color-lighter), linear-gradient(to bottom, @home-fs-color-lighter);
      background-repeat: no-repeat;
      background-size: @slide-a-fs @slide-a-fs/5, @slide-a-fs/5 @slide-a-fs;
      background-position: 0 @slide-a-fs*0.4, @slide-a-fs*0.4 0;
      position: absolute;
      right: 0;
      top: calc(50% - @slide-a-fs/2);
    }
  }

  p {
    color: @home-fs-color;
    background-color: @home-bg-color;
    white-space: pre-line;
    line-height: 2;
    transition: .5s linear;
    margin: 1em 0;
    padding: 1em 1.2em;
  }
  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: all .3s linear;
  }
  .slide-fade-enter, .slide-fade-leave-to{
    transform: translateX(10px);
    opacity: 0;
  }
  .show-i {
    background-size: @slide-a-fs @slide-a-fs/5, 0 0;
  }
}
</style>
