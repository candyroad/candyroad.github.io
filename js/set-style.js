// var setVideoPosition = function() {
// 	var video = document.getElementsByTagName("video")[0];
// 	var width = window.innerWidth;
// 	var height = window.innerHeight;
// 	var widthHeightRatio = 1600/1200;
// 	// if(height/width > 1) {
// 	// 	video.style.width = "100vw";
// 	// 	video.style.height="auto";
// 	// 	var vidHeight = width / widthHeightRatio;
// 	// 	var topMargin = (height - vidHeight)/2;
// 	// 	// video.style.marginTop=JSON.stringify(topMargin)+ "px";
// 	// 	return;
// 	// }
// 	var vidWidth = height * widthHeightRatio * .83;
// 	var leftMargin = (width - vidWidth) / 2;
// 	video.style.marginLeft = JSON.stringify(leftMargin) + "px";
// 	// setNavPosition(leftMargin);
// }
var setVideoPositionTest = function() {
	var width = window.innerWidth;
	var height = window.innerHeight;
	// var widthHeightRatio = 1600/1200;
	if(height/width <= 1) {
		return;
		// video.style.height="auto";
		// var vidHeight = width / widthHeightRatio;
		// var topMargin = (height - vidHeight)/2;
		// video.style.marginTop=JSON.stringify(topMargin)+ "px";
		// return;
	}
	var video = document.getElementsByTagName("video")[0];
	var videoWrapper = document.getElementsByClassName("html-videoplayer")[0];
	video.style.width = "100vw";
	video.style.height="auto";
	// videoWrapper.style.marginTop = "1rem";
	videoWrapper.style.display = "block";
	videoWrapper.style.justifyContent="none";
	// var vidWidth = height * widthHeightRatio * .83;
	// var leftMargin = (width - vidWidth) / 2;
	// video.style.marginLeft = JSON.stringify(leftMargin) + "px";
	// setNavPosition(leftMargin);
}
window.onload = function() {
	setVideoPositionTest();
};
// var setLogoPosition = function() {
// 	var gamelogo = document.getElementsByClassName("game_logo_wrapper")[0];
// 	var width = window.innerWidth;
// 	var height = window.innerHeight;
// 	var widthHeightRatio = 777/292;
// 	var logoHeight = .1*height;
// 	var logoWidth = logoHeight * widthHeightRatio;
// 	var leftMargin = (width - logoWidth)/2;
// 	gamelogo.style.marginLeft = JSON.stringify(leftMargin) + "px";
// 	var topMargin = height * .01;
// 	gamelogo.style.marginTop = JSON.stringify(topMargin) + "px";
// }

// var setNavPosition = function(leftMargin) {
// 	var width = window.innerWidth;
// 	var logoWidth = width * .12;

// 	var nav = document.getElementsByClassName("website-nav")[0];
// 	var rightMargin = (leftMargin - logoWidth)/2;
// 	nav.style.marginRight = JSON.stringify(rightMargin) + "px";
// }
// setVideoPosition();
// setLogoPosition();

console.log("window.innerHeight:" + window.innerHeight);
console.log("window.innerWidth:" + window.innerWidth);