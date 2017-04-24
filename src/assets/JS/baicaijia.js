'use strict';
$(function(){
    //函数调用
    getNav();
    navMove();
    getProduct();
    //顶部导航区
    function getNav(){
        //导航区ajax向服务器请求数据
        $.ajax({
        type:'get',
        url:'http://mmb.ittun.com/api/getbaicaijiatitle',
        dataType:'json',
        success:function(data){
            var html = '';
            html += template('navTmp',data);
            $('#nav ul').html(html);
            //导航样式切换功能
            var as = $('#nav ul li a'),
                a3 = $('#nav ul li:nth-child(1) a');
                a3.addClass('bottom');
                as.click(function(){
                    var that=$(this);
                    $(this).addClass('bottom').parent().siblings('li').children().removeClass('bottom');
                    var title = that.data("id");
                    $.ajax({
                    type:'get',
                    url:'http://mmb.ittun.com/api/getbaicaijiaproduct',
                    dataType:'json',
                    data:{titleid:title},
                    success:function(data){
                    var html = template('productTmp',data);
                    $('#product ul').html(html);
            }
        });
                });
        }
    });
    }
     //导航区右边搜索按钮功能/搜索框切换
    var btn = $('.btn'),
        search = $('#search');
    btn.click(function(){
        $(this).toggleClass("btn1");
        search.toggle();
    });
    //导航区滑动功能
    function navMove(){
        itcast.iScroll({
            swipeDom:document.querySelector('#nav'),
            swipeType:"x",
            swipeDistance:100
        });
    }
    //商品展示区向服务器请求数据
    function getProduct(){
        $.ajax({
            type:'get',
            url:'http://mmb.ittun.com/api/getbaicaijiaproduct?titleid=0',
            dataType:'json',
            success:function(data){
                var html = template('productTmp',data);
                $('#product ul').html(html);
            }
        });
    }
    //点击返回顶部
    var gotop = $('#goTop');
    var top = gotop.offset().top;
    window.onscroll = function(){
        var stop = document.body.scrollTop;
        if(stop > top){
            gotop.css('opacity','0.5');
        }
        else {
            gotop.css('opacity','0');
        }
    }
    
    
});