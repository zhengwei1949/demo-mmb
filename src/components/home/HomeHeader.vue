<!-- 首页头部组件 -->
<template>
    <div>
        <!-- header头部开始 -->
        <header id='header' class='header'>
            <div class="logo">
                <router-link to="/" title='LoliSugar'>
                    <img src="/src/assets/images/header_logo.png">
                </router-link>
            </div>
            <div class="appdown">
                <a href="javascript:void(0)" title="手机app下载">
                    <img src="/src/assets/images/header_app.png">
                </a>
            </div>
        </header>
        <!-- header头部结束 -->
    </div>
</template>
<style scoped lang="less">
#header {
    height: 50px;
    background-color: #e4393c;
    border-bottom: 1px solid #e6e6e6;
    position: relative;
    vertical-align: middle;
    >.logo {
        padding: 12px;
        width: 75%;
        margin-left: 5px;
        >a {
            width: 100%;
            >img {
                max-height: 25px;
            }
        }
    }
    >.appdown {
        position: absolute;
        top: 0;
        right: 0;
        padding: 7px;
        >a {
            >img {
                max-height: 34px;
            }
        }
    }
}
</style>
<script>
</script>
