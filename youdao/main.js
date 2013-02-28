document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('submit').addEventListener('click', add);
});

function add(btn){
	getCookies("http://dict.youdao.com", function(cookie){
		var ok = '';
		for (var i=0; i<cookie.length; i++) {
			ok = ok + cookie[i].name + '=' + cookie[i].value + '; ';
		}
		ok = escape(ok);
		var query = document.getElementById('word').value;
		var http = new XMLHttpRequest();
		//var url = 'http://dict.youdao.com/wordbook/wordlist?action=add';
		var url = 'http://dictbook.sinaapp.com/';
		var params = 'word=' + query + '&ok=' + ok;
		http.open("POST", url, true);
		http.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		http.onreadystatechange = function() {
			if(http.readyState == 4 && http.status == 200) {
					//alert(http.responseText);
				}
		}
		http.send(params);
		console.log(params)
	});
};

function getCookies(domain, callback) {
	chrome.cookies.getAll({"url": domain}, function(cookie) {
		if (callback) {
			callback(cookie);
		}
	});
}
