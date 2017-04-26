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
                <a @click="pagePrev()" class="underPage">上一页</a>
            </div>
            <div class="center">
                <select name="" id="change" v-model="nowPage" @change="pageChange()">
                    <option :value="n" v-for="n in totalPage" :selected="n==nowPage">{{n}}/{{totalPage}}</option>
                </select>
            </div>
            <div class="right">
                <a @click="pageNext()" class="nextPage">下一页</a>
            </div>
        </div>
        <!-- 省钱控页面切换结束 -->
    </div>
</template>
<script>
// 发送请求标志位
let sendFlag = false;
export default {
    name: 'MoneyCtrlMain',
    data() {
        return {
            // 列表数据
            listData: [],
            // 发送请求（数据）中的页数
            pageid:1,
            // 总页数
            totalPage:1,
            // 当前显示的页数
            nowPage:1
        }
    },
    mounted() {
        this.getData((resBody)=>{
            this.totalPage = Math.ceil(resBody.totalCount/resBody.pagesize);
        });
    },
    methods:{
        getData(callback){
            // 获取列表数据
            this.$http.jsonp('http://139.199.157.195:9090/api/getmoneyctrl',{
                params:{
                    'pageid':this.pageid
                }
            }).then(function(res) {
                // 返回至顶部
                document.body.scrollTop = 0;
                // 更新页面数据
                this.listData = res.body.result;
                // 设置当前页为数据对应的页数
                this.nowPage = this.pageid;
                sendFlag = false;
                if (callback) {
                    callback(res.body);
                }
            });
        },
        pageNext(){
            // 如果已发送请求，则直接返回
            if (sendFlag) {return;}
            sendFlag = true;
            // 判断是否为最大页
            if (this.pageid>=this.totalPage) {return;}
            this.pageid++;
            this.getData();
        },
        pagePrev(){
            // 如果已发送请求，则直接返回
            if (sendFlag) {return;}
            sendFlag = true;
            // 判断是否为最小页
            if (this.pageid<=1) {return;}
            this.pageid--;
            this.getData();
        },
        pageChange(){
            // 如果已发送请求，则直接返回
            if (sendFlag) {return;}
            sendFlag = true;
            // 将要申请的页数设置为双向绑定的select选中的value
            this.pageid = this.nowPage;
            this.getData();
        }
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
                    background-image: url('/src/assets/images/word.png');
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
