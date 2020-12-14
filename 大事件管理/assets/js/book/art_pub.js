$(function() {
    initCate()
        // 加载文章分类方法
    function initCate() {
        $.ajax({
            method: 'GET',
            url: '/my/article/cates',
            success: function(res) {
                if (res.status !== 0) {
                    return layui.layer.msg("失败")
                }

                // 调用模板引擎
                var tplHtml = template('tpl-cate', res);
                $('[name="cate_id"]').html(tplHtml);
                // 调用form.render方法重新渲染
                layui.form.render()
            }
        })
    }
    // 富文本编辑器初始化函数
    initEditor()

    // 封面裁减器
    // 1. 初始化图片裁剪器
    var $image = $('#image')

    // 2. 裁剪选项
    var options = {
        aspectRatio: 400 / 280,
        preview: '.img-preview'
    }

    // 3. 初始化裁剪区域
    $image.cropper(options);

    // 选择文件封面
    $('#btn-chooseImage').on('click', function() {
        $('#coverFile').click()
    })

    // 监听coverFile change事件，获取文件
    $('#coverFile').on('change', function(e) {
        // 获取文件列表
        var files = e.target.files;
        if (files.length == 0) {
            return
        }
        // 根据文件创建url地址
        var newImgURL = URL.createObjectURL(files[0])

        //  先`销毁`旧的裁剪区域，再`重新设置图片路径`，之后再`创建新的裁剪区域`：
        $image
            .cropper('destroy') // 销毁旧的裁剪区域
            .attr('src', newImgURL) // 重新设置图片路径
            .cropper(options) // 重新初始化裁剪区域


    })


    //定义状态 
    var art_status = "已发布";

    // 为存为草稿按钮，绑定事件
    $('#btn2').on('click', function() {
        var art_status = "草稿";
    })


    $('#form-pub').on('submit', function(e) {
        e.preventDefault();

        var formx = new FormData($(this)[0]);
        formx.append('state', art_status);


        $image
            .cropper('getCroppedCanvas', { // 创建一个 Canvas 画布
                width: 400,
                height: 280
            })
            .toBlob(function(blob) { // 将 Canvas 画布上的内容，转化为文件对象
                // 得到文件对象后，进行后续的操作
                formx.append('cover_img', blob);
                console.log(1);
                publishArt(formx)
            })

        // 请求
    })

    // 发表方法
    function publishArt(formx) {

        $.ajax({
            method: 'POST',
            url: '/my/article/add',
            data: formx,
            // 注意，如果数据为formdata格式的数据，必须添加以下两个配置项
            contentType: false,
            processData: false,
            success: function(res) {
                console.log(res);
                console.log(1);
                if (res.status !== 0) {
                    return layui.layer.msg('失败')
                }
                layui.layer.msg('成功')
                location.href = '/大事件管理/book/art_list.html'
            }

        })
    }

})