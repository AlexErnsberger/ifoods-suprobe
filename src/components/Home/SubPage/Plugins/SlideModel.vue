<template>
  <article>
    <ul>
      <li v-for="list in slide" :key="list">
        <a href="#" @click.prevent="ishow">{{list.title}}<i :class="{'show-i':show}"></i></a>
        <p :class="{'show':show}" >{{list.content}}</p>
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
      show: false
    }
  },
  methods: {
    ishow () {
      this.show = !this.show
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
          height: 0;
          overflow: hidden;
          transition: 1s ease-out;
        }
        .show{
          height: 5em;
          margin: 1em 0;
          padding: 1em 1.2em;
        }
        .show-i{
          background-size: @slide-a-fs @slide-a-fs/5,0 0;
        }
      }
    }
  }
</style>
