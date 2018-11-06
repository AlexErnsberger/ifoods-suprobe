<template>
<nav id="header-nav">
  <div class="header-nav-flexible" @click="show"></div>
  <ul :class="{'show':flexibleShow}">
    <li @click="hidden">
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
      <a href="https://weidian.com/item.html?itemID=2621089563&p=iphone&wfr=wxBuyerShare&share_relation=3288c65866e6f5c6_192567885_1" target="_blank" >
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
        name: '超级探针',
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
      this.flexibleShow = true
    },
    hidden () {
      this.flexibleShow = false
    }
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

      &:last-of-type {
        a {
          color: white;
          background: linear-gradient(to right, @common-color-light, @common-color);

          &:hover {
            background: @common-color-light linear-gradient(hsla(0, 0%, 100%, .2), transparent);
          }
        }
      }
    }
  }
  div.header-nav-flexible{
    display: none;
  }
}

@media only screen and (max-width:768px){
  @flexible-width:35px;
  @flexible-color:rgba(0, 0, 0, .1);
  #header-nav{
    ul{
      display: none;
      background: @header-bg-color;
      padding: 0;
      li{
        float: none;
        text-align: center;
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
      border-right-width: 0px;border-left-width: 0px;
      box-shadow: 0px 0px 0px @flexible-width/100 @flexible-color;
    }
  }
  .show{
    display: block;
  }
}
</style>
