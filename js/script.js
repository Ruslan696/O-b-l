document.addEventListener('DOMContentLoaded', () => {

  // accordion
  jQuery(function ($) {
    $(function () {
      $("#accordion").accordion({
        collapsible: true,
        active: -100,
        icons: false,
        heightStyle: "content"
      })
    });
  });


  // Добавление плеера
  function addPlayer(track) {
    const player = document.createElement('div');
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


    audio.src = `../audio/${track}.mp3`;
    audio.preload = 'metadata';
    audio.addEventListener('loadedmetadata', () => {
      timeSong = audio.duration
      timeSong = Math.trunc(timeSong)
      minutes = Math.trunc(timeSong / 60)
      sec = timeSong - (minutes * 60)
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
      console.log(content)
      const firstTrack = content.querySelector('.albums__track').textContent
      if (content.querySelector('.player')) {
        return
      } else {
        player = addPlayer(firstTrack)
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
          timeSong = audio.duration
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

  // Play and Pause
  function playPause() {
    document.querySelectorAll('.play-btn').forEach((el) => {
      el.addEventListener('click', (e) => {
        if (!e.target.closest('.play-btn')) {
          const target = e.target.closest('.pause-btn')
          const player = target.parentNode.parentNode
          const audio = player.querySelector('audio')
          target.innerHTML = `<?xml version="1.0" encoding="iso-8859-1"?>
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve">
        <g>
          <path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30
            c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15
            C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z" fill = "white"/>
          <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
            S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z" fill = "white"/>
        </svg>`;
          audio.pause();
          target.classList.add('play-btn')
          target.classList.remove('pause-btn')
          return
        }

        if (document.querySelector('.pause-btn')) {
          document.querySelectorAll('.pause-btn').forEach((elem) => {
            elem.innerHTML = `<?xml version="1.0" encoding="iso-8859-1"?>
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve">
            <g>
              <path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30
                c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15
                C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z" fill = "white"/>
              <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
                S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z" fill = "white"/>
            </svg>`
            elem.classList.remove('pause-btn')
            elem.classList.add('play-btn')
          })
        }

        document.querySelectorAll('audio').forEach((sound) => {
          sound.pause()
        })
        const target = e.target.closest('.play-btn')
        const player = target.parentNode.parentNode
        const audio = player.querySelector('audio')
        target.innerHTML = `<?xml version="1.0" encoding="iso-8859-1"?>
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve">
          <g>
            <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
              S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z" fill="white"/>
            <path d="M33,46h8V14h-8V46z M35,16h4v28h-4V16z" fill="white"/>
            <path d="M19,46h8V14h-8V46z M21,16h4v28h-4V16z" fill="white"/>
          </svg>`;
        audio.play();
        target.classList.remove('play-btn')
        target.classList.add('pause-btn')


        return
      })
    })
  }






  // Progress bar
  function updateProgress(e) {
    const duration = e.srcElement.duration;
    const currentTime = e.srcElement.currentTime;
    const progressPercent = (currentTime / duration) * 100;
    const progressBar = e.target.parentNode.querySelector('.player__progressbar');
    progressBar.style.width = `${progressPercent}%`;

    const progressCurrentTime = e.target.parentNode.querySelector('.player__current-time');

    min = Math.trunc(Math.trunc(currentTime) / 60);
    sec = Math.trunc(currentTime) - (min * 60);
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
  function setProgress() {
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


  // Next and Prev btn
  function actionBtn(box) {
    box.querySelectorAll('.action-btn').forEach((elem) => {
      elem.addEventListener('click', (e) => {
        console.log('click')
        if (e.target.closest('.is-disabled')) {
          return
        }
        const box = e.target.closest('.albums__player');
        const audio = box.querySelector('audio');
        const trackName = box.querySelector('.player__song')

        let tracks = [];
        box.querySelectorAll('.albums__track').forEach((el) => {
          tracks.push(el.textContent)
        })
        console.log(tracks)
        const lastIndex = tracks.length - 1

        if (e.target.closest('.next-btn')) {
          if (box.querySelector('.prev-btn.is-disabled')) {
            box.querySelector('.prev-btn.is-disabled').classList.remove('is-disabled')
          }
          for (const track of tracks) {
            if (trackName.textContent == track) {
              const index = tracks.indexOf(track)

              if (index >= (lastIndex - 1)) {
                e.target.closest('.next-btn').classList.add('is-disabled')

              }
              if (index < lastIndex) {
                const nextTrack = tracks[index + 1]
                console.log(nextTrack)
                trackName.textContent = `${nextTrack}`
                audio.src = `../audio/${nextTrack}.mp3`
                document.querySelectorAll('audio').forEach((aud) => {
                  aud.pause()
                })
                if (box.querySelector('.play-btn')) {
                  box.querySelector('.play-btn').click()
                  return
                } else {
                  audio.play()
                  return
                }

              }
            }
          }
        }

        if (e.target.closest('.prev-btn')) {
          if (box.querySelector('.next-btn.is-disabled')) {
            box.querySelector('.next-btn.is-disabled').classList.remove('is-disabled')
          }
          for (const track of tracks) {
            if (trackName.textContent == track) {
              const index = tracks.indexOf(track)
              if (index <= 1) {
                e.target.closest('.prev-btn').classList.add('is-disabled')
              }
              if (index <= lastIndex) {
                let nextTrack = tracks[index - 1]
                console.log(nextTrack)
                trackName.textContent = `${nextTrack}`
                audio.src = `../audio/${nextTrack}.mp3`
                document.querySelectorAll('audio').forEach((aud) => {
                  aud.pause()
                })
                if (box.querySelector('.play-btn')) {
                  box.querySelector('.play-btn').click()
                  return
                } else {
                  audio.play()
                  return
                }
              }
            }

          }
        }
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

  // Merch
  document.querySelectorAll('.merch-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      let source = e.target.closest('.albums__box').querySelector('.albums__img').src.slice(0, -4);
      console.log(source)
      const album = e.target.closest('.albums__box').previousElementSibling.innerHTML
      console.log(album)

      if (!document.querySelector('body overflow')) {
        document.querySelector('body').classList.add('overflow')
      }

      const popup = document.querySelector('.popup-tape');
      const popupContainer = popup.querySelector('.popup-tape__container')
      const title = popup.querySelector('.popup-tape__title')
      const descr = popup.querySelector('.popup-tape__descr.rus')
      const descrEng = popup.querySelector('.popup-tape__descr.eng')
      const firstImg = popup.querySelector('.popup-tape__img_1')
      const secondImg = popup.querySelector('.popup-tape__img_2')

      title.innerHTML = album;
      firstImg.src = `${source}-tape1.jpg`
      secondImg.src = `${source}-tape2.jpg`

      if (source.includes('obl1')) {
        descr.innerHTML = `Дымчатый матовый кейс, зашкуренный вручную корпус с тампопечатью.`;
        descrEng.innerHTML = `Smoky box, hand-sanded case with pad printing.`
      } else if (source.includes('obl2')) {
        descr.innerHTML = `Вторичное использование советских кассет типа "МК" с новой магнитной пленкой, самодельные обложки, ксерокс с элемантами коллажа.`;
        descrEng.innerHTML = `Recycle soviet tapes "MK" with modern magnetic tape. DIY covers, xerox with collage elements.`
      } else if (source.includes('obl3')) {
        descr.innerHTML = `Вторичное использование советских кассет типа "МК" с новой магнитной пленкой, самодельные обложки, ксерокс с эелемантами коллажа.`;
        descrEng.innerHTML = `Recycle soviet tapes "MK" with modern magnetic tape. DIY covers, xerox with collage elements.`
      } else if (source.includes('obl4')) {
        descr.innerHTML = `Вторичное использование советских кассет типа "МК" с новой магнитной пленкой, печать плоская, бумага неустановленная,художественное оформление и печать сделаны издательством «Подклет» г. Червоград.`;
        descrEng.innerHTML = `Recycle soviet tapes "MK" with modern magnetic tape,  flat printing, unknown paper, art and print by Podklet publishing house in Chervograd.`
      }

      popup.classList.add('is-open')
      popupContainer.classList.add('is-open')

      popup.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-tape__img') && !e.target.closest('.popup-tape__descr') && !e.target.closest('.popup-tape__for-sale')) {
          popup.classList.remove('is-open')
          popupContainer.classList.remove('is-open')
          document.querySelector('body').classList.remove('overflow')
        }


      })
    })
  })


  // languages
  document.querySelector('.lang__btn_rus').addEventListener('click', (e) => {

    if (!e.target.classList.contains('is-active')) {
      e.target.classList.add('is-active')
      document.querySelector('.lang__btn_eng').classList.remove('is-active')
      document.querySelectorAll('.eng').forEach((elem) => {
        elem.classList.add('display-none')
      })
      document.querySelectorAll('.rus').forEach((elem) => {
        elem.classList.remove('display-none')
      })

      // for (let instance of instances) {
      //   instance.setContent('Скопировать в буфер обмена')
      // }
    }
  })

  document.querySelector('.lang__btn_eng').addEventListener('click', (e) => {
    if (!e.target.classList.contains('is-active')) {
      e.target.classList.add('is-active')
      document.querySelector('.lang__btn_rus').classList.remove('is-active')
      document.querySelectorAll('.rus').forEach((elem) => {
        elem.classList.add('display-none')
      })
      document.querySelectorAll('.eng').forEach((elem) => {
        elem.classList.remove('display-none')
      })
      // for (let instance of instances) {
      //   instance.setContent('Copy to clipboard')
      // }

    }
  })

  function popupDonation(btn) {
    let popup = document.querySelector('.popup-donation');
    let container = popup.querySelector('.popup-donation__container');

    if (btn === true) {
      popup.querySelector('.popup-donation__coins').classList.remove('display-none')
      popup.querySelector('.popup-donation__contacts').classList.add('display-none')
    } else {
      popup.querySelector('.popup-donation__coins').classList.add('display-none')
      popup.querySelector('.popup-donation__contacts').classList.remove('display-none')
    }


    popup.classList.add('is-open');
    container.classList.add('is-open');

    popup.addEventListener('click', (e) => {
      if (!e.target.closest('.popup-donation__container')) {
        popup.classList.remove('is-open')
        container.classList.remove('is-open')

      }
    })
  }

  // popup-donation
  document.querySelectorAll('.footer__link').forEach((el) => {
    el.addEventListener('click', () => {
      popupDonation(btn = true)
    })
  })

  document.querySelectorAll('.contacts-btn').forEach((el) => {
    el.addEventListener('click', () => {
      popupDonation(btn = false)
    })
  })

  // popup-video
  document.querySelector('.footer__video-btn').addEventListener('click', () => {
    const popup = document.querySelector('.popup-video')
    const container = document.querySelector('.popup-video__container')
    popup.classList.add('is-open')

    popup.addEventListener('click', (e) => {
      if (!e.target.closest('.popup-donation__container')) {
        popup.classList.remove('is-open')
        container.classList.remove('is-open')

      }
    })
  })

  //  Copy to clipboard

  // document.querySelectorAll('.popup-donation__value').forEach((elem) => {
  //   elem.addEventListener('click', (e) => {
  //     const target = e.target.closest('.popup-donation__value')
  //     const value = target.textContent
  //     navigator.clipboard.writeText(value)


  //   })
  // })


  // tooltip

  // tippy('.popup-donation__value', {
  //   content: 'Скопировать в буфер обмена'
  // })

  // const instances = []
  // document.querySelectorAll('.popup-donation__value').forEach((el) => {
  //   instance = el._tippy
  //   instances.push(instance)
  // })
  // console.log(instances)






})









