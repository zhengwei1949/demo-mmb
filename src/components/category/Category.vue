<!-- 比价搜索菜单页组件 -->
<template>
    <div>
        <!-- 默认头部 -->
        <NormHeader title="比价搜索"></NormHeader>
        <!-- 搜索框 -->
        <Search></Search>
        <!-- 展示视图 -->
        <router-view></router-view>
    </div>
</template>
<style>
</style>
<script>
// 导入组件
import NormHeader from '../common/NormHeader.vue'
import Search from '../common/Search.vue'
export default {
    name: 'Category',
    // 注册组件
    components: {
        NormHeader,
        Search
    }
}
</script>
