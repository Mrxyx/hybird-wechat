mui.init();

//1自定义事件
document.addEventListener('showpage', function() {
	var header = document.querySelector('header.mui-bar');
	var list = document.getElementById('list');
	//calc hieght
	list.style.height = (document.body.offsetHeight - header.offsetHeight) + 'px';
	console.log("内容高"+document.body.offsetHeight+"===="+"导航高度"+header.offsetHeight);
	//create
	window.indexedList = new mui.IndexedList(list);
});


//使用下面方法将导致进入通讯录界面时界面显示不完整 
//所以封装为上面的方法 在main.js中进行相应的回调
//mui.ready(function() {
//	var header = document.querySelector('header.mui-bar');
//	var list = document.getElementById('list');
//	//calc hieght
//	list.style.height = (document.body.offsetHeight - header.offsetHeight) + 'px';
//	console.log("内容高"+document.body.offsetHeight+"===="+"导航高度"+header.offsetHeight);
//	//create
//	window.indexedList = new mui.IndexedList(list);
//});