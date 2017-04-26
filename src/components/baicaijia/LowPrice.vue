<template>
    <div>
        <RedHeader></RedHeader>
        <!-- 导航部分 -->
        <div id="lowPriceNav">
            <div class="u-n">
               <div>
                   <ul>
                       <li v-for="value in titleList">
                           <a href="javascript:;" @click="change(value.titleId)">{{value.title}}</a>
                       </li>
                   </ul>
               </div>
           </div>
            <div class="nav-btn" @click="toggleSearch()">
                <a class="btn"></a>
            </div>
        </div>
        <!--搜索框-->
        <div id="lowPriceSearch" v-show="searchShow">
            <div class="search-r fr">
                <button>搜索</button>
            </div>
            <div class="search-l">
                <form>
                    <i></i>
                    <input type="search" name="" placeholder="搜索商品即可查内部券">
                </form>
            </div>
        </div>
        <!-- 广告部分 -->
        <div id="lowPriceBanner">
            <img src="/src/assets/images/banner.png" alt="">
        </div>
        <!-- 商品展示部分 -->
        <div id="lowPriceProduct">
            <ul>
                <li class="product-li" v-for="value in listData">
                    <a href="http://s.click.taobao.com/lkqGHQx"></a>
                    <div class="product-l fl" v-html="value.productImg">
                    </div>
                    <div class="product-r">
                        <div>
                            <div class="product-r-t" v-html="value.productName"></div>
                            <div class="product-r-b" v-html="value.productPrice"></div>
                        </div>
                        <div class="product-r-t1">
                            <div class="product-bar" v-html="value.productCouponRemain">
                            </div>
                            <div class="clearfix product-r-t2">
                                <div class="fl product-r-b1" v-html="value.productCoupon">
                                </div>
                                <div class="fr product-r-b2" v-html="value.productHref">
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <GoTop></GoTop>
        <Ads></Ads>
    </div>
</template>
<script>
import RedHeader from './RedHeader.vue'
import GoTop from './GoTop.vue'
import Ads from './Ads.vue'
export default {
    name: 'LowPrice',
    data() {
        return {
            titleList: [],
            listData: [],
            titleid: 0,
            searchShow:false
        }
    },
    methods: {
        change(num) {
            this.titleid = num;
            this.get();
        },
        toggleSearch(){
        	this.searchShow = !this.searchShow;
        },
        get() {
            this.$http.jsonp('http://139.199.157.195:9090/api/getbaicaijiaproduct', {
                params: {
                    'titleid': this.titleid
                }
            }).then(res => {
                this.listData = res.body.result;
            });
        }
    },
    mounted() {
        this.$http.jsonp('http://139.199.157.195:9090/api/getbaicaijiatitle').then(res => {
            this.titleList = res.body.result;
        });
        this.get();
    },
    components: {
        RedHeader,
        GoTop,
        Ads
    }
}
</script>
<style lang="less">
//商品导航
#lowPriceNav {
    width: 100%;
    border-bottom: 1px solid #eee;
    background: #fff;
    position: relative;
    .u-n {
        margin-right: 40px;
        overflow: hidden;
        >div {
            width: 1000px;
            ul {
                height: 38px;
                li {
                    height: 38px;
                    float: left;
                    line-height: 38px;
                    a {
                        display: block;
                        color: #333;
                        font-size: 14px;
                        margin: 0 12px;
                        height: 38px;
                    }
                }
            }
        }
    }
    .nav-btn {
        width: 39px;
        height: 38px;
        position: absolute;
        top: 0;
        right: 0;
        background-color: #fbfbfb;
        border-left: 1px solid #eee;
        .btn {
            display: block;
            width: 38px;
            height: 38px;
            // position: absolute;
            // top: 0;
            // right: 0;
            // border-left:1px solid #eee;
            text-align: center;
            background: url('/src/assets/images/icon-search.png');
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 22px auto;
            // z-index: 999;
        }
        .btn1 {
            width: 38px;
            height: 38px;
            position: absolute;
            top: 0;
            right: 0;
            border-left: 1px solid #eee;
            text-align: center;
            background-color: #fbfbfb;
            background: url('/src/assets/images/icon-colse.png');
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 22px auto;
        }
    }
}

