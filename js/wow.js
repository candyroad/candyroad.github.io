/*** sniff the UA of the client and show hidden div's for that device ***/
var customizeForDevice = function(docLoaded){
    var ua = navigator.userAgent;
    var checker = {
      iphone: ua.match(/(iPhone|iPod|iPad)/),
      blackberry: ua.match(/BlackBerry/),
      android: ua.match(/Android/)
    };
    if (checker.android){
        // $('.android-only').show();
      window.location.href = "https://play.google.com/store/apps/details?id=com.roadkill.candyroad";
    }
    else if (checker.iphone){
			alert("iphone not loaded")
			if(docLoaded) {
				alert("iphone docloaded")
				window.location.href = "https://itunes.apple.com/us/app/candy-road-endless-arcade-flapper/id1119010075";
			}
        // $('.idevice-only').show();
    }
    else if (checker.blackberry){
        // $('.berry-only').show();
    }
    else {
        // $('.unknown-device').show();
      window.location.href = "http://www.candyroad.co";
    }
}
customizeForDevice(false);

window.onload=function() {
	alert("loaded")
	customizeForDevice(true);
}
