// 引入组件
// 首页头部
import HomeHeader from './components/home/HomeHeader.vue'
// 首页组件
import Home from './components/home/Home.vue'
// 比价搜索菜单页
import Category from './components/category/Category.vue'
// 比价搜索菜单页中心组件
import CategoryMain from './components/category/CategoryMain.vue'
// 比价搜索列表页
import ProductList from './components/category/ProductList.vue'
// 比价搜索详情页
import Compare from './components/category/Compare.vue'
// 省钱控列表页
import MoneyCtrl from './components/moneyctrl/MoneyCtrl.vue'
// 省钱控列表页中心组件
import MoneyCtrlMain from './components/moneyctrl/MoneyCtrlMain.vue'
// 所有折扣商品的详情页
import MoneyProduct from './components/common/MoneyProduct.vue'
// 国内折扣列表页
import InlandDiscount from './components/inlandDiscount/InlandDiscount.vue'
// 国内折扣列表页中心组件
import InlandDiscountMain from './components/inlandDiscount/InlandDiscountMain.vue'
// 白菜价
import LowPrice from './components/baicaijia/LowPrice.vue'

// 导出路由配置
export default [{
    // 主页
    path: '/',
    component: Home
}, {
    // 比价搜索分类
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
    // 国内折扣列表
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
    // 白菜价
    path: '/baicaijia',
    component: LowPrice
}, {
    path: '*',
    redirect: '/'
}]
