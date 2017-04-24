'use strict';
$(function() {
    //var v = parseUrl();
    //var getid = v['categoryid'];
    //通过url获取参数的方法，获取上一个页面的a链接传入的参数
    var getid = GetQueryString("categoryid"); //商品分类的id
    var categoryName = GetQueryString("categoryname"); //商品分类列表的id
    //window.localStorage.setItem("categoryName", categoryName);
    //window.sessionStorage.setItem("categoryName", categoryName);

    //动态生成页面的标题
    $("title").html(categoryName + "比价选购 - 慢慢买比价网");

    var getpageid = GetQueryString("pageid"); //页码id = 1
    var maxpageid; //定义最大的页码id
    var flag = true; //开启节流阀
    //console.log(categoryName);
    Page(getpageid); //页面加载时默认执行第一页
    //点击上一页下一页
    // 需求：1.点击上一页回到上一页 点击下一页回到下一页 如果是第一页或者是最后一页则不进行页面的渲染
    //2.点击上下页显示页面时，中间的select下拉框也要动态跟着变化

    $('#productList .page a').click(function() {
        //1.点击上一页回到上一页 点击下一页回到下一页 如果是第一页或者是最后一页则不进行页面的渲染
        if (this.dataset.index == 'up') { //如果当前按钮的属性index是up 说明是下一页
            getpageid < maxpageid ? getpageid++ : 0; //那么满足页码id < 最大页码id 就让页码id ++，否则就不进行操作
        } else { //如果当前按钮的属性index是down 说明是上一页
            getpageid > 1 ? getpageid-- : 0; //那么满足页码id > 1  就让页码id -- ，否则就不进行操作
        }
        //Page(getpageid); //在页面上渲染对应的页码 页面
        window.location.href = 'productlist.html?categoryid='+ getid +'&categoryname='+ categoryName +'&pageid='+ getpageid;
        //2.点击上下页显示页面时，中间的select下拉框也要动态跟着变化
        /*$('#selectPage').children().each(function(i, v) { //获取下拉框中的所有option按钮 遍历
            if ((i + 1) == getpageid) { //option（i）是从0开始的  如果i+1= 页码id
                this.selected = true; //那么就选中
                //console.log(i+","+v);// i 是 option的索引  v是每一个option标签
            }
        });*/


    });

    //改变select下拉框中的值 让当前页面对应的显示
    $('select').change(function(e) {
        console.log($(this).val());
        Page($(this).val()); //把当前下拉框的值传入page方法中  渲染到页面中
    })

    function Page(num) { //传入页码 参数
        $.ajax({
            url: "http://139.199.157.195:9090/api/getproductlist",
            //url: "http://mmb.ittun.com/api/getproductlist",
            data: { "categoryid": getid, "pageid": num },
            success: function(data) {
                var html = template("productListTmp", data);
                //li:last-child li的父元素中的最后一个li标签
                //$(".category-title>.breadcrumb>li:last-child").html(categoryName);
                //li:last-of-type li的同类型中的最后一个li标签

                //获取当前页面共需要几页
                maxpageid = Math.ceil(data.totalCount / data.pagesize);
                $(".media").html(html); //把分类列表功能数据加载到页面中

                //把获取到的标题加载到面包屑标题中
                $(".category-title>.breadcrumb>li:last-of-type").html(categoryName);

                //遍历media的每一个a标签，保存id

                $(".media >a").each(function(i,v){
                    $(v).click(function () {
                        window.sessionStorage.setItem("categoryName", categoryName);
                        window.sessionStorage.setItem("getid", getid);
                        window.sessionStorage.setItem("getpageid", getpageid);

                    })
                })

                if (flag) { //页面刚加载时执行下拉框页码操作
                    //select
                    html = ''; //html变量已经用完 可以复用 不用重新定义一个新的变量 直接先清空即可
                    for (var i = 1; i <= maxpageid; i++) {
                        //把页码 1/3  动态加到下拉框中
                        html += '<option value="' + i + '">' + i + '/' + maxpageid + '</option>';
                    }
                    $('#selectPage').html(html); //把option数据加载到下拉框中
                    $('#selectPage').children().each(function(i, v) { //获取下拉框中的所有option按钮 遍历
                        if ((i + 1) == getpageid) { //option（i）是从0开始的  如果i+1= 页码id
                            this.selected = true; //那么就选中
                            //console.log(i+","+v);// i 是 option的索引  v是每一个option标签
                        }
                    });
                    flag = false; //只要一获取到下拉框的数据，就关闭节流阀  以免下一次调用page函数时重复渲染
                }
            }

        })
    }

    //获取url参数的方法：
    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    }

    /*获取url参数的方法二：
     function parseUrl() {
     var url = location.href;
     var i = url.indexOf('?');
     if (i == -1) return;
     var querystr = url.substr(i + 1);
     var arr1 = querystr.split('&');
     var arr2 = new Object();
     for (i in arr1) {
     var ta = arr1[i].split('=');
     arr2[ta[0]] = ta[1];
     }
     return arr2;
     }
     */
})

/* //添加点击事件
 $('#prev').click(function(){
 if(pageid<=1) return;
 var location = window.location.href;
 window.location = location.substr(0,location.length-1)+(parseInt(pageid)-1);
 });
 $('#next').click(function(){
 if(pageid>=c) return;
 var location = window.location.href;
 window.location = location.substr(0,location.length-1)+(parseInt(pageid)+1);
 });*/
