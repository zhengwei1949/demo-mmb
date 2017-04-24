<template>
    <div>
        <!--商品列表主体部分-->
        <div class="mmb-main clearfix">
            <!--一个a标签就是一个商品-->
            <router-link :to="'/discount?productid='+value.productId" v-for="value in listData">
                <div class="col-xs-6 mmb-goods">
                    <div class="mmb-img text-center" v-html="value.productImg" id="InlandDiscountImg">
                    </div>
                    <p class="mmb-title"><strong>{{value.productName}}</strong></p>
                    <p class="mmb-price">{{value.productPrice}}</p>
                    <p class="mmb-source">
                        <span class="shop">{{value.productFrom}}</span> | <span class="time">{{value.productTime}}</span>
                    </p>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'InlandDiscountMain',
    data() {
        return {
            listData: []
        };
    },
    mounted() {
        this.$http.jsonp('http://139.199.157.195:9090/api/getinlanddiscount').then(res => {
            this.listData = res.body.result;
        });
    }
}
</script>
<style scoped lang="less">
//颜色变量
//主色调：价格
@mainColor: #FF841D;
//浅色调：商品来源、商品时间
@tintColor: #A1A1A1;
//边框颜色：边框
@borderColor: #EEEEEE;
//文字主色：商品名称
@wordColor: #333333;
//白色：头部文字、返回按钮
@whiteColor: #ffffff;
//函数
// 单行溢出
.one-txt-cut() {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

// 多行溢出 手机端使用
.txt-cut(@line: 2) {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: @line;
    -webkit-box-orient: vertical;
}

//列表主体部分
.mmb-main {
    //设置容器右边框
    border-right: 1px solid @borderColor;
}

//单个商品容器
.mmb-goods {
    padding: 10px 20px;
    border-left: 1px solid @borderColor;
    border-bottom: 1px solid @borderColor;
    height: 270px;
    //设置商品名称
    > .mmb-title {
        height: 40px;
        margin: 0;
        color: @wordColor;
        .txt-cut();
    }
    //设置商品价格
    > .mmb-price {
        color: @mainColor;
        .one-txt-cut();
    }
    //设置商品来源和时间
    > .mmb-source {
        font-size: 12px;
        color: @tintColor;
    }
}
</style>
