<!-- 搜索框组件 -->
<template>
    <div>
        <!-- search部分strat -->
        <div id='search' class='search'>
            <!-- 固定格式，在移动端可以跳出虚拟键盘 -->
            <form action="#">
                <input type="search" placeholder='请输入你想比价的商品'>
                <input type="button" value='搜索'>
            </form>
        </div>
        <!-- search部分end -->
    </div>
</template>
<style scoped lang="less">
#search {
    padding: 10px;
    background-color: #fff;
    > form {
        position: relative;
        padding-right: 70px;
        > input[type="search"] {
            width: 100%;
            background-color: #f1f1f1;
            height: 30px;
            line-height: 30px;
            border-radius: 15px;
            font-size: 13px;
            padding-right: 50px;
            padding-left: 20px;
        }
        >input[type='button'] {
            background-color: #e4393c;
            width: 63px;
            height: 30px;
            line-height: 30px;
            position: absolute;
            right: 0;
            top: 0;
            font-size: 16px;
            color: #fff;
            border-radius: 15px;
        }
    }
}
</style>
<script>
</script>
