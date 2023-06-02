export function popupDonation(btn) {
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
  if (container.getElementsByTagName('iframe')) {
    container.innerHTML = `<iframe id="player" width="100%" height="100%" src="https://www.youtube.com/embed/E3YmuEBXxP8?rel=0"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>`
  }

  popup.classList.add('is-open')

  popup.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-donation__container')) {
      popup.classList.remove('is-open')
      container.classList.remove('is-open')

    }
  })
})

document.querySelector('.albums__title_youtube').addEventListener('click', () => {
  if (!document.querySelector('.video_tunnel')) {
    document.querySelector('.albums__content_video').innerHTML = `<iframe class="video_tunnel" width="100%" height="315" src="https://www.youtube.com/embed/Ekiiv9KqMHU?rel=0"
  title="YouTube video player" frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen>
</iframe>
<p class="albums__descr rus">небольшой концерт для летучих мышей и пещерных грибов</p>
 <p class="albums__descr eng display-none">little concert for bats and cave mushrooms</p>`
  }

})
