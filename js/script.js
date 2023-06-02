import { addPlayer } from './addplayer'
import './accordion'
import { playPause, actionBtn } from './playpause'
import { updateProgress, setProgress } from './progressbar'



  // Отображение плеера при раскрытии списка
  document.querySelectorAll('.albums__title').forEach((el) => {
    el.addEventListener('click', (e) => {
      const target = e.target.closest('.albums__title');
      const content = target.nextElementSibling
      const albumName = target.textContent
      const index = albumName.indexOf('-') - 1
      const artist = albumName.slice(0, index)
      const artistName = document.createElement('span')
      artistName.classList.add('player__artist')
      artistName.textContent = ` \u00B7 ${artist}`

      const trackList = content.querySelector('.albums__list')
      const firstTrack = content.querySelector('.albums__track').textContent
      if (content.querySelector('.player')) {
        return
      } else {
        let player = addPlayer(firstTrack)
        content.querySelector('.albums__player').insertBefore(player, trackList)
        const progress = content.querySelector('.player__progress-container')
        content.querySelector('.player__song-container').insertBefore(artistName, progress)
        playPause()
        setProgress()
        actionBtn(content)
        changeTrack()

        if (content.querySelectorAll('.albums__item').length < 2) {
          content.querySelectorAll('.action-btn').forEach((btn) => {
            btn.classList.add('is-disabled')
          })
        }
      }
      document.querySelectorAll('audio').forEach((audio) => {
        audio.addEventListener('timeupdate', updateProgress)
      })
    })
  })

  // Переключение трека нажатием на название
  function changeTrack() {
    document.querySelectorAll('.albums__item').forEach((el) => {
      el.addEventListener('click', (e) => {
        let tracks = [];
        if (document.querySelector('.pause-btn')) {
          document.querySelectorAll('.pause-btn').forEach((pause) => {
            pause.classList.remove('pause-btn')
            pause.classList.add('play-btn')
            pause.innerHTML = `<?xml version="1.0" encoding="iso-8859-1"?>
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve">
            <g>
              <path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30
                c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15
                C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z" fill = "white"/>
              <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
                S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z" fill = "white"/>
            </svg>`;
          })
        }
        const target = e.target.closest('.albums__item')
        const track = target.querySelector('.albums__track').textContent
        const player = target.parentNode.parentNode.querySelector('.player')
        target.closest('.albums__list').querySelectorAll('.albums__track').forEach((elem) => {
          tracks.push(elem.textContent)
        })
        const lastIndex = tracks.length - 1;

        player.querySelectorAll('.action-btn').forEach((btn) => {
          btn.classList.remove('is-disabled')
        })


        if (tracks.indexOf(track) == 0) {
          player.querySelector('.prev-btn').classList.add('is-disabled')

        } else if (tracks.indexOf(track) == lastIndex) {
          player.querySelector('.next-btn').classList.add('is-disabled')

        }


        const audio = player.querySelector('audio')
        audio.src = `../audio/${track}.mp3`;
        player.querySelector('.player__song').textContent = `${track}`;
        audio.addEventListener('loadedmetadata', () => {
          let timeSong = audio.duration
          timeSong = Math.trunc(timeSong)
          minutes = Math.trunc(timeSong / 60)
          if (minutes < 10) {
            minutes = `0${minutes}`
          }
          sec = timeSong - (minutes * 60)
          if (sec < 10) {
            sec = `0${sec}`
          }
          player.querySelector('.player__full-time').textContent = ` ${minutes}:${sec}`;
          player.querySelector('.player__current-time').textContent = `${audio.currentTime} /`;
          if (player.querySelector('.play-btn')) {
            player.querySelector('.play-btn').click()
          }
        })
      })
    })
  }

  // Нажатие по обложке
  document.querySelectorAll('.albums__img').forEach((img) => {
    img.addEventListener('click', (e) => {
      const source = e.target.src

      if (!document.querySelector('body overflow')) {
        document.querySelector('body').classList.add('overflow')
      }

      const popup = document.querySelector('.popup-cover');
      const popupContainer = popup.querySelector('.popup-cover__container')
      const fullImg = popup.querySelector('.popup-cover__img')
      fullImg.src = source;
      popup.classList.add('is-open')
      popupContainer.classList.add('is-open')

      popup.addEventListener('click', (e) => {

        if (!document.querySelector('.popup-tape.is-open')) {
          document.querySelector('body').classList.remove('overflow')
        }

        popup.classList.remove('is-open')
        popupContainer.classList.remove('is-open')

      })
    })
  })








