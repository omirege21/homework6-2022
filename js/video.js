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

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slowing down by 5%")
	video.playbackRate = video.playbackRate *= 0.95
	console.log("New speed is" + (Math.round(video.playbackRate*100)/100) )
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speeding up video")
	video.playbackRate = video.playbackRate *= 1.053
	console.log("New speed is" + (Math.round(video.playbackRate*100)/100) )
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration -15){
	console.log("Skipping 15s")
	video.currentTime += 15
	video.play()
	} 
	else {
		console.log("End of video reached, restarting video.")
		video.currentTime = 0
		video.play()
	}
});