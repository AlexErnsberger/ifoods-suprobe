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
          <article>
            <ul>
              <li>
                <a href="#" @click.prevent="ishow">如何注册超级探针账号？</a>
                <p  :class="{'show':show}">打开APP点击注册账号按钮，输入手机号，获取短信验证码，输入短信验证码验证身份后，设置密码，即注册完成。</p>
              </li>
              <li>
                <a >如何注册超级探针账号？</a>
                <p>打开APP点击注册账号按钮，输入手机号，获取短信验证码，输入短信验证码验证身份后，设置密码，即注册完成。</p>
              </li>
            </ul>
          </article>
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
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    ishow () {
      console.log(1)
      this.show = !this.show
    }
  }
}
</script>

<style lang="less" scoped>
@slide-a-fs:1em;
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
    }
    article{
      text-align: left;
      padding: 1em 3em 2em 3em;
      letter-spacing: .2em;
      background:@active-bg-color;
      ul{
        margin-bottom: 0;
        li{
          list-style-type: none;
          margin-bottom: 10px;
          a{
            display: block; padding: 1em 1.2em;
            border-bottom: .05em solid @border-bottom-color ;
            text-decoration: none;
            font-size: @slide-a-fs;
            color: @home-fs-color-deeper;
            position: relative;
            &:hover{
              text-decoration: none;
            }
            &::before{
              content: '';
              display: inline-block;
              width: @slide-a-fs/2;height: @slide-a-fs/2;
              margin-right: @slide-a-fs;
              vertical-align: @slide-a-fs/10;
              background:@common-color;
              border-radius: 100%;
            }
            &::after{
              content: '';
              display: inline-block;
              width: @slide-a-fs;height: @slide-a-fs;
              background-image: linear-gradient(to right,@home-fs-color-lighter),linear-gradient(to bottom,@home-fs-color-lighter);
              background-repeat: no-repeat;
              background-size: @slide-a-fs @slide-a-fs/5,@slide-a-fs/5 @slide-a-fs;
              background-position: 0 @slide-a-fs*0.4,@slide-a-fs*0.4 0;
              position: absolute;
              right: 0;top:calc(50% -  @slide-a-fs/2);
            }
          }
          p{
            color:@home-fs-color;
            background-color: @home-bg-color;
            padding:  1em 1.2em;
            margin: 1em 0;
            display: none;
          }
        }
      }
    }
  }
}
.show{
  display: block;
}
.active{
  background:@active-bg-color;
  border-left: .2em solid @common-color;
  color:@home-fs-color-deeper;
}
</style>
