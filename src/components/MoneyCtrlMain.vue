<!-- 省钱控列表中心组件 -->
<template>
    <div>
        <!-- 省钱控商品部分开始 -->
        <div class="mc_list">
            <router-link :to="'moneyproduct?productid='+value.productId" class="onetwo" v-for="(value,index) in listData" :key="index">
                <div v-html="value.productImgSm" id="MoneyCtrlMainImg"></div>
                <div class="title">
                    {{value.productName}}
                    <i>{{value.productPinkage}}</i>
                </div>
                <div class="other">
                    <span class="more">
    		            {{value.productFrom}}|{{value.productTime}}
    		          </span>
                    <span class="comment">
    		            <i></i>
    		            {{value.productComCount}}
    		          </span>
                </div>
            </router-link>
        </div>
        <!-- 省钱控商品部分结束 -->
        <!-- 省钱控页面切换开始 -->
        <div class="pageChange">
            <div class="left">
                <a class="underPage">上一页</a>
            </div>
            <div class="center">
                <select name="" id="change">
                    <option value="1">1/15</option>
                    <option value="2">2/15</option>
                    <option value="3">3/15</option>
                    <option value="4">4/15</option>
                    <option value="5">5/15</option>
                    <option value="6">6/15</option>
                    <option value="7">7/15</option>
                    <option value="8">8/15</option>
                    <option value="9">9/15</option>
                    <option value="10">10/15</option>
                    <option value="11">11/15</option>
                    <option value="12">12/15</option>
                    <option value="13">13/15</option>
                    <option value="14">14/15</option>
                    <option value="15">15/15</option>
                </select>
            </div>
            <div class="right">
                <a class="nextPage">下一页</a>
            </div>
        </div>
        <!-- 省钱控页面切换结束 -->
    </div>
</template>
<script>
export default {
    name: 'MoneyCtrlMain',
    data() {
        return {
            // 列表数据
            listData: []
        }
    },
    mounted() {
        // 获取列表数据
        this.$http.jsonp('http://139.199.157.195:9090/api/getmoneyctrl').then(function(res) {
            this.listData = res.body.result;
        })
    }
}
</script>
<style scoped lang="less">
.mc_list {
    >a {
        display: block;
        width: 100%;
        height: 128px;
        box-sizing: border-box;
        padding: 14px 5px;
        >.title {
            color: #333333;
            margin-left: 110px;
            word-break: break-all;
            font-size: 15px;
            line-height: 19px;
            min-height: 57px;
            text-align: left;
            font-weight: normal;
            >i {
                color: rgb(255, 108, 0)
            }
        }
        >.other {
            >.more {
                color: #a1a1a1;
                font-size: 12px;
                float: left;
                margin-left: 10px;
            }
            >.comment {
                color: #a1a1a1;
                float: right;
                >i {
                    background-image: url(../../src/assets/images/icons/word.png);
                    width: 16px;
                    height: 15px;
                    display: inline-block;
                    -webkit-background-size: auto 100%;
                    background-size: auto 100%;
                    background-repeat: no-repeat;
                    background-position: center;
                    vertical-align: middle;
                    margin-right: 4px;
                }
            }
        }
    }
}

.pageChange {
    >.left {
        text-align: center;
        float: left;
        width: 30%;
        >a {
            display: inline-block;
            width: 82px;
            height: 33px;
            box-sizing: border-box;
            background-color: #d4d4d4;
            border-bottom: 1px solid #bababa;
            box-shadow: 0 0 1px #666;
            border-radius: 5px;
            text-align: center;
            font-size: 14px;
            line-height: 32px;
            overflow: hidden;
            padding: 0px 5%;
        }
    }
    >.center {
        text-align: center;
        width: 40%;
        display: inline-block;
        >#change {
            width: 130px;
            border: 1px solid #bababa;
            font-size: 16px;
            padding-left: 40px;
            height: 32px;
        }
    }
    >.right {
        text-align: center;
        width: 30%;
        float: right;
        >a {
            display: inline-block;
            width: 82px;
            height: 33px;
            box-sizing: border-box;
            background-color: #d4d4d4;
            border-bottom: 1px solid #bababa;
            box-shadow: 0 0 1px #666;
            border-radius: 5px;
            text-align: center;
            font-size: 14px;
            line-height: 32px;
            overflow: hidden;
            padding: 0px 5%;
        }
    }
}
</style>
