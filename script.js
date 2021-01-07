const songs = ["Song1.mp3","Song2.mp3","Song3.mp3","Song4.mp3"];
const poster = ["Song1.jpg","Song2.jpg","Song3.jpg","Song4.jpg"];

let songTitle = document.getElementById("songTitle");
let fillBar = document.getElementById("fill");

let song = new Audio();
let currentSong = 0;                        // Points to the current song

window.onload = playSong;                   // Calls function playSong when window loads

function playSong() {
    song.src = songs[currentSong];               // Set source to 0th song
    songTitle.textContent = songs[currentSong];     // Sets title of the song
    song.play();                                // Plays song
}

function playOrPauseSong() {                    //Setting Function for Play and Pause
    if (song.paused) {
        song.play();
        $("#play img").attr("src","Pause.png");
    } else {
        song.pause();
        $("#play img").attr("src","Play.png");
    }
}

song.addEventListener('timeupdate', function() {
    let position = song.currentTime / song.duration;
    fillBar.style.width = position * 100 + '%';
});

function next() {                               //Setting Function for skipping to next track
    currentSong++;
    if (currentSong > 3) {
        currentSong = 0;
    }

    playSong();
    $("#play img").attr("src","Pause.png")
    $("#image img").attr("src",poster[currentSong])
    $("#bg img").attr("src",poster[currentSong])
}

function pre() {                                //Setting Function for skipping to previous track
    currentSong--;
    if (currentSong < 0) {
        currentSong = 3;
    }

    playSong();
    $("#play img").attr("src","Pause.png")
    $("#image img").attr("src",poster[currentSong])
    $("#bg img").attr("src",poster[currentSong])
}