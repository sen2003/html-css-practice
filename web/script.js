// 將導航欄固定在畫面頂端
window.onscroll = function () {
    var nav = document.getElementsByTagName('nav')[0];
    if (window.pageYOffset > 0) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
}

// 當提交表單時顯示一條消息
var form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('感謝您的提交！');
});
