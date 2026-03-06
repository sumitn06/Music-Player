const progress = document.getElementById("progress");
const song = document.getElementById("song");
const ctrlIcon = document.getElementById("ctrlIcon");
const songName = document.getElementById("song-name");
const SongArtist = document.getElementById("song-artist");
const SongImg = document.getElementById("song-img");

let songs = [
  {
    name: "Parano",
    file: "media/Parano.mp3",
    img: "media/thumbnail.png",
    artist: "Luis Fonsi",
  },
  {
    name: "Kompa Trap",
    file: "media/PASSO-BEM-SOLTO.mp3",
    img: "media/thumbnail.png",
    artist: "Luis Fonsi",
  },
  {
    name: "Funk Universo",
    file: "media/FUNK-UNIVERSO.mp3",
    img: "media/thumbnail.png",
    artist: "erokz",
  },
];

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
  }
}

song.ontimeupdate = function () {
  progress.value = song.currentTime;
};

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.remove("fa-play");
  ctrlIcon.classList.add("fa-pause");
};

song.onended = function () {
  ctrlIcon.classList.remove("fa-pause");
  ctrlIcon.classList.add("fa-play");
};

// Update Song

let songIndex = 0;

function loadSong(index) {
  song.src = songs[index].file;
  songName = songs[index].name;
  SongArtist = songs[index].artist;
  SongImg = songs[index].img;
  song.play();
}

function nextSong() {
  songIndex++;

  if (songIndex >= songs.length) {
    songIndex = 0;
  }

  loadSong(songIndex);
  song.play();
}

function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songIndex);
  song.play();
}

function playSong(index) {
  songIndex = index;
  loadSong(songIndex);
  song.play();
}
