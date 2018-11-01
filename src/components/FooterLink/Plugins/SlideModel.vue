<template>
  <article>
    <ul>
      <li v-for="(list, index) in slide" :key="index">
        <a href="#" @click.prevent="ishow(list)">{{list.title}}<i :class="{'show-i':currentTab === list}"></i></a>
        <p :class="[{'show-scroll':currentTab === list&&list.content.length>120},{'show':currentTab === list&&list.content.length<=120}]" >{{list.content}}</p>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  props: {
    slide: Array
  },
  data () {
    return {
      currentTab:null
    }
  },
  methods: {
    ishow (list) {
      this.currentTab = list
    }
  }
}
</script>

<style lang="less" scoped>
@slide-a-fs:1em;
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
            padding: 1em 1.2em;
        }
        a{
          display: block;
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
          &>i{
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
          padding: 0 1.2em;
          white-space: pre-line;
          line-height: 2;
          height: 0;
          overflow: hidden;
          transition: .5s linear;
        }
        .show, .show-scroll{
          height: 8em;
          margin: 1em 0;
          padding: 1em 1.2em;
          
        }
        .show-scroll{
          height: 10em;
          overflow: auto;
        }
        .show-i{
          background-size: @slide-a-fs @slide-a-fs/5,0 0;
        }
      }
    }
  }
  /**
 *滚动条设置
 */
::-webkit-scrollbar { /* 血槽宽度 */
  width: 8px; height: 8px;
}
::-webkit-scrollbar-thumb { /* 拖动条 */
  background-color: rgba(0,0,0,.1);
  border-radius: 6px;
}
::-webkit-scrollbar-track { /* 背景槽 */
  background-color: #ddd;
  border-radius: 6px;
} 
</style>
