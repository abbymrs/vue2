import Vue from 'vue';
import Router from 'vue-router';

// lazy load components
const NotFound = r => require.ensure([], () => r(require('@/pages/NotFound.vue')), 'NotFound');
const Home = r => require.ensure([], () => r(require('@/pages/Home.vue')), 'Home');
const Profile = r => require.ensure([], () => r(require('@/pages/Profile.vue')), 'Profile');
const Products = r => require.ensure([], () => r(require('@/pages/Products.vue')), 'Products');
const Login = r => require.ensure([], () => r(require('@/pages/Login.vue')), 'Login');

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        },
        {
            path: '/products',
            name: 'products',
            component: Products
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '',
            redirect: { name: 'home' }
        },
        {
            path: '**',
            name: 'notFound',
            component: NotFound
        }
    ]
});