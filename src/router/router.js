

export default [
    {
        path: '/home',
        name: 'home',
        alias: '/',
        meta: {
            title: '配置中心'
        },
        component: (resolve) => require(['../views/Home/home.vue'], resolve),
        children: []
    }
];

