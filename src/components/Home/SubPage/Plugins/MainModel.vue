<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <nav>
            <a href="#" v-for="(nav,index) in navs" :key="index">{{nav.title}}</a>
          </nav>
        </div>
        <div class="col-md-8">
         <slide-model></slide-model>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ArticleModel from '@/components/Home/SubPage/Plugins/ArticleModel.vue'
import ProgressModel from '@/components/Home/SubPage/Plugins/ProgressModel.vue'
import SlideModel from '@/components/Home/SubPage/Plugins/SlideModel.vue'
export default {
  components: {
    ArticleModel, ProgressModel, SlideModel
  },
  props:{
    navs:Array
  }
}
</script>

<style lang="less" scoped>

section{
  background: @home-bg-color;
  padding-bottom: 80px;
  .container{
    .row>div{
      padding: 0;
    }
    nav{
      a{
        display: block;
        text-decoration: none;
        line-height: 3;
        font-size: 1.4em;letter-spacing: .2em;
        color:@home-fs-color;
        &:hover{
          text-decoration: none;
        }
      }
      a+a{
        border-top: .01em solid @border-bottom-color;
      }
      .active{
        background:@active-bg-color;
        border-left: .2em solid @common-color;
        color:@home-fs-color-deeper;
      }
    }
    
  }
}

</style>
