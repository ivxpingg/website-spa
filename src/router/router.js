export default [
    {
        path: '/home',
        name: 'home',
        alias: '/',
        meta: {
            title: '配置中心'
        },
        component: () => import('@/components/HelloWorld.vue')
    }
];

