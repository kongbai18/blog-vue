import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

const Home = r => require.ensure([], () => r(require('@/page/home')), 'Home');
const Theme = r => require.ensure([], () => r(require('@/page/theme')), 'Theme');

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/theme',
        component: Theme,
    },
]

export default new Router({
    routes,
    strict: process.env.NODE_ENV !== 'production',
})