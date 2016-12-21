(function() {
    var tabNav = $('tabNav').getElementsByTagName('li'),
        tabBox = $('tabBox').getElementsByTagName('div');

    for (var i = 0; i < tabNav.length; i++) {
        tabNav[i].cur = i;
        tabNav[i].onmouseover = function() {
            for (var j = 0; j < tabBox.length; j++) {
                tabBox[j].style.display = j == this.cur ? 'block' : 'none';
                tabNav[j].className = j == this.cur ? 'cur' : '';
            }
        };
    }

})();
