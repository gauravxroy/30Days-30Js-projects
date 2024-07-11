const progress = document.querySelector("#progress");
const song = document.querySelector("#song");
const ctrlIcon = document.querySelector("#play-pause");
const time1 = document.querySelector("#time");
song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
  //   time1.innerText = song.currentTime;
};

function playPause() {
  if (song.paused) {
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
    time1.innerHTML = song.duration;
  } else {
    song.pause();
    ctrlIcon.classList.add("fa-play");
    ctrlIcon.classList.remove("fa-pause");
  }
}

if (song.play) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.remove("fa-play");
  ctrlIcon.classList.add("fa-pause");
};
