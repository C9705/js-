$(function() {
    //初始化用户基本信息
    initUserInfo()
    var form = layui.form;
    form.verify({
            nickname: function(value) {
                if (value.length > 6) {
                    return layui.layer.msg('昵称长度必须在1~6个字符之间');
                }
            }
        })
        // 重置表单
    $('#reset').on('click', function(e) {
        e.preventDefault();
        initUserInfo();
    })

    // 表单数据的提交
    $('.layui-form').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            method: 'POST',
            url: '/my/userinfo',
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) {
                    return layui.layer.msg("更新失败");
                }
                layui.layer.msg("更新成功");
                //调用父页面中的方法，重新渲染用户头像和信息
                window.parent.getUserInfo();
            }
        })
    })


    //初始化用户基本信息
    function initUserInfo() {
        $.ajax({
            method: "GET",
            url: '/my/userinfo',
            success: function(res) {
                if (res.status !== 0) {
                    return layui.layer.msg('获取用户信息失败')
                }
                //layui中form.val()快速操作表单值
                // $(".layui-form [name = 'usename']").val(res.data.username);
                form.val('formUser', res.data);
            }
        })
    }
})