import Vue from "vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomeComponent from './components/pages/HomeComponent.vue';
import AboutComponent from './components/pages/AboutComponent.vue';
import ContactsComponent from './components/pages/ContactsComponent.vue';
import BlogComponent from './components/pages/BlogComponent.vue';
import PostDetail from './components/pages/PostDetail.vue';

const router = new VueRouter({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/chi-siamo',
      name: 'about',
      component: AboutComponent
    },
    {
      path: '/contatti',
      name: 'contacts',
      component: ContactsComponent
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogComponent
    },
    {
      path: '/dettaglio-post/:slug',
      name: 'detail',
      component: PostDetail
    },
  ]
});

export default router;