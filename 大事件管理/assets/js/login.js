$(function() {
    // 登录 / 注册切换
    $('#reg-box').on('click', '#link_login', function() {
        $('#reg-box').hide();
        $('#login-box').show();
    })
    $('#login-box').on('click', '#link_reg', function() {
        $('#login-box').hide();
        $('#reg-box').show()
    })

    //登陆-注册切换--end--

    // 登录表单预验证
    //从layui中获取form元素
    var form = layui.form
    var layer = layui.layer
        // 通过form.verify()自定义规则
    form.verify({
        username: function(value, item) { //value：表单的值、item：表单的DOM对象
            if (!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)) {
                return '用户名不能有特殊字符';
            }
            if (/(^\_)|(\__)|(\_+$)/.test(value)) {
                return '用户名首尾不能出现下划线\'_\'';
            }
            if (/^\d+\d+\d$/.test(value)) {
                return '用户名不能全为数字';
            }

            //如果不想自动弹出默认提示框，可以直接返回 true，这时你可以通过其他任意方式提示（v2.5.7 新增）
            if (value === 'xxx') {
                alert('用户名不能为敏感词');
                return true;
            }
        }

        //我们既支持上述函数式的方式，也支持下述数组的形式
        //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
        ,
        pass: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],
        repass: function(value) {
            var pwd = $('#reg_password').val()
            if (value !== pwd) {
                return '密码不一致';
            }
        }
    });


    // 调用注册接口
    $('#form_reg').on('submit', function(e) {
        // 防止form跳转
        e.preventDefault();
        var data = {
            username: $("#form_reg [name = 'usename']").val(),
            password: $("#form_reg [name = 'password']").val()
        }
        $.post('/api/reguser', data, function(res) {
            if (res.status !== 0) {
                //使用layer 的提示组件
                return layer.msg(res.message);
            }
            layer.msg('Success');
            //重置表单
            $('#form_reg')[0].reset()

            //模拟用户点击去登录
            $('#link_login').click();
        })
    })

    //调用登录接口
    $('#layui-form').on('submit', function(e) {
        e.preventDefault()
        $.post('/api/login', $(this).serialize(), function(res) {
            if (res.status !== 0) {
                return layer.msg(res.message);
            }
            layer.msg('Success');
            console.log(res.token);
            //将token存到本地
            localStorage.setItem('token', res.token);
            //跳转
            $('#layui-form')[0].reset()
                // location.href = '/大事件管理/home/index.html';
            location.href = '../home/index.html';
        })
    })
})