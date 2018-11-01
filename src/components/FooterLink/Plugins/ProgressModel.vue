<template>
  <article>
    <section v-for="(pro, index) in progress" :key="index">
      <h4>{{pro.year}}</h4>
      <ul>
        <li v-for="(schedule, index) in pro.schedule" :key="index">
          <span>{{schedule.month}}</span>
          <span>{{schedule.work}}</span>
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    progress:Array
  }
}
</script>

<style lang="less" scoped>
@progress-fs:1em;
article{
  text-align: left;
  padding: 1em 3em 2em 3em;
  letter-spacing: .2em;
  background:@active-bg-color;
  h4{
    line-height: 2;
  }
  section{
    ul{
      li{
        list-style-type: none;
        span{
          display: inline-block;
          font-size: @progress-fs;
          padding: @progress-fs*0.6 @progress-fs;
          &:first-child::after{
            content: '';
            display: inline-block;
            width: @progress-fs/2;height: @progress-fs/2;
            background: @common-color;
            border-radius: 100%;
            position: absolute;
            margin-left: @progress-fs;
            margin-top: @progress-fs/2;
          }
          &:last-child{
            color:@home-fs-color-lighter;
            margin-left: @progress-fs*1.5;
            box-shadow: -@progress-fs/5 @progress-fs/5 @progress-fs/2 currentColor;
            border-radius: @progress-fs/5;
            position: relative;
            &::before{
              content: '';
              display: block;
              position: absolute;
              width: 0;height: 0;
              border:@progress-fs/2 solid transparent;
              border-right-color: white;
              margin-left: -@progress-fs*2;
              margin-top: @progress-fs*0.2;
            }
          }
        }
        &+li{
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
