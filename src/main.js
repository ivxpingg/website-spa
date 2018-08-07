import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import store from './store/store';
// 设置为 false 以阻止 vue 在启动时生成生产提示.
Vue.config.productionTip = process.env.NODE_ENV === 'development'
new Vue({
    router: router,
    store: store,
    render: h => h(App)
}).$mount('#app')
