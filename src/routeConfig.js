// 引入组件
// 首页头部
import HomeHeader from './components/HomeHeader.vue'
// 首页组件
import Home from './components/Home.vue'
// 比价搜索菜单页
import Category from './components/Category.vue'
// 比价搜索菜单页中心组件
import CategoryMain from './components/CategoryMain.vue'
// 比价搜索列表页
import ProductList from './components/ProductList.vue'
// 比价搜索详情页
import Compare from './components/Compare.vue'
// 省钱控列表页
import MoneyCtrl from './components/MoneyCtrl.vue'
// 省钱控列表页中心组件
import MoneyCtrlMain from './components/MoneyCtrlMain.vue'
// 所有折扣商品的详情页
import MoneyProduct from './components/MoneyProduct.vue'
// 国内折扣列表页
import InlandDiscount from './components/InlandDiscount.vue'
// 国内折扣列表页中心组件
import InlandDiscountMain from './components/InlandDiscountMain.vue'
// 白菜价
import LowPrice from './components/LowPrice.vue'

// 导出路由配置
export default [{
    // 主页
    path: '/index',
    component: Home
}, {
    // 比价搜索
    path: '/category',
    component: Category,
    children: [{
        path: '',
        component: CategoryMain
    }, {
        // 比价搜索列表
        path: '/productlist',
        component: ProductList
    }, {
        // 比价搜索详情
        path: '/compare',
        component: Compare
    }]
}, {
    // 省钱控
    path: '/moneyctrl',
    component: MoneyCtrl,
    children: [{
        path: '',
        component: MoneyCtrlMain
    }, {
        // 折扣商品详情
        path: '/moneyproduct',
        component: MoneyProduct
    }]
}, {
    path: '/inlanddiscount',
    component: InlandDiscount,
    children: [{
        path: '',
        component: InlandDiscountMain
    }, {
        // 国内折扣详情
        path: '/discount',
        component: MoneyProduct
    }]
}, {
    path: '/baicaijia',
    component: LowPrice
}, {
    // 默认访问根路由时重定向至主页
    path: '/',
    redirect: '/index'
}, {
    path: '*',
    redirect: '/index'
}]
