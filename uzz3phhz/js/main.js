var searchTest = document.getElementById("searchTest");
var name = prompt("请输入昵称！");
document.getElementById("searchTest").value = name + "，请输入你想要的图片...";

function searchTestClear() {
	document.getElementById("searchTest").value = "";
}

function getCookie(name) {
	var match = document.cookie.match(new RegExp('(^|)' + name + '=([^;]*)'));
	if (match) return unescape(match[2]);
}
