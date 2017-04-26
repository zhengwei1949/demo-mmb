<!-- 面包屑组件 -->
<template>
    <div>
        <!-- 分类标题区域-->
        <div class="category-title">
            <ol class="breadcrumb">
                <li>
                    <router-link to="/">首页</router-link>
                </li>
                <li>
                    <router-link to="/category">全部分类</router-link>
                </li>
                <li><a href="javascript:;">{{$route.query.categoryname}}</a></li>
                <a href="javascript:;" class="btn btn-default">筛选</a>
            </ol>
        </div>
    </div>
</template>
<style scroped lang="less">
//分类标题面包屑导航区域
.breadcrumb {
    margin-bottom: 0px;
    > li {
        //给导航设置大小
        font-size: 14px;
    }
    > li + li:before {
        //给导航添加伪类 > 样式
        color: #000;
        font-size: 16px;
        content: ">\00a0";
    }
    > .btn {
        //给筛选按钮设置样式
        padding: 2px 15px;
        float: right;
        background-color: #EBEBF0;
    }
}
</style>
