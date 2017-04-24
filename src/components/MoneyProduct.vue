<!-- 商品折扣详情 -->
<template>
    <div>
        <div class="product" v-for="value in productData" id="MoneyProductDetails">
            <h3>{{value.productName}}</h3>
            <div class="info">
                <span>{{value.productFrom}}</span>
                <span>{{value.productTime}}</span>
                <span>{{value.productTips}}</span>
            </div>
            <div class='content'>
            	<div class="content-img" v-html="value.productImgSm"></div>
                <p>海天的金标生抽酱油，采用了非转基因大豆以及小麦发酵而成，而自然鲜的口感是有些鲜甜鲜甜的感觉，非常适合用来作为日常炒菜用的调味</p>
                <p>目前京东商城移动端售价10.9元，不错的凑单品，刚需可入，规格1.28L。</p>
            </div>
            <div class="img" v-html="value.productImgLg">
            </div>
            <div class="area" v-html="value.productCity">
            </div>
            <div class="golink">
                <img src="../assets/images/icons/car.png" alt="">
                <span>前往购买</span>
            </div>
        </div>
        <div class='erweima'>
            <img src="../assets/images/icons/mmbweixin2.png" alt="">
        </div>
        <div class="comment clearfix" v-html="value.productComment" v-for="value in productData" id="MoneyProductComment">
        </div>
    </div>
</template>
<script>
	export default {
		name:'MoneyProduct',
		data(){
			return {
				// 商品详情
				productData:[]
			}
		},
		mounted(){
			// 获得商品id
			var productid = this.$route.query.productid;
            var path = this.$route.path;
            var url = "";
            if (path.indexOf('moneyproduct')!==-1) {
                url = 'http://139.199.157.195:9090/api/getmoneyctrlproduct';
            }else{
                url = 'http://139.199.157.195:9090/api/getdiscountproduct'
            }
			// 获取商品详情数据
			this.$http.jsonp(url,
				{params:{'productid':productid}}).then(res=>{
					this.productData = res.body.result;
				});
		}
	}
</script>

<style scoped lang="less">
.product {
    padding: 15px 10px 30px;
    position: relative;
    border-bottom: 1px solid #e6e6e6;
    >h3 {
        font-size: 18px;
        color: #5a5a5a;
        font-weight: bold;
    }
    >.info {
        >span {
            color: #999999;
            line-height: 50px;
        }
    }
    >.golink {
        text-align: center;
        height: 40px;
        background-color: #FF9000;
        border-radius: 6px;
        line-height: 40px;
        >img {
            width: 25px;
            display: inline-block;
            vertical-align: middle;
            margin-top: -2px;
        }
        >span {
            vertical-align: middle;
            color: #fff;
            font-size: 16px;
        }
    }
}

.erweima {
    width: 100%;
    text-align: center;
    margin: 10px auto;
    >img {
        width: 100%;
    }
}
</style>
