import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

const Home = r => require.ensure([], () => r(require('@/page/home')), 'Home');
const About = r => require.ensure([], () => r(require('@/page/about')), 'About');
const Write = r => require.ensure([], () => r(require('@/page/write')), 'Write');
const Personal = r => require.ensure([], () => r(require('@/page/personal')), 'Personal');
const ThemeDetail = r => require.ensure([], () => r(require('@/page/theme/themeDetail')), 'ThemeDetail');
const ThemeList = r => require.ensure([], () => r(require('@/page/theme/themeList')), 'ThemeList');

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/about',
        component: About,
    },{
        path: '/write',
        component: Write,
    },{
        path: '/personal',
        component: Personal,
    },
    {
        path: '/themeDetail',
        component: ThemeDetail,
    },
    {
        path: '/themeList',
        component: ThemeList,
    },
]

export default new Router({
    routes,
    strict: process.env.NODE_ENV !== 'production',
})