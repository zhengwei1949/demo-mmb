<!-- 返回顶部组件 -->
<template>
    <div>
        <!--返回顶部-->
        <div id="goTop" v-show="show">
            <a href="#" class="glyphicon glyphicon-arrow-up"></a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'GoTop',
    data() {
        return {
            // show:false
            scrollTop:0
        }
    },
    computed:{
    	show:function(){
    		return 1;
    	}
    },
    mounted() {
        window.onscroll = function() {
            this.scrollTop = document.body.scrollTop;
        };
    }
}
</script>
<style scoped lang="less">
//返回顶部
#goTop {
    position: fixed;
    z-index: 999;
    bottom: 60px;
    right: 8px;
    width: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 30px;
    height: 40px;
    border-radius: 20px;
    background-color: #000000;
}
</style>
