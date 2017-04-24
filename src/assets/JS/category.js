/*
 * @Author: Administrator
 * @Date:   2017-03-29 23:26:25
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-03-30 10:02:41
 */

'use strict';
$(function () {
    setCategoryTitle();
    function setCategoryTitle() {
        $.ajax({
            //�������api
            url: "http://139.199.157.195:9090/api/getcategorytitle",
            //url: "http://mmb.ittun.com/api/getcategorytitle",
            //��ȡ�����������
            success: function (data) {
                //�ѷ�������е����ݴ���ģ����
                var html = template("categoryTitleTmp", data);
                //��ģ���е����ݴ��뵽����ҳ����ȥ
                $("#category>.panel-group").html(html);
                var categoryTitle = $("#category>.panel-group>.panel-default>.panel-heading>h4>a");
                //���������ע�����¼�
                categoryTitle.on("click", function (e) {
                    //��ȡ��ǰ������Զ�������
                    var titleId = $(this).attr("data-titleId");
                    $.ajax({
                        //�����Ӧ�ķ����б�api
                        url: "http://139.199.157.195:9090/api/getcategory?titleid=" + titleId,
                        //url: "http://mmb.ittun.com/api/getcategory?titleid=" + titleId,//���뵱ǰ�����id
                        success: function (data) {
                            //�ѷ�������еķ����б����ݴ���ģ����
                            var html = template("categoryTmp", data);
                            //��ȡҳ���н������ݵ�Ԫ��
                            var panelBody = $(e.target).parents('div.panel-heading').next("div").children('.panel-body');
                            //console.log(panelBody);//0:div.panel-body.show
                            //�ѷ����б���Ⱦ��ҳ����
                            panelBody.html(html);
                            //var panelBody=$(e.target).parent().parent().parent().find(".collapseOne").find(".panel-body");
                            //console.log(panelBody);//selector:".collapseOne .panel-body"

                        }
                    })
                })

            }
        })
    }
})