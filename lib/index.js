var ipv4Path = "https://api.ipify.org/";
var ipv6Path = "https://api6.ipify.org/";
function browserReq(endpoint) {
	return new Promise(function (resolve, reject) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (this.readyState === 4 && this.status === 200) {
				resolve(this.responseText);
			}
			if (this.readyState === 4 && this.status !== 200) {
				reject('Request Failed');
			}
		};
		xhttp.open("GET", endpoint, true);
		xhttp.send();
	});
}

function serverReq(endpoint) {
	var https = require('https');
	return new Promise(function(resolve, reject) {
		https.get(endpoint, function(resp) {
			var data = '';
			resp.on('data', function(chunk) {
				data += chunk;
			});
			resp.on('end', function() {
				resolve(data);
			});
		}).on("error", function(err) {
			reject(err);
		});
	});
}

exports.ipv4 = function (endpoint) {
	var apiPath = endpoint || ipv4Path;
	if (typeof(module) === 'undefined') {
		return browserReq(apiPath)
	}
	return serverReq(apiPath)
};

exports.ipv6 = function (endpoint) {
	var apiPath = endpoint || ipv6Path;
	if (typeof(module) === 'undefined') {
		return browserReq(apiPath)
	}
	return serverReq(apiPath)
};
