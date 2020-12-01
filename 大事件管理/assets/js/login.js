$(function() {
    $('#reg-box').click(function() {
        $(this).hide();
        $('#login-box').show();
    })
    $('#login-box').click(function() {
        $(this).hide();
        $('#reg-box').show()
    })
})