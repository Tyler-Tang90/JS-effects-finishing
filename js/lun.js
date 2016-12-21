(function() {
    var bannerImg = $('bannerImg'),
        bannerNav = $('bannerNav').getElementsByTagName('li'),
        banner = $('banner'),
        prv = $('prv'),
        next = $('next');
    // 复制第一个图片给最后一个
    var newImg = bannerImg.getElementsByTagName('li')[0].cloneNode(true);  // 克隆一个
    bannerImg.appendChild(newImg); // 添加一个
    var time = 2000; // 定义轮播图切换时间
    var len = bannerNav.length + 1; // 轮播次数, +1 是为了使图片实现无缝滚动
    var width = 1000; // 轮播图每张宽度
    var cur = 0; // 默认显示的第一帧
    var timer = setInterval(move, time); // 给轮播一个定时
    // 给banner加鼠标移入事件
    banner.onmouseover = function(){
      clearInterval(timer);
    };
    // 给 banner 加鼠标移出事件
    banner.onmouseout = function(){
      timer = setInterval(move, time);
    };

    //上一页
prv.onclick = function(){
	if(cur == 0){
		cur = 6;
	}
	cur = cur - 1;
	animate(bannerImg, {left: -width * cur});
	for( var a = 0; a < len - 1; a++ ){
		bannerNav[a].style.background = a == cur ? '#db192a' : '#fff';
	}
};

//下一页
next.onclick = function(){
	if(cur == 5){
		cur = -1;
	}
	cur = cur + 1;
  animate(bannerImg, {left: -width * cur});
	for( var b = 0; b < len - 1; b++){
    bannerNav[b].style.background = b == cur ? '#db192a' : '#fff';
	}
};

    // 给圆点添加鼠标移入事件
    for( var i = 0; i < len -1; i++){
      bannerNav[i].cur = i;
      bannerNav[i].onmouseover = function(){
        cur = this.cur - 1;
        move();
      }
    }
    // 运动
    function move() {
        cur++;
        if (cur == len) {
            cur = 1;
            bannerImg.style.left = 0;
        }
        animate(bannerImg, {left: -width * cur});
        // 改变圆点的样式
        for (var i = 0; i < len - 1; i++) {
            bannerNav[i].style.background = i == cur ? '#db192a' : '#fff';
        }
        // 图片切换到最后一张的时候,把第一个圆点变为红色
        if (cur == len - 1) {
            bannerNav[0].style.background = '#db192a';
        }
    }
})();
