var setVideoPosition = function() {
	var video = document.getElementsByTagName("video")[0];
	var width = window.innerWidth;
	var height = window.innerHeight;
	var widthHeightRatio = 1600/1200;
	var vidWidth = height * widthHeightRatio;
	var leftMargin = (width - vidWidth) / 2;
	video.style.marginLeft = JSON.stringify(leftMargin) + "px";
}

var setLogoPosition = function() {
	var gamelogo = document.getElementsByClassName("game_logo_wrapper")[0];
	var width = window.innerWidth;
	var height = window.innerHeight;
	var widthHeightRatio = 777/292;
	var logoHeight = .1*height;
	var logoWidth = logoHeight * widthHeightRatio;
	var leftMargin = (width - logoWidth)/2;
	gamelogo.style.marginLeft = JSON.stringify(leftMargin) + "px";
	var topMargin = height * .01;
	gamelogo.style.marginTop = JSON.stringify(topMargin) + "px";
}
setVideoPosition();
setLogoPosition();
