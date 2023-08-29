let video = document.querySelector('.hero__video');
let videoBtn = document.querySelector('.hero__video-btn');

function videoBtnOnclick() {
  if (video.paused) {
    video.play();
    videoBtn.style.display = 'none';
  } else {
    video.pause();
  }
}

function videoOnclick() {
  video.pause();
  videoBtn.style.display = 'block';
}

if (video) {
  video.addEventListener('click', videoOnclick);
  videoBtn.addEventListener('click', videoBtnOnclick);
}
