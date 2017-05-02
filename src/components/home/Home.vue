<!-- 首页组件 -->
<template>
    <div>
        <!-- 首页头部 -->
        <HomeHeader></HomeHeader>
        <!-- 搜索框 -->
        <Search></Search>
        <!-- 导航按钮 -->
        <div id='menu' class="menu">
            <ul class='row'>
                <li class="col-xs-3" v-for="(value,index) in menuData" :key="index">
                    <router-link :to="value.titlehref | extractURL">
                        <div v-html="value.img">
                        </div>
                        <p>{{value.name}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- list部分start -->
        <div class="list-tit">
            <router-link to="/moneyctrl">
                <span>超值折扣推荐</span>
            </router-link>
            <router-link to="/moneyctrl">
                <img src="/src/assets/images/more.png" alt="">
            </router-link>
        </div>
        <div class="list-content clearfix">
            <ul>
                <li v-for="value in listData">
                    <router-link :to="'/moneyproduct?productid='+value.productId">
                        <div class="pic" v-html="value.productImgSm" id="homePic">
                        </div>
                        <div class="des clearfix">
                            <div class="tit">
                                {{value.productName}}
                                <span>{{value.productPinkage}}</span>
                            </div>
                            <div class="other">
                                <span>{{value.productFrom}}|{{value.productTime}}</span>
                                <i><img src="/src/assets/images/word.png" alt="">
                                        <p>{{value.productComCount.substr(1,1)}}</p>
                                    </i>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="more">
            <router-link to="/moneyctrl">
                更多优惠信息>>
            </router-link>
        </div>
        <!-- list部分end -->
        <div class="list-tit">
            <a href="/brandTitle">
                <span>品牌排行</span>
            </a>
            <a href="/brandTitle">
                <img src="/src/assets/images/more.png" alt="">
            </a>
        </div>
    </div>
</template>
<script>
import HomeHeader from './HomeHeader.vue'
import Search from '../common/Search.vue'
export default {
    name: 'Home',
    data() {
        return {
            // 导航菜单数据
            menuData: [],
            // 首页下方商品列表数据
            listData: []
        };
    },
    mounted() {
        // 获取导航菜单数据
        this.$http.jsonp('http://139.199.157.195:9090/api/getindexmenu').then(function(res) {
            var result = res.body.result;
            // 对获取到的导航菜单，将其中的图片路径替换为实际路径
            result.forEach(function(v, i) {
                v.img = v.img.replace(/images/g, '/src/assets/images/icons');
            });
            this.menuData = result;
        }, function() {});
        // 获取商品列表数据
        this.$http.jsonp('http://139.199.157.195:9090/api/getmoneyctrl').then(function(res) {
            this.listData = res.body.result;
        })
    },
    updated() {
        // 当获取到数据导航菜单并渲染完成后，为第八个按钮设置点击事件
        document.querySelector("#menu>ul>li:nth-child(8)").onclick = function() {
            // 点击第八个按钮“更多”时，显示/隐藏 后四个菜单
            var divs = document.querySelectorAll("#menu>ul>li:nth-last-child(-n+4)");
            divs.forEach(function(v, i) {
                v.classList.toggle('show');
            });
        }
    },
    components: {
        HomeHeader,
        Search
    }
}
</script>
<style scoped lang="less">
#menu {
    margin-top: 10px;
    margin-bottom: 5px;
    background-color: #fff;
    padding-bottom: 10px;
    overflow: hidden;
    >ul {
        overflow: hidden;
        >li {
            text-align: center;
            margin-top: 15px;
            >a {
                display: inline-block;
                >p {
                    color: #000;
                    font-size: 12px;
                    margin-top: 5px;
                }
            }
        }
        >li:nth-last-child(-n+4) {
            display: none;
        }
    }
}

.list-tit {
    height: 35px;
    background-color: #e4393c;
    background: -webkit-gradient(linear, 0 0, 0 100%, from(#f25e61), to(#e4393c));
    border-bottom: 1px solid #ffc881;
    font-size: 16px;
    padding-left: 10px;
    padding-right: 10px;
    line-height: 35px;
    >a:first-child {
        color: white;
    }
    >a:last-child {
        float: right;
        >img {
            width: 20px;
            vertical-align: text-bottom;
        }
    }
}

.list-content {
    background-color: #fff;
    >ul {
        >li {
            border-bottom: 1px solid #e7e7e7;
            >a {
                width: 100%;
                display: inline-block;
                padding: 10px;
                color: #a1a1a1;
                :hover {
                    color: #a1a1a1;
                }
                >.pic {
                    float: left;
                    width: 110px;
                }
                >.des {
                    padding-left: 110px;
                    >.tit {
                        font-size: 15px;
                        color: #333;
                        line-height: 19px;
                        min-height: 60px;
                        text-aligh: left;
                        >span {
                            color: #ff6c00;
                        }
                    }
                    >.other {
                        >span {
                            float: left;
                        }
                        >i {
                            float: right;
                            >img {
                                width: 14px;
                                height: 15px;
                                float: left;
                                vertical-align: middle;
                                margin-top: 3px;
                            }
                            >p {
                                float: right;
                                margin-left: 3px;
                            }
                        }
                    }
                }
            }
        }
    }
}

.more {
    background-color: #fff;
    padding: 10px;
    padding-bottom: 0;
    margin-bottom: 10px;
    text-align: center;
    >a {
        display: block;
        line-height: 30px;
        background-color: #f4f4f4;
        font-size: 13px;
        background-image: linear-gradient(#ffffff, #f4f4f4);
        border: 1px solid #ddd;
        border-radius: 4px;
        color: #000;
    }
}
</style>
