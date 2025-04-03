let song = document.getElementById("song");
let playBtn = document.getElementById("play");
let progress = document.getElementById("progress");

playBtn.addEventListener("click", () => {
    if (song.paused) {
        song.play();
        playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    } else {
        song.pause();
        playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    }
});

song.addEventListener("timeupdate", () => {
    let progressValue = (song.currentTime / song.duration) * 100;
    progress.value = progressValue;
});

progress.addEventListener("input", () => {
    song.currentTime = (progress.value * song.duration) / 100;
});