// 商品搜索
#lowPriceSearch {
    position: absolute;
    background-color: #f7f7f7;
    width: 100%;
    height: 55px;
    padding: 10px;
    z-index: 10;
    box-shadow: 0px 0px 10px 5px #fff;
    >.search-l {
        position: relative;
        width: 90%;
        height: 35px;
        margin-right: 30px;
        padding-right: 10px;
        input {
            padding-left: 30px;
            font-size: 14px;
            width: 100%;
            height: 35px;
            outline: none;
            border: 1px solid #eee;
        }
        i {
            position: absolute;
            top: 5px;
            left: 5px;
            width: 30px;
            height: 30px;
            background: url('/src/assets/images/icon-search-white.png');
            background-size: 25px 25px;
            background-repeat: no-repeat;
        }
    }
    >.search-r {
        height: 35px;
        button {
            width: 100%;
            text-align: center;
            height: 35px;
            font-size: 16px;
            line-height: 35px;
            color: #000;
            background-color: #f7f7f7;
            border: none;
            outline: none;
        }
    }
}

//广告部分
#lowPriceBanner {
    margin-top: 10px;
    width: 100%;
    img {
        width: 100%;
    }
}

//商品列表
#lowPriceProduct {
    width: 100%;
    padding: 10px 0 10px 5px;
    min-width: 320px;
    .product-li {
        position: relative;
        margin-top: 10px;
        background-color: #fff;
        a {
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0px;
            left: 0px;
            z-index: 1;
        }
        .product-l {
            width: 130px;
            height: 130px;
            img {
                width: 130px;
                height: 130px;
            }
        }
        .product-r {
            margin-left: 140px;
            .product-r-t {
                color: #000;
                font-size: 14px;
            }
            .product-r-b {
                font-size: 24px;
                color: #fc353a;
                margin-top: 4px;
                position: relative;
                width: 100%;
                height: auto;
                overflow: visible;
                i {
                    font-size: 16px;
                    vertical-align: middle;
                    font-style: normal;
                    margin-right: 4px;
                }
                em {
                    font-size: 12px;
                    vertical-align: middle;
                    font-style: normal;
                }
                del {
                    text-decoration: line-through;
                    font-size: 13px;
                    color: #a8a8a8;
                    margin-left: 12px;
                    vertical-align: middle;
                }
            }
            .product-r-t1 {
                box-sizing: border-box;
                width: 100%;
                .product-bar {
                    .bar {
                        height: 25px;
                        overflow: hidden;
                        a.goquan {
                            display: block;
                            position: absolute;
                            width: 120px;
                            height: 60px;
                            bottom: 0px;
                            left: 130px;
                            z-index: 3;
                        }
                        i {
                            position: relative;
                            box-sizing: border-box;
                            width: 82px;
                            height: 14px;
                            border: 1px solid #fc353a;
                            border-radius: 6px;
                            color: #fff;
                            font-weight: 900;
                            background: #ffb7b7;
                            text-align: center;
                            overflow: hidden;
                            display: inline-block;
                            em {
                                position: absolute;
                                top: 0;
                                left: 0;
                                height: 100%;
                                border-radius: 5px;
                                background: #fc353a;
                                display: block;
                            }
                            span {
                                font-size: 12px;
                                line-height: 11px;
                                display: block;
                                width: 100%;
                                height: 100%;
                                text-align: center;
                                position: absolute;
                                top: 0px;
                                left: 0px;
                            }
                        }
                        b {
                            font-weight: normal;
                            font-size: 12px;
                            vertical-align: 3px;
                            margin-left: 10px;
                            color: #fc353a;
                        }
                    }
                }
                .product-r-t2 {
                    margin-top: 15px;
                    .product-r-b1 {
                        a {
                            border: 1px dotted #e4393c;
                            height: 26px;
                            line-height: 26px;
                            text-align: center;
                            display: block;
                            padding: 0px 5px;
                            font-size: 12px;
                            color: #e4393c;
                            position: relative;
                            z-index: 1;
                        }
                    }
                    .product-r-b2 {
                        margin-right: 5px;
                        a {
                            height: 28px;
                            line-height: 28px;
                            text-align: center;
                            display: block;
                            background-color: #ff5e5d;
                            color: #ffffff;
                            border-radius: 4px;
                            padding: 0px 5px;
                            font-size: 12px;
                            position: relative;
                            z-index: 1;
                        }
                    }
                }
            }
        }
    }
}
</style>
