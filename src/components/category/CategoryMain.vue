<!-- 比价搜索中心组件 -->
<template>
    <div>
        <!--分类区域-->
        <section id="category">
            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div class="panel panel-default" v-for="(value,i) in tablistData">
                    <div class="panel-heading" role="tab" id="headingOne">
                        <h4 class="panel-title">
                			<a role="button" data-toggle="collapse" data-parent="#accordion" :href="'#collapse'+i" aria-expanded="false" aria-controls="collapseOne" :data-titleId="value.titleId"  @click="show($event)">
                			{{value.title}}<img src="/src/assets/images/list.png" alt=""/>
                			</a>
            			</h4>
                    </div>
                    <div :id="'collapse'+i" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                        <div class="panel-body show">
                            <div class="row">
                                <div class="col-xs-4" v-for="(value,index) in tabData">
                                    <router-link :to="'/productlist?categoryId='+value.categoryId+'&categoryname='+value.category">{{value.category}}</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'CategoryMain',
    data() {
        return {
            // 一级分类
            tablistData: [],
            // 二级分类
            tabData: []
        }
    },
    mounted() {
        // 获取一级分类
        this.$http.jsonp('http://139.199.157.195:9090/api/getcategorytitle').then(function(res) {
            this.tablistData = res.body.result;
        });
    },
    methods: {
        // 点击一级分类，获取该一级分类下的二级分类
        show(e) {
            var titleId = e.target.dataset.titleid;
            this.$http.jsonp('http://139.199.157.195:9090/api/getcategory', {
                params: {
                    'titleid': titleId
                }
            }).then(function(res) {
                this.tabData = res.body.result;
            });
        }
    }
}
</script>
<style scoped>
#accordion {
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
}

.panel-group .panel {
    margin-bottom: -6px;
    border-top-color: #ccc !important;
    border-color: transparent;
}

.panel-heading {
    background: #EDEDED;
}

.panel-title > a {
    color: #000;
    font-size: 16px;
    display: block;
    font-weight: bold;
    text-decoration: none;
}

.panel-title >a>img {
    float: right;
    width: 30px;
    height: 20px;
}

#category .panel-group .panel-collapse > .panel-body {
    background: #f9f9f9;
    padding: 0px;
}

#category .panel-group .panel-collapse > .panel-body>.row>div {
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-right: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
}

#category .panel-group .panel-collapse > .panel-body>.row>div>a {
    display: block;
    width: 100%;
    color: #333;
}
</style>
