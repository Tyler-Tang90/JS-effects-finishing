function toNum(num) { //以为当是个位数时，要显示01的状态
    if (num < 10) {
        return '0' + num;
    } else {
        return "" + num;
    }
};
window.onload = function() {
    var obj = document.getElementsByTagName("img"); // 获取图片
    function tick() {
        var time = new Date();
        var time1 = toNum(time.getHours()) + toNum(time.getMinutes()) + toNum(time.getSeconds()); //获取小时分钟秒的一个字符串
        // console.log(time1);
        for (var i = 0; i < obj.length; i++) //一个有六张图片，前两张代表小时，中间两张代表分钟，后两张代表秒，
        {
            obj[i].src = "images/" + time1[i] + '.png'; //时间字符串是什么，就显示什么图片
        }
    }
    window.setInterval(tick, 1000);
    tick(); //为了一开始不显示000000

    var box = document.getElementById('weekdays');
    var date = document.createElement('p');
    date.innerHTML = '<span>' + 'MON' + '</span> <span>' + 'TUE' + '</span> <span>' + 'WED' + '</span> <span>' + 'THU' + '</span> <span>' + 'FRI' + '</span> <span>' + 'SAT' + '</span> <span>' + 'SUN' + '</span>';
    box.appendChild(date);
    var d = new Date();
    var span = date.querySelectorAll('span');
    d.getDay() == 0 ? span[6].className = 'active' : span[d.getDay() - 1].className = 'active';
};
