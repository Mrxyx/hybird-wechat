mui.init();
document.getElementById('login').addEventListener('tap', function() {

	var usernameInput = document.querySelector('input[name="username"]');
	var passwordInput = document.querySelector('input[name="password"]');

	var userNameVal = usernameInput.value;
	var passwordVal = passwordInput.value;
	console.log("账号是", userNameVal, "密码是", passwordVal);

	if(!userNameVal || !passwordVal) {
		mui.toast('用户名或密码不能为空');
		return;
	}

	mui.ajax({
		url: 'https://api.bmob.cn/1/login',
		data: {
			'username': userNameVal,
			'password': passwordVal
		},
		headers: {
			'X-Bmob-Application-Id': '63b78e1f53c42bb96808867649f61509',
			'X-Bmob-REST-API-Key': 'c7a348507305873e74514a1451bfcf65',
			'Content-Type': 'application/json'
		},
		success: function(resp) {
			mui.toast('登录成功');
			localStorage.setItem('sessionToken', resp.sessionToken);
			localStorage.setItem('username', resp.username);

			mui.later(function(resp) {
				mui.openWindow({
					url: '../main/main.html',
					id: 'main',
					show: {
						aniShow: 'none'
					},
					styles: {
						hardwareAccelerated: true
					}
				});
			}, 1500);
		},
		error: function(error) {
			mui.toast('账号或者密码错误！')
		}
	});

});