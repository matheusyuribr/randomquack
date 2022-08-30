function ajax_get(url, callback){
    var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
                console.log("responseText:" + xmlhttp.responseText);
                try{
                    var data = JSON.parse(xmlhttp.responseText);
                } catch(err){
                    console.log(err.message + " in " + xmlhttp.responseText);
				    return;
                }
                callback(data);
            }
        }
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
}

ajax_get(
	"https://random-d.uk/api/random",
	function(data) {
		var html = '<img src="' + data[0]["url"] + '">';
		document.getElementById("image").innerHTML = html;
	}
);

function getImage() {
	function ajax_get(url, callback) {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				console.log("responseText:" + xmlhttp.responseText);
				try {
					var data = JSON.parse(xmlhttp.responseText);
				} catch (err) {
					console.log(err.message + " in " + xmlhttp.responseText);
					return;
				}
				callback(data);
			}
		};

		xmlhttp.open("GET", url, true);
		xmlhttp.send();
	}

	ajax_get(
		"https://random-d.uk/api/random",
		function(data) {
			var html = '<img src="' + data[0]["url"] + '">';
			document.getElementById("image").innerHTML = html;
		}
	);
}