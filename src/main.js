import Vue from 'vue'
import App from './App.vue'

// 引入路由
import VueRouter from 'vue-router'
// 引入交互
import VueResource from 'vue-resource'
// 引入路由配置文件
import routes from './routeConfig.js'

// 引入过滤器
import filters from './filters'

// 将所有过滤器添加到vue对象上
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));



// 使用
Vue.use(VueRouter);
Vue.use(VueResource);


// 生成路由实例
const router = new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes
})

// 创建vue实例
new Vue({
    el: '#app',
    router, // 挂载路由实例
    render: h => h(App)
})
