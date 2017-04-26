<template>
    <div>
        <!--商品列表主体部分-->
        <div class="mmb-main clearfix">
            <!--一个a标签就是一个商品-->
            <router-link :to="'/discount?productid='+value.productId" v-for="(value,index) in listData" :key="index">
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
            // nextTmp用于存储下一次生成节点的数组
            var nextTmp = res.body.result;
            // tmp用来存储当前生成节点的数组
            var tmp = [];
            // 定义一个变量用于设置每次加载的商品数量
            var len = 8;
            var that = this;
            // 判断，当nextTmp大于10的时候进行截取
            if (nextTmp.length > len) {
                // 将前10个截取给tmp，然后渲染到html中
                tmp = nextTmp.splice(0, len);
                // 定义一个标志位表示当前是否正在加载数据
                var isLoading = false;
                // 当大于10个时，开启滚动监听
                $(window).scroll(function () {
                    // 在执行加载前先判断是否还有要加载的数据，以及当时是否处于加载中
                    // 如果没有要加载的数据，或者当前正在加载上一次的数据，则直接返回
                    if (nextTmp.length === 0 || isLoading) {
                        return;
                    }
                    // 设置isLoading为正在加载数据
                    isLoading = true;
                    // 获取页面可视区高度
                    var height = $(window).height();
                    // 获取余下未显示部分高度
                    var other = $(document).height() - $(window).scrollTop() - height;
                    // 当余下未显示部分的高度小于页面可视高度的一半时（同时必须nextTmp有成员）
                    if (other < height * 0.5) {
                        // 对nextTmp进行判断，大于10则截取前10个，小于10则全部截取
                        if (nextTmp.length > len) {
                            tmp = nextTmp.splice(0, len);
                        } else {
                            tmp = nextTmp.splice(0);
                        }
                        // 遍历tmp，将所有元素追加到listData中
                        tmp.forEach((item)=>{
                            that.listData.push(item);
                        });
                    }
                    // 设置isLoading为加载数据完毕
                    isLoading = false;
                });
            } else {
                // 如果nextTmp小于10，则全部截取赋给tmp
                tmp = nextTmp.splice(0);
            }
            this.listData = tmp;
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
