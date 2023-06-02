document.querySelectorAll('.merch-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let source = e.target.closest('.albums__box').querySelector('.albums__img').src.slice(0, -4);
    console.log('source', source)
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
