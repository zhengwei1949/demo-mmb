<!-- 广告组件 -->
<template>
    <div>
        <!--APP下载-->
        <div id="appDown" v-show="AppDown">
            <a href="http://m.manmanbuy.com/?o=download">
                <a class="closeAppDown" href="javascript:;" @click.stop="closeAppDown()">X</a>
                <span class="one">买</span>
                <div class="two">App 下载</div>
            </a>
        </div>
        <!-- 下载app的通栏 -->
        <section class="app-show" v-show="AppShow">
            <a class="closefix" href="javascript:;" @click="closeAppShow()"></a>
            <i class="icon"></i>
            <p class="fixtitle">LoliSugar</p>
            <p class="">全国比价 查历史价格</p>
            <a class="down-btn" href="#">立即打开</a>
        </section>
    </div>
</template>
<script>
	export default {
		name:'Ads',
		data(){
			return {
				AppShow:true,
                AppDown:true
			}
		},
		methods:{
			closeAppShow(){
				this.AppShow = false;
			},
            closeAppDown(){
                this.AppDown = false;
            }
		}
	}
</script>
<style scoped lang="less">
//APP下载
#appDown {
    position: fixed;
    right: 0;
    bottom: 114px;
    z-index: 999;
    text-align: center;
    >a {
        width: 100%;
        .closeAppDown {
            position: absolute;
            top:0;
            left:0;
            color:darkorange;
            font-weight: bolder;
        }
        .one {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: darkorange;
            font-size: 30px;
            margin: 0 auto;
            line-height: 50px;
            display: block;
            color: #fff;
        }
        .two {
            color: #fff;
            width: 100%;
            background-color: darkorange;
            border-radius: 10px;
            text-align: center;
            line-height: 5px;
            font-size: 10px;
            font-weight: normal;
            padding: 5px;
            margin-top: 3px;
        }
    }
}

.app-show {
    position: fixed;
    bottom: 0;
    z-index: 3;
    width: 100%;
    height: 60px;
    background-color: #faf8f5;
    > .closefix {
        position: absolute;
        top: 0;
        left: 0;
        width: 21px;
        height: 21px;
        padding: 19px 12px 20px;
        background-image: url('/src/assets/images/closefix.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 21px;
    }
    > .icon {
        position: absolute;
        top: 50%;
        left: 46px;
        transform: translateY(-50%);
        width: 41px;
        height: 41px;
        background-image: url('/src/assets/images/icons/logo.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 41px;
    }
    > p {
        margin: 3px 84px 0 97px;
        font-size: 14px;
        line-height: 14px;
        color: #999;
    }
    > .fixtitle {
        margin-top: 12px;
        font-size: 18px;
        line-height: 18px;
        color: #888;
    }
    > .down-btn {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        font-size: 13px;
        line-height: 13px;
        background-color: #ff7700;
        border-radius: 4px;
        color: #fff;
        padding: 10px;
        box-shadow: inset 0 -2px #ff5500;
    }
}
</style>
