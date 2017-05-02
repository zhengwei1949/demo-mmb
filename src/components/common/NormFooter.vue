<!-- 默认底部组件 -->
<template>
    <div>
        <!-- 底部 -->
        <div class="mmb-footer">
            <!--上方链接-->
            <div class="footer-top clearfix">
                <a href="#">登录</a><a href="#">注册</a>
                <a id="mmbTop" @click="mmbTop()">
                    <span class="glyphicon glyphicon-arrow-up"></span>返回顶部
                </a>
            </div>
            <!--下方文字-->
            <div class="footer-bottom">
                <a href="#"><span>手机APP下载</span>&nbsp;手机版 </a><span>--掌上比价平台</span>
                <br>
                <p>demo.lolisugar.com</p>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
//页面底部
.mmb-footer {
    margin-top: 20px;
    background-color: #EFEFEF;
    //上方链接
    >.footer-top {
        border-top: 1px solid #c4c4c4;
        border-bottom: 1px solid #c4c4c4;
        >a {
            float: left;
            width: 30%;
            font-size: 14px;
            text-align: center;
            color: #000;
            height: 34px;
            line-height: 34px;
            border-right: 1px solid #c4c4c4;
            //返回顶部按钮
            &:last-child {
                width: 40%;
                border-right: none;
                >span {
                    color: #747474;
                    font-weight: bold;
                }
            }
            &:hover,
            &:focus {
                text-decoration: none;
            }
        }
    }
    //下方文字
    >.footer-bottom {
        text-align: center;
        margin: 10px 0;
        font-size: 10px;
        //app链接
        >a {
            color: #000;
            >span {
                color: red;
            }
            &:hover,
            &:focus {
                text-decoration: none;
            }
        }
    }
}
</style>
<script>
    export default {
        name:'NormFooter',
        methods: {
            mmbTop(){
                $(document.body).animate({'scrollTop':'0px'},200);
            }
        }
    }
</script>
