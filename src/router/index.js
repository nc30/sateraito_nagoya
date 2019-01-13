import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import PostsPage from '@/components/PostsPage'
// import FormPage from '@/components/FormPage'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/pic',
      name: 'pic',
      component: MainPage
    },
    {
      path: '/buzz',
      name: 'buzz',
      component: MainPage
    },
    {
      path: '/proc',
      name: 'proc',
      component: MainPage
    },
    {
      path: '/posts/',
      name: 'posts',
      component: PostsPage
    },
    {
      path: '/posts/:page',
      name: 'posts_page',
      component: PostsPage
    },
    // {
    //   path: '/forms',
    //   name: 'posts_page',
    //   component: FormPage
    // },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
  ]
})
