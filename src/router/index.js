import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import House from "@/components/House/House"
import test from "@/components/test"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/House'
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: "/House",
      name: "House",
      component: House
    },
    {
      path: "/test",
      name: "test",
      component: test
    }
  ]
})
