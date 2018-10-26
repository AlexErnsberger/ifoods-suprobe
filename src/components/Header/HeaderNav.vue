<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" exact>
          <span>首页</span>
        </router-link>
      </li>
      <li v-for="(nav,index) in navArray" :key="index">
        <router-link :to="nav.path">
          <span>{{nav.name}}</span>
        </router-link>
      </li>
      <li>
        <a href="#">
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
      navArray: [
        {name: '超级探针', path: 'model'},
        {name: '产品功能', path: 'prodfun'},
        {name: '产品特点', path: 'prodfeat'},
        {name: '应用场景', path: 'appscene'},
        {name: '城市合伙人', path: 'citypnr'}]
    }
  }
}
</script>

<style lang="less" scoped>
ul{
  display: inline-block;
  margin: 0px;

  li{
    list-style-type: none;
    float: left;

    a{
      display: block;
      font-size: 120%;
      line-height: 50px;
      padding: 0 15px;
      color:#777777;

      &:hover{
        color:#414040;
      }

      &.router-link-active{
        color:@common-color;
        text-decoration: none;
        span{
          padding: 4px 0;
          border-bottom: 3px solid currentColor;
        }
      }
    }

    &:last-of-type{
      a{
        color:white;
        background:linear-gradient(to right,@common-color-light,@common-color);

        &:hover{
          background: @common-color-light linear-gradient(hsla(0,0%,100%,.2),transparent);
        }
      }
    }
  }
}

</style>
