var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Playing Video")
	video.play()
	document.querySelector("#volume").innerHTML = video.volume * 100 +"%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pausing Video")
	video.pause()
});