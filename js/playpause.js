export function playPause() {
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
      return target
    })
  })
}

export function actionBtn(box) {
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
