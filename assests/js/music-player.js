let song = document.getElementById("song");
let progress = document.getElementById("progress");
let ctrlIcon = document.getElementById("ctrlIcon");
let scrollingText = document.getElementById("scrolling-text");
let songTitle = document.getElementById("title");
let songBanner = document.getElementById("song-banner");
song.onloadedmetadata = function () {
  progress.value = song.currentTime;
  progress.max = song.duration;
};

function playPause() {
  if (ctrlIcon.classList.contains("bi-pause-fill")) {
    song.pause();
    ctrlIcon.classList.remove("bi-pause-fill");
    ctrlIcon.classList.add("bi-play-fill");
  } else {
    song.play();
    ctrlIcon.classList.remove("bi-play-fill");
    ctrlIcon.classList.add("bi-pause-fill");
  }
  scrollingText.classList.toggle("scrolling-text");
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.remove("bi-play-fill");
  ctrlIcon.classList.add("bi-pause-fill");
};

function getRandomInt(min, max) {
  min = Math.ceil(min); // Round up minimum value (inclusive)
  max = Math.floor(max); // Round down maximum value (exclusive)
  return Math.floor(Math.random() * (max - min)) + min;
}

function anotherSong() {
  let lengthOfMusic = music.length;
  let randomNumber = getRandomInt(0, lengthOfMusic);
  const songSrc = music[randomNumber].src;
  const folder = "./assests/music/";
  let newSongSrc = folder + songSrc;
  let newSongTitle = music[randomNumber].title;
  song.src = newSongSrc;
  songTitle.textContent = newSongTitle;
  scrollingText.textContent = newSongTitle;
  const imageFolder = "./assests/images/";
  songBanner.src = imageFolder + music[randomNumber].image_src;
  console.log(newSongTitle);
}
