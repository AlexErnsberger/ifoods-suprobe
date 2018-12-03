<template>
<nav id="header-nav">
  <div class="header-nav-flexible" @click.stop="show"></div>
  <ul :class="{'show':flexibleShow}">
    <li @click="hidden" >
      <router-link to="/" tag="a"  exact>
        <span>首页</span>
      </router-link>
    </li>
    <li v-for="(nav,index) in navArray" :key="index"  @click="hidden">
      <router-link tag="a" :to="nav.path">
        <span>{{nav.name}}</span>
      </router-link>
    </li>
    <li @click="hidden">
      <a :href="prodLink.BUY" target="_blank" >
        <span>立即预订</span>
      </a>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
  data () {
    return {
      navArray: [{
        name: '超极探针',
        path: 'model'
      },
      {
        name: '产品功能',
        path: 'prodfun'
      },
      {
        name: '产品特点',
        path: 'prodfeat'
      },
      {
        name: '应用场景',
        path: 'appscene'
      },
      {
        name: '城市合伙人',
        path: 'citypnr'
      }],
      flexibleShow: false
    }
  },
  methods: {
    show () {
      this.flexibleShow = !this.flexibleShow
      setTimeout(() => {
        document.addEventListener('click', this.checkClick)
      }, 0)
    },
    hidden () {
      this.flexibleShow = false
    },
    checkClick (e) {
      if (!this.$el.contains(e.target)) {
        this.flexibleShow = false
      }
    }
  },
  beforeDestroy () {
    document.removeEventListener('click', this.checkClick)
  }
}
</script>

<style lang="less" scoped>
#header-nav{
  ul {
    display: inline-block;
    margin: 0px;

    li {
      list-style-type: none;
      float: left;

      a {
        display: block;
        font-size: 120%;
        line-height: 50px;
        padding: 0 15px;
        color: #777777;
        text-decoration: none;

        &:hover {
          color: #414040;
          text-decoration: none;
        }

        &.router-link-active {
          color: @common-color;
          text-decoration: none;

          span {
            padding: 4px 0;
            border-bottom: 3px solid currentColor;
          }
        }
      }

      // &:last-of-type {
      //   a {
      //     color: white;
      //     background: linear-gradient(to right, @common-color-light, @common-color);

      //     &:hover {
      //       background: @common-color-light linear-gradient(hsla(0, 0%, 100%, .2), transparent);
      //     }
      //   }
      // }
    }
  }
  div.header-nav-flexible{
    display: none;
  }
}

@media only screen and (max-width:768px){
  @flexible-width:35px;
  @flexible-color:#ccc;
  @flexible-color-deeper:rgba(0, 0, 0, .2);
  #header-nav{
    ul{
      display: none;
      padding: 0;
      li{
        float: none;
        text-align: center;
        border-radius: 10px;
        background: @header-bg-color;
        border-bottom: 1px solid #ccc;
        overflow: hidden;
      }
    }
    div.header-nav-flexible{
      display: inline-block;position: relative;
      width: @flexible-width;height: @flexible-width;
      margin: calc((50px - @flexible-width)/2) 0;
      border-radius: @flexible-width/15;
      padding: @flexible-width/5 0;
      background: @flexible-color;
      background-clip: content-box;
      border: @flexible-width/5 solid @flexible-color;
      border-right-width: @flexible-width/70;border-left-width:@flexible-width/70;
    }
  }
  .show{
    display: block;
  }
}
</style>
