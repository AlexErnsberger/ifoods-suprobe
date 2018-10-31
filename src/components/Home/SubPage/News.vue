<template>
  <div id="news">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="later-news"> 
            <router-link to="news1" tag="a">
              <img src="/static/img/news/news1.jpg">
            </router-link>
            <div class="news-content">
              <h4>
                <router-link to="news1" tag="a">食品检测技术公链Ifoods Chain重磅推出终端应用产品超级探针</router-link>
              </h4>
              <h6>2017-07-07</h6>
              <p>超级探针很好的解决了食品信息知情权、安全保障的问题。现在中国牛肉年进口量已经超过全球牛肉出口量的30%，市场规模即将过万亿。通过Ifoods Chain的开源、开放式的食品区块链生态平台，让大数据及人工智能带动食品技术的得以突破，从而在全球范围内构建完善的食品生态环境。</p>
              <p>
                <router-link to="news1" tag="a">阅读详情<i class="icon iconfont">&#xe624;</i></router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {

  }
}
</script>

<style lang="less" scoped>
#news{
  background: @home-bg-color;
  padding: 100px;
  div.later-news{
    width: 80%;
    margin: auto;
    border-color: @home-fs-color-lighter;
    border-radius: 4px;
    box-shadow: 0 8px 24px rgba(0,0,0,.12);
    a{
      display: block;
      text-decoration: none;
      border-radius: 4px 4px 0 0;
      overflow: hidden;
      img{
        display: block;
        object-fit: cover;
        width: 100%;
        height: 100%;
        transition: all .3s;
        &:hover{
          transform: scale(1.05);
        }
      }
      a:hover{
        text-decoration: none;
      }
    }
    div.news-content{
      padding: 1em 2em;
      text-align: left;
      h4{
        a{
          color:@home-fs-color-deeper;
          font-weight: 600;
        }
      }
      h6{
        color:@home-fs-color-lighter;
      }
      p{
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        text-align: justify;
        line-height: 1.5;
        word-break: break-all;
        overflow: hidden;
        a{
          font-size: .9em;
          i{
            vertical-align: -.1em;
          }
        }
      }
    }
  }
}
</style>
