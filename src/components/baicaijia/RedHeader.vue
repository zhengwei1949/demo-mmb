<template>
    <!-- 顶部标题 -->
    <div id="headerr">
        <div class="title">
            <router-link to="../index" class="fl"><img src="/src/assets/images/icon-back.png" alt=""></router-link>
            <a href="javascript:void(0)" class="fr"><img src="/src/assets/images/header_app.png" alt=""></a>
            <h2>白菜价-淘宝内部券</h2>
        </div>
    </div>
</template>
<style scoped lang="less">
//顶部logo
#headerr {
    width: 100%;
    .title {
        width: 100%;
        height: 44px;
        background-color: #e4393c;
        text-align: center;
        img {
            width: 30px;
            height: 30px;
            margin: 7px 10px;
        }
        h2 {
            widows: 100%;
            font-size: 20px;
            margin: 0 10px;
            color: #fff;
            line-height: 44px;
            font-weight: 700;
        }
    }
}
</style>
