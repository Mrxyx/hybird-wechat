mui.init();

mui.plusReady(function() {
	
	var parentWv = plus.webview.currentWebview();
	
	var pageList = [
	
	{
		url:'../message/message.html',
		id:'message'
	},
	{
		url:'../contact/contact.html',
		id:'contact'
	},
	{
		url:'../discovery/discovery.html',
		id:'discovery'
	},
	{
		url:'../mine/mine.html',
		id:'mine'
	},
	];
	
	for (var i = 0; i < pageList.length; i++) {
		var url = pageList[i].url;
		var id = pageList[i].id;
		console.log(url+"======"+id);
		var newWv = plus.webview.create(url, id, {
			bottom:'50px',
			top:'0px',
			popGesture:'none'
		})
		
		i===0?newWv.show():newWv.hide();
		
		parentWv.append(newWv);
	}
	
	
	var showWv = 'message';
	mui('.mui-bar').on('tap','.mui-tab-item', function(e) {
		var showWvId = this.dataset.id;
		
		if(showWv === showWvId) {
			return;
		}
		
		plus.webview.getWebviewById(showWv).hide();
		
		console.log(showWvId);
		
		var willShowWv = plus.webview.getWebviewById(showWvId);
		willShowWv.show('none', 0, function() {
			//展示webview的时候触发的事件 防止通讯录展示的时候显示不完整
			mui.fire(willShowWv, 'showpage'); 
		});
		
		showWv = showWvId;
	});
	
});
