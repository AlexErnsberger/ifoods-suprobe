import Vue from 'vue'
import Router from 'vue-router'
import SuprobeHome from '@/views/SuprobeHome.vue'
import SuprobeModel from '@/views/SuprobeModel.vue'
import SuprobeProdFun from '@/views/SuprobeProdFun.vue'
import SuprobeProdFeat from '@/views/SuprobeProdFeat.vue'
import SuprobeAppScene from '@/views/SuprobeAppScene.vue'
import SuprobeCityPnr from '@/views/SuprobeCityPnr.vue'

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
    }
  ]
})
