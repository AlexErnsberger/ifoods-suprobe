<template>
<div class="news-model">
  <router-link class="news-img" v-if="news.path" :to="news.path" tag="a">
    <img :src="news.img">
    </router-link>
    <a class="news-img" v-else :href="news.href" target="_blank">
      <img :src="news.img">
    </a>
    <div class="news-content">
      <h4>
        <router-link v-if="news.path" :to="news.path" tag="a">{{news.title}}</router-link>
        <a v-else :href="news.href" target="_blank">{{news.title}}</a>
      </h4>
      <h6>{{news.publishTime}}</h6>
      <p>{{news.abstract}}</p>
      <p>
        <router-link v-if="news.path" :to="news.path" tag="a">阅读详情<i class="icon iconfont">&#xe624;</i></router-link>
        <a v-else :href="news.href" target="_blank">阅读详情<i class="icon iconfont">&#xe624;</i></a>
      </p>
    </div>
</div>
</template>

<script>
export default {
  props: {
    news: Object
  }
}
</script>

<style lang="less" scoped>
div.news-model {
  margin: auto;
  border-color: @home-fs-color-lighter;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, .12);

  a {
    display: block;
    text-decoration: none;
    overflow: hidden;

    &.news-img {
      height: 45%;
    }

    img {
      display: block;
      object-fit: cover;
      width: 100%;
      height: 100%;
      transition: all .3s;

      &:hover {
        transform: scale(1.05);
      }
    }

    a:hover {
      text-decoration: none;
    }
  }

  div.news-content {
    padding: 1em 2em;
    text-align: left;

    h4 {
      height: 2.4em;

      a {
        color: @home-fs-color-deeper;
        font-weight: 600;
      }
    }

    h6 {
      color: @home-fs-color-lighter;
    }

    p {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      text-align: justify;
      line-height: 1.5;
      word-break: break-all;
      overflow: hidden;

      a {
        font-size: .9em;

        i {
          vertical-align: -.1em;
        }
      }
    }
  }
}
</style>
