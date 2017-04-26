<!-- 比价搜索详情页 -->
<template>
    <section id="product-bijia">
        <!-- 面包屑组件 -->
        <BreadCrumb></BreadCrumb>
        <!-- 商品详情区域-->
        <div class="product-bijia clearfix" v-for="value in productData">
            <div class="product-name">
                {{value.productName}}
            </div>
            <div class="product-img" v-html="value.productImg">
            </div>
            <div class="product-collect">
                <a href="javascript:setfav(473088);">
                    <img src="http://www.zuyushop.com/wap/images/sc.jpg" width="39" height="39">
                </a>
            </div>
        </div>
        <!-- 比价购买-->
        <div class="tab">
            <ul class="clearfix">
                <li class="cur"><a href="javascript:;">比价购买</a></li>
                <li class="mtab">
                    <a href="javascript:;">产品参数</a></li>
                <li><a href="javascript:;" class="">评价(2322)</a></li>
            </ul>
        </div>
        <div id="plist" v-for="value in productData">
            <a href="javascript:;">
                <div class="plist">
                    <a href="javascript:;" v-html="value.bjShop"></a>
                </div>
            </a>
            <div class="note">
                * 实际价格以各网站列出的实时售价为准，我们提供的价格可能有数小时至数日的延迟。
            </div>
        </div>
        <div class="product-com-title">
            <div>网友评价</div>
        </div>
        <div class="product-com-list">
            <ul v-for="value in comListData">
                <li>
                    <div class="clearfix">
                        <span class="pull-left com-name">{{value.comName}}</span>
                        <span class="pull-right com-time">{{value.comTime}}</span>
                    </div>
                    <div class="clearfix">
                        <span class="pull-right com-from">{{value.comFrom}}</span>
                    </div>
                    <div class="com-content">
                        {{value.comContent}}
                    </div>
                </li>
            </ul>
        </div>
        <div class="more-com">
            <a class="morein" href="comment.aspx?id=473088">查看更多评价</a>
        </div>
    </section>
</template>
<script>
import BreadCrumb from './BreadCrumb.vue'
export default {
    name: 'Compare',
    data() {
        return {
            // 商品详情
            productData: [],
            // 评论详情
            comListData: []
        }
    },
    components: {
        BreadCrumb
    },
    mounted() {
        // 通过路由获取传递过来的productId
        var productId = this.$route.query.productId;
        // 获取商品详情
        this.$http.jsonp('http://139.199.157.195:9090/api/getproduct', {
            params: {
                'productid': productId
            }
        }).then(function(res) {
            this.productData = res.body.result;
        });
        // 获取商品详情
        this.$http.jsonp('http://139.199.157.195:9090/api/getproductcom', {
            params: {
                'productid': productId
            }
        }).then(function(res) {
            this.comListData = res.body.result;
        });
    }
}
</script>
<style scoped lang="less">
.textAlign() {
    text-align: center;
}

//背景颜色
.backgroundColor {
    background-color: #ffbb00;
}

//商品详情设置样式
#product-bijia {
    //商品详情部分
    > .product-bijia {
        width: 100%; //宽度设置100% 否则就是以子代内容为宽度 无法实现居中
        > .product-name {
            //商品标题样式
            .textAlign();
            font-size: 17px;
            width: 80%;
            margin: 0 auto;
            margin-top: 16px;
        }
        > .product-img {
            //商品图片样式
            .textAlign();
        }
        > .product-collect {
            //收藏图片样式
            > a {
                float: right;
                margin-top: -40px;
                margin-right: 20px;
            }
        }
    }
    //比价购买 样式
    .tab {
        //设置宽高
        width: 100%;
        height: 34px;
        line-height: 34px;
        //设置字体大小
        font-size: 15px;
        overflow: hidden;
        z-index: 0;
        .backgroundColor();
        margin-top: 20px;
        //设置上下边框
        border-top: 1px solid #c14d00;
        border-bottom: 1px solid #c14d00;
        li {
            //li标签不是tab的子元素 不能在前面加 >
            //内容的w(h)=w(h) - padding- border
            box-sizing: border-box;
            float: left;
            //三等分
            width: 33.33%;
            height: 34px;
            //内容居中
            .textAlign();
            .backgroundColor();
        }
        li.mtab {
            //表示li标签里类名是mtab的元素
            //li .mtab 中间有空格表示 li的后代里类名是mtab的元素
            //中间的li标签设置左右边框
            border-left: 1px solid #c14d00;
            border-right: 1px solid #c14d00;
        }
    }
    //网友评论
    > .product-com-title {
        > div {
            //水平垂直居中
            height: 34px;
            line-height: 34px;
            .textAlign();
            overflow: hidden;
            //背景
            background: #dbdbdb;
            font-size: 14px;
            border-top: 1px solid #fff;
            //圆角
            border-radius: 5px;
            margin: 5px 6px 2px 6px;
        }
    }
    //网友评论 详情 样式
    > .product-com-list {
        //内边距
        padding: 5px;
        > ul {
            > li {
                //
                font-size: 12px;
                color: #666;
                padding: 5px;
                line-height: 18px;
                margin-top: 3px;
                border-bottom: 1px solid #ccc;
                > div {
                    > span {
                        margin: 5px;
                    }
                }
            }
        }
    }
    //更多 区域
    .more-com {
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        background-color: #d4d4d4;
        .textAlign();
        //圆角
        border-radius: 5px;
        margin: 10px 5px;
    }
}
</style>
