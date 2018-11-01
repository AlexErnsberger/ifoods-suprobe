import Vue from 'vue'
import Router from 'vue-router'
import SuprobeHome from '@/views/SuprobeHome.vue'
import SuprobeModel from '@/views/SuprobeModel.vue'
import SuprobeProdFun from '@/views/SuprobeProdFun.vue'
import SuprobeProdFeat from '@/views/SuprobeProdFeat.vue'
import SuprobeAppScene from '@/views/SuprobeAppScene.vue'
import SuprobeCityPnr from '@/views/SuprobeCityPnr.vue'
import SuprobeAboutUs from '@/views/FooterLink/SuprobeAboutUs.vue'
import SuprobeJoinUs from '@/views/FooterLink/SuprobeJoinUs.vue'
import SuprobeContactUs from '@/views/FooterLink/SuprobeContactUs.vue'
import SuprobeFAQ from '@/views/FooterLink/SuprobeFAQ.vue'
import SuprobeSalePolicy from '@/views/FooterLink/SuprobeSalePolicy.vue'
import SuprobeDownload from '@/views/FooterLink/SuprobeDownload.vue'
import SuprobeNews from '@/views/FooterLink/SuprobeNews.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SuprobeHome',
      component: SuprobeHome
    },
    {
      path: '/model',
      name: 'SuprobeModel',
      component: SuprobeModel
    },
    {
      path: '/prodfun',
      name: 'SuprobeProdFun',
      component: SuprobeProdFun
    },
    {
      path: '/prodfeat',
      name: 'SuprobeProdFeat',
      component: SuprobeProdFeat
    },
    {
      path: '/appscene',
      name: 'SuprobeAppScene',
      component: SuprobeAppScene
    },
    {
      path: '/citypnr',
      name: 'SuprobeCityPnr',
      component: SuprobeCityPnr
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: SuprobeAboutUs
    },
    {
      path: '/joinus',
      name: 'joinus',
      component: SuprobeJoinUs
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: SuprobeContactUs
    },
    {
      path: '/faq',
      name: 'faq',
      component: SuprobeFAQ
    },
    {
      path: '/salepolicy',
      name: 'salepolicy',
      component: SuprobeSalePolicy
    },
    {
      path: '/download',
      name: 'download',
      component: SuprobeDownload
    },
    {
      path: '/news',
      name: 'news',
      component: SuprobeNews
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
