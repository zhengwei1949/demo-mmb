<!-- 默认头部组件 -->
<template>
    <div>
        <!--头部-->
        <div class="mmb-header">
            <!--返回按钮-->
            <a href="javascript:;" class="header-return" @click="returnLast()">
                <!--返回图标-->
                <span class="glyphicon glyphicon-menu-left"></span>
            </a>
            <!--当前页面名称-->
            <h3 class="text-center">{{title}}</h3>
            <!--下载app-->
            <a class="header-download" href="http://m.manmanbuy.com/?o=download"></a>
        </div>
    </div>
</template>
<style scoped lang="less">
@whiteColor: #ffffff;
@mainColor: #e4393c;
//头部
.mmb-header {
    height: 50px;
    position: relative;
    background-color: @mainColor;
    color: @whiteColor;
    //返回按钮
    >.header-return {
        position: absolute;
        //返回图标
        >span {
            font-size: 24px;
            line-height: 50px;
            left: 15px;
            top: 0;
            color: @whiteColor;
        }
    }
    //app下载
    >.header-download {
        position: absolute;
        background: url("/src/assets/images/header_app.png") no-repeat center/32px;
        width: 50px;
        height: 50px;
        right: 0;
        top: 0;
    }
    //页面名称
    h3 {
        margin: 0;
        font-size: 20px;
        font-weight: bold;
        line-height: 50px;
    }
}
</style>
<script>
export default {
    name: 'NormHeader',
    methods: {
        // 点击返回按钮时，通过浏览器的上一步 实现返回
        returnLast() {
            window.history.go(-1);
        }
    },
    props:['title']
}
</script>
