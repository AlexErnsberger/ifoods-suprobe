<template>
<section>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-4">
        <nav>
          <a class="wow fadeInUp" href="#" v-for="(tab,index) in tabs" :key="index" @click.prevent="choose(tab)" :class="{'active':currentTab == tab}">{{tab.title}}</a>
        </nav>
      </div>
      <div class="col-xs-12 col-md-8">
        <normal-model v-if="currentTab.type=='article'" :title="currentTab.title" :content="currentTab.content"></normal-model>
        <progress-model v-if="currentTab.type=='progress'" :progress="currentTab.content"></progress-model>
        <slide-model v-if="currentTab.type=='slide'" :slide="currentTab.content"></slide-model>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import NormalModel from '@/components/FooterLink/Plugins/NormalModel.vue'
import ProgressModel from '@/components/FooterLink/Plugins/ProgressModel.vue'
import SlideModel from '@/components/FooterLink/Plugins/SlideModel.vue'
export default {
  components: {
    NormalModel,
    ProgressModel,
    SlideModel
  },
  props: {
    tabs: Array
  },
  data () {
    return {
      currentTab: this.tabs[0]
    }
  },
  methods: {
    choose (tab) {
      this.currentTab = tab
    }
  }
}
</script>

<style lang="less" scoped>
section {
  background: @common-bg-color;
  padding-bottom: 80px;

  .active {
    background: white;
    box-shadow: -.2em 0 @common-color;
    color: @common-fs-color-deeper;
  }

  .container {
    .row>div {
      padding: 50px 0;
      @media only screen and (max-width:768px){
        padding:0;
      }
    }
    nav {
      a {
        display: block;
        text-decoration: none;
        line-height: 3;
        font-size: 1.4em;
        letter-spacing: .2em;
        color: @common-fs-color;

        &:hover {
          text-decoration: none;
        }
      }

      a+a {
        border-top: .01em solid @common-fs-color-lighter;
      }
    }
  }
}
</style>
