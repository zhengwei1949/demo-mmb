<!-- 首页头部组件 -->
<template>
    <div>
        <!-- header头部开始 -->
        <header id='header' class='header'>
            <div class="logo">
                <a href="index.html" title='慢慢买'>
                    <img src="../assets/images/icons/header_logo.png">
                </a>
            </div>
            <div class="appdown">
                <a href="javascript:void(0)" title="手机app下载">
                    <img src="../assets/images/icons/header_app.png">
                </a>
            </div>
        </header>
        <!-- header头部结束 -->
    </div>
</template>
<style scoped lang="less">
#header {
    height: 50px;
    background-color: #ff841d;
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
