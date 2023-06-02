export function updateProgress(e) {
  const duration = e.srcElement.duration;
  const currentTime = e.srcElement.currentTime;
  const progressPercent = (currentTime / duration) * 100;
  const progressBar = e.target.parentNode.querySelector('.player__progressbar');
  progressBar.style.width = `${progressPercent}%`;

  const progressCurrentTime = e.target.parentNode.querySelector('.player__current-time');

  let min = Math.trunc(Math.trunc(currentTime) / 60);
  let sec = Math.trunc(currentTime) - (min * 60);
  const allMin = Math.trunc(duration / 60);
  if (min <= allMin) {
    if (sec < 10) {
      progressCurrentTime.textContent = `${min}:0${sec}`
    } else {
      progressCurrentTime.textContent = `${min}:${sec}`
    }
    if (sec == 60) {
      sec = 0
    }
  }

  if (currentTime == duration) {
    console.log('the end')
    document.querySelector('.next-btn').click()
  }


}

// Перемотка трека
export function setProgress() {
  document.querySelectorAll('.player__progress').forEach((el) => {
    el.addEventListener('click', (e) => {
      const audio = e.target.closest('.player').querySelector('audio')
      const progressBar = e.target.closest('.player').querySelector('.player__progressbar')
      const progress = e.target.closest('.player').querySelector('.player__progress')
      const progressWidth = progress.clientWidth
      const progressX = e.offsetX
      const duration = audio.duration
      audio.currentTime = (progressX / progressWidth) * duration

    })
  })
}
