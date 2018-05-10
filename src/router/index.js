import Vue from 'vue';
import Router from 'vue-router';

import NotFound from '@/components/NotFound';
import Home from '@/pages/Home';
import Profile from '@/pages/Profile';
import Products from '@/pages/Products';
import Login from '@/pages/Login';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '',
      redirect: {name: 'Home'}
    },
    {
      path: '**',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
