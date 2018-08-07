export default [
    {
        path: '/home',
        name: 'home',
        alias: '/',
        meta: {
            title: '厦门怡奇信息科技有限公司'
        },
        component: () => import('@/components/HelloWorld.vue')
    }
];

