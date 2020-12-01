window.onload = function() {
    var data = new Date
    document.querySelector('#HH').innerHTML = padZero(data.getHours())
    document.querySelector('#MM').innerHTML = padZero(data.getMinutes())
    document.querySelector('#SS').innerHTML = padZero(data.getSeconds())
    setInterval(function() {
        var data = new Date
        document.querySelector('#HH').innerHTML = padZero(data.getHours())
        document.querySelector('#MM').innerHTML = padZero(data.getMinutes())
        document.querySelector('#SS').innerHTML = padZero(data.getSeconds())
    }, 1000)

    function padZero(n) {
        return n > 9 ? n : '0' + n
    }

}