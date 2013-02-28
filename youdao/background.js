//function mod_headers(details) {
//	console.log('hello2');
//	var did_set = false;
//    for (var j=0; j<details.requestHeaders.length; j++) {  
//        if (details.requestHeaders[j].name === "Referer") {  
//            details.requestHeaders[j].value = "http://dict.youdao.com/wordbook/wordlist?p=0";
//			did_set = true;
//			//break;
//        }  
//        if (details.requestHeaders[j].name === "User-Agent") {  
//            details.requestHeaders[j].value = "aaa";
//			did_set = true;
//			//break;
//        }  
//    }  
//   if(!did_set) { 
//	   details.requestHeaders.push({name : 'Referer', value :"http://dict.youdao.com/wordbook/wordlist?p=0"});
//   }
//   console.log(details.requestHeaders);
//   return {requestHeaders: details.requestHeaders};
// }

chrome.webRequest.onBeforeSendHeaders.addListener(
    function(info) {
        // Replace the User-Agent header
		if (info.type === 'xmlhttprequest'){
			var headers = info.requestHeaders;
			headers.forEach(function(header, i) {
				if (header.name.toLowerCase() == 'referer') { 
					header.value = "http://dict.youdao.com/wordbook/wordlist?p=0";
				}
				if (header.name.toLowerCase() == 'user-agent') {
					header.value = 'SSSS';
				}
			});  
		}
        return {requestHeaders: headers};
    },
    // Request filter
    {
        // Modify the headers for these pages
        urls: [
			"*://*/*"
        ],
        // In the main window and frames
        types: ["main_frame", "sub_frame", "xmlhttprequest"]
    },
    ["blocking", "requestHeaders"]
);

//console.log('hello');
//chrome.webRequest.onBeforeSendHeaders.addListener(mod_headers, { //Filter
//	urls: ["*://*/*"],
//    types: ["main_frame", "sub_frame", "xmlhttprequest"]
//},["blocking", "requestHeaders"]);
//
