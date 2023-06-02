
  let player

  export function addPlayer(track) {
     player = document.createElement('div');
    player.classList.add('player')
    let audio = new Audio();
    const btnBox = document.createElement('div')
    btnBox.classList.add('player__btn-container')
    const playBtn = document.createElement('button')
    playBtn.classList.add('player__btn', 'btn-reset', 'play-btn')
    const prevBtn = document.createElement('button')
    prevBtn.classList.add('player__btn', 'btn-reset', 'prev-btn', 'action-btn', 'is-disabled')
    const nextBtn = document.createElement('button')
    nextBtn.classList.add('player__btn', 'btn-reset', 'next-btn', 'action-btn')
    const songBox = document.createElement('div')
    songBox.classList.add('player__song-container')
    const song = document.createElement('span');
    song.classList.add('player__song')
    const progressContainer = document.createElement('div')
    progressContainer.classList.add('player__progress-container')
    const progress = document.createElement('div');
    progress.classList.add('player__progress')
    const progressBar = document.createElement('div');
    progressBar.classList.add('player__progressbar')
    const timer = document.createElement('span');
    timer.classList.add('player__timer')
    const currentTime = document.createElement('span');
    currentTime.classList.add('player__current-time')
    const fullTime = document.createElement('span');
    fullTime.classList.add('player__full-time')

    let timeSong
    audio.src = `../audio/${track}.mp3`;
    audio.preload = 'metadata';
    audio.addEventListener('loadedmetadata', () => {
      timeSong = audio.duration
      timeSong = Math.trunc(timeSong)
      let minutes = Math.trunc(timeSong / 60)
      let sec = timeSong - (minutes * 60)
      fullTime.textContent = ` /\u00A0${minutes}:${sec}`;
      currentTime.textContent = '0:00';
    })

    timer.append(currentTime)
    timer.append(fullTime)


    playBtn.innerHTML = `<?xml version="1.0" encoding="iso-8859-1"?>
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve">
    <g>
      <path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30
        c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15
        C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z" fill = "white"/>
      <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
        S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z" fill = "white"/>
    </svg>`;
    prevBtn.innerHTML = `<?xml version="1.0" encoding="iso-8859-1"?>
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve">
    <g>
      <path d="M49.467,14.116c-0.326-0.174-0.724-0.15-1.03,0.058L28,28.108V15c0-0.371-0.205-0.711-0.533-0.884
        c-0.326-0.174-0.723-0.15-1.03,0.058l-22,15C4.163,29.36,4,29.669,4,30s0.163,0.64,0.437,0.826l22,15
        C26.605,45.941,26.803,46,27,46c0.16,0,0.32-0.038,0.467-0.116C27.795,45.711,28,45.371,28,45V31.892l20.437,13.934
        C48.605,45.941,48.803,46,49,46c0.16,0,0.32-0.038,0.467-0.116C49.795,45.711,50,45.371,50,45V15
        C50,14.629,49.795,14.289,49.467,14.116z M26,43.107L6.775,30L26,16.893V43.107z M48,43.107L28.775,30L48,16.893V43.107z" fill = "white"/>
      <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
        S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z" fill = "white"/>
    </svg>`;
    nextBtn.innerHTML = `<?xml version="1.0" encoding="iso-8859-1"?>
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve">
    <g>
      <path d="M55.563,29.174l-22-15c-0.306-0.208-0.703-0.231-1.03-0.058C32.205,14.289,32,14.629,32,15v13.108L11.563,14.174
        c-0.306-0.208-0.703-0.231-1.03-0.058C10.205,14.289,10,14.629,10,15v30c0,0.371,0.205,0.711,0.533,0.884
        C10.68,45.962,10.84,46,11,46c0.197,0,0.395-0.059,0.563-0.174L32,31.892V45c0,0.371,0.205,0.711,0.533,0.884
        C32.68,45.962,32.84,46,33,46c0.197,0,0.395-0.059,0.563-0.174l22-15C55.837,30.64,56,30.331,56,30S55.837,29.36,55.563,29.174z
         M12,43.107V16.893L31.225,30L12,43.107z M34,43.107V16.893L53.225,30L34,43.107z" fill = "white"/>
      <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
        S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z" fill = "white"/>
    </svg>`;
    btnBox.append(prevBtn);
    btnBox.append(playBtn);
    btnBox.append(nextBtn);

    song.textContent = `${track}`;

    progress.append(progressBar);
    progressContainer.append(progress);
    progressContainer.append(timer);
    songBox.append(song);
    songBox.append(progressContainer)

    player.append(audio)
    player.append(btnBox)
    player.append(songBox)

    return player
  }







