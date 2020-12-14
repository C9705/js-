$(function() {
    var form = layui.form;
    form.verify({
        pass: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],
        repass: function(value) {
            var pwd = $('#newpassword').val()
            if (value !== pwd) {
                return '密码不一致';
            }
        },
        samepass: function(value) {
            if (value == $('#oldpassword').val()) {
                // console.log('不能与原密码相同');
                return '不能与原密码相同'
            }
        }
    })

    $('#rest').on('click', function(e) {
        e.preventDefault();
        console.log($('#layui-form')[0]);
        // $('#layui-form')[0].reset();
        $("#layui-form")[0].reset();
    })
    $('.layui-form').on('submit', function(e) {
        e.preventDefault();

        $.ajax({
            method: 'POST',
            url: '/my/updatepwd',
            data: $(this).serialize(),
            success: function(res) {
                console.log(res);
                if (res.status !== 0) {
                    return layui.layer.msg('更新密码失败');
                }
                layui.layer.msg('Success');
                $("#layui-form")[0].reset();
            }
        })
    })


})