// JavaScript to enhance the page functionality

// Example: Log a message when the page loads
window.onload = function() {
    console.log("Page loaded successfully!");
};

// Example: Add event listeners to audio and video elements
// Added a script to log a message when the page loads.
// Added event listeners to the audio and video elements to log messages when they start playing.
document.addEventListener("DOMContentLoaded", function() {
    var audioElement = document.querySelector("audio");
    var videoElement = document.querySelector("video");

    if (audioElement) {
        audioElement.addEventListener("play", function() {
            console.log("Audio is playing");
        });
    }

    if (videoElement) {
        videoElement.addEventListener("play", function() {
            console.log("Video is playing");
        });
    }
});

var myVideo = document.getElementById("video1"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function makeBig() { 
    myVideo.width = 760; 
} 

function makeSmall() { 
    myVideo.width = 320; 
} 

function makeNormal() { 
    myVideo.width = 420; 
} 