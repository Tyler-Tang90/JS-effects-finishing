// 获取 ID
function $(id){
  return document.getElementById(id);
};

// IE浏览器 和 标准浏览器 兼容 / 获取样式属性值
function css(obj, attr){
  return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
};

// 弹出层
function myMask(msg) {
    // 创建阴影层
    var maskShadow = document.createElement('div');
        maskShadow.className = 'mask';
    // 创建弹出层
    var maskBox = document.createElement('div');
    maskBox.className = 'box';
    maskBox.innerHTML = '<div class="alert-content"><br><a href="http://www.tangwei90.com" target="_blank"><img src="./images/logo.png"><br>' + msg + '</a></div><div class="alert-footer"><input type="button" id="btnOK" class="btn" value="关闭"></div>';
    // 把阴影层和弹出层添加到页面中
    document.body.appendChild(maskShadow);
    document.body.appendChild(maskBox);

    // 给关闭图标
    var alertClose = $('alertClose');
    // 获取确定按钮
    var btnOk = $('btnOK');
    // btnOk.onclick = alertClose.onclick = function() {
      btnOk.onclick = function() {
        document.body.removeChild(maskShadow);
        document.body.removeChild(maskBox);
    };
}

// 运动封装
function animate(obj, args){
  clearInterval(obj.timer);
  obj.timer = setInterval(function(){
    var flag = true;
    for( var attr in args){
      var cur = parseInt(css(obj,attr));
      var target = args[attr];
      if(target != cur){
        flag = false;
        var speed = (target - cur) / 6;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        obj.style[attr] = cur + speed + 'px';
      }
    }
    if(flag == true){
      clearInterval(obj.timer);
    }
  },30);
};
