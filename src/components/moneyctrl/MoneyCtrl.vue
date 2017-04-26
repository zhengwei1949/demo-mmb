<!-- 省钱控列表组件 -->
<template>
    <div>
        <!-- 默认头部组件 -->
        <NormHeader title="省钱控"></NormHeader>
        <router-view></router-view>
    </div>
</template>
<script>
// 引入默认头部组件
import NormHeader from '../common/NormHeader.vue'
export default {
    name: 'MoneyCtrl',
    // 注册组件
    components: {
        NormHeader
    }
}
</script>
