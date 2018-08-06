import Vue from 'vue';
import VueRouter from 'vue-router';
import routers from './router';
Vue.use(VueRouter);

const Title = function(title) {
    title = title ? title + '' : '';
    window.document.title = title;
};

// 路由配置
const RouterConfig = {
    // mode: 'history',
    routes: routers
};

export const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    Title(to.meta.title, router.app);
    next();
});

router.afterEach(() => {
    window.scrollTo(0, 0);
});

