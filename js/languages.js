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
  }
})
