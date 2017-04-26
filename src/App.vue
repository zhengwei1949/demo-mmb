<template>
    <div id="app">
        <!-- 上方展示视图 -->
        <router-view></router-view>
        <!-- 底部通用样式 -->
        <NormFooter></NormFooter>
    </div>
</template>
<script>
// 引入默认底部组件
import NormFooter from './components/common/NormFooter.vue'
export default {
    name: 'app',
    components: {
        // 注册组件
        NormFooter
    }
}
</script>
<style>
/*导入基础样式、公共样式*/

@import './assets/CSS/base.css';
@import './assets/CSS/common.css';
</style>
<style lang="less">
/*导入全局作用样式*/

@import './assets/CSS/background.less';
</style>
