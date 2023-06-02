/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/accordion.js":
/*!*************************!*\
  !*** ./js/accordion.js ***!
  \*************************/
/***/ (() => {

eval("\ndocument.addEventListener('DOMContentLoaded', () => {\n  const accordionItems = document.querySelectorAll('.albums__title');\n\n  accordionItems.forEach((item) => {\n    item.addEventListener('click', () => {\n      const accordionBox = item.nextElementSibling;\n      accordionBox.classList.toggle('active');\n    });\n  });\n})\n\n\n\n\n\n\n//# sourceURL=webpack://orden/./js/accordion.js?");

/***/ }),

/***/ "./js/addplayer.js":
/*!*************************!*\
  !*** ./js/addplayer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addPlayer: () => (/* binding */ addPlayer)\n/* harmony export */ });\n\n  let player\n\n  function addPlayer(track) {\n     player = document.createElement('div');\n    player.classList.add('player')\n    let audio = new Audio();\n    const btnBox = document.createElement('div')\n    btnBox.classList.add('player__btn-container')\n    const playBtn = document.createElement('button')\n    playBtn.classList.add('player__btn', 'btn-reset', 'play-btn')\n    const prevBtn = document.createElement('button')\n    prevBtn.classList.add('player__btn', 'btn-reset', 'prev-btn', 'action-btn', 'is-disabled')\n    const nextBtn = document.createElement('button')\n    nextBtn.classList.add('player__btn', 'btn-reset', 'next-btn', 'action-btn')\n    const songBox = document.createElement('div')\n    songBox.classList.add('player__song-container')\n    const song = document.createElement('span');\n    song.classList.add('player__song')\n    const progressContainer = document.createElement('div')\n    progressContainer.classList.add('player__progress-container')\n    const progress = document.createElement('div');\n    progress.classList.add('player__progress')\n    const progressBar = document.createElement('div');\n    progressBar.classList.add('player__progressbar')\n    const timer = document.createElement('span');\n    timer.classList.add('player__timer')\n    const currentTime = document.createElement('span');\n    currentTime.classList.add('player__current-time')\n    const fullTime = document.createElement('span');\n    fullTime.classList.add('player__full-time')\n\n    let timeSong\n    audio.src = `../audio/${track}.mp3`;\n    audio.preload = 'metadata';\n    audio.addEventListener('loadedmetadata', () => {\n      timeSong = audio.duration\n      timeSong = Math.trunc(timeSong)\n      let minutes = Math.trunc(timeSong / 60)\n      let sec = timeSong - (minutes * 60)\n      fullTime.textContent = ` /\\u00A0${minutes}:${sec}`;\n      currentTime.textContent = '0:00';\n    })\n\n    timer.append(currentTime)\n    timer.append(fullTime)\n\n\n    playBtn.innerHTML = `<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n    <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n       viewBox=\"0 0 60 60\" style=\"enable-background:new 0 0 60 60;\" xml:space=\"preserve\">\n    <g>\n      <path d=\"M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30\n        c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15\n        C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z\" fill = \"white\"/>\n      <path d=\"M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30\n        S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z\" fill = \"white\"/>\n    </svg>`;\n    prevBtn.innerHTML = `<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n    <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n       viewBox=\"0 0 60 60\" style=\"enable-background:new 0 0 60 60;\" xml:space=\"preserve\">\n    <g>\n      <path d=\"M49.467,14.116c-0.326-0.174-0.724-0.15-1.03,0.058L28,28.108V15c0-0.371-0.205-0.711-0.533-0.884\n        c-0.326-0.174-0.723-0.15-1.03,0.058l-22,15C4.163,29.36,4,29.669,4,30s0.163,0.64,0.437,0.826l22,15\n        C26.605,45.941,26.803,46,27,46c0.16,0,0.32-0.038,0.467-0.116C27.795,45.711,28,45.371,28,45V31.892l20.437,13.934\n        C48.605,45.941,48.803,46,49,46c0.16,0,0.32-0.038,0.467-0.116C49.795,45.711,50,45.371,50,45V15\n        C50,14.629,49.795,14.289,49.467,14.116z M26,43.107L6.775,30L26,16.893V43.107z M48,43.107L28.775,30L48,16.893V43.107z\" fill = \"white\"/>\n      <path d=\"M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30\n        S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z\" fill = \"white\"/>\n    </svg>`;\n    nextBtn.innerHTML = `<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n    <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n       viewBox=\"0 0 60 60\" style=\"enable-background:new 0 0 60 60;\" xml:space=\"preserve\">\n    <g>\n      <path d=\"M55.563,29.174l-22-15c-0.306-0.208-0.703-0.231-1.03-0.058C32.205,14.289,32,14.629,32,15v13.108L11.563,14.174\n        c-0.306-0.208-0.703-0.231-1.03-0.058C10.205,14.289,10,14.629,10,15v30c0,0.371,0.205,0.711,0.533,0.884\n        C10.68,45.962,10.84,46,11,46c0.197,0,0.395-0.059,0.563-0.174L32,31.892V45c0,0.371,0.205,0.711,0.533,0.884\n        C32.68,45.962,32.84,46,33,46c0.197,0,0.395-0.059,0.563-0.174l22-15C55.837,30.64,56,30.331,56,30S55.837,29.36,55.563,29.174z\n         M12,43.107V16.893L31.225,30L12,43.107z M34,43.107V16.893L53.225,30L34,43.107z\" fill = \"white\"/>\n      <path d=\"M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30\n        S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z\" fill = \"white\"/>\n    </svg>`;\n    btnBox.append(prevBtn);\n    btnBox.append(playBtn);\n    btnBox.append(nextBtn);\n\n    song.textContent = `${track}`;\n\n    progress.append(progressBar);\n    progressContainer.append(progress);\n    progressContainer.append(timer);\n    songBox.append(song);\n    songBox.append(progressContainer)\n\n    player.append(audio)\n    player.append(btnBox)\n    player.append(songBox)\n\n    return player\n  }\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://orden/./js/addplayer.js?");

/***/ }),

/***/ "./js/imageSize.js":
/*!*************************!*\
  !*** ./js/imageSize.js ***!
  \*************************/
/***/ (() => {

eval("\nconst screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;\nconsole.log('width', screenWidth)\ndocument.querySelectorAll('.albums__img').forEach((el) => {\n  let source\n  if (el.id) {\n     source = el.id.slice(-1)\n    console.log('source', source)\n  }\n\n\n\n  // Проверяем ширину экрана и устанавливаем соответствующий путь к изображению\n  if (screenWidth <= 340 && source !== undefined) {\n    el.src = `./img/obl${source}_320.jpg`;\n    console.log(el.src)\n  } else if (source !== undefined) {\n    el.src = `./img/obl${source}.jpg`\n  }\n})\n\n\n//# sourceURL=webpack://orden/./js/imageSize.js?");

/***/ }),

/***/ "./js/languages.js":
/*!*************************!*\
  !*** ./js/languages.js ***!
  \*************************/
/***/ (() => {

eval("document.querySelector('.lang__btn_rus').addEventListener('click', (e) => {\n\n  if (!e.target.classList.contains('is-active')) {\n    e.target.classList.add('is-active')\n    document.querySelector('.lang__btn_eng').classList.remove('is-active')\n    document.querySelectorAll('.eng').forEach((elem) => {\n      elem.classList.add('display-none')\n    })\n    document.querySelectorAll('.rus').forEach((elem) => {\n      elem.classList.remove('display-none')\n    })\n  }\n})\n\ndocument.querySelector('.lang__btn_eng').addEventListener('click', (e) => {\n  if (!e.target.classList.contains('is-active')) {\n    e.target.classList.add('is-active')\n    document.querySelector('.lang__btn_rus').classList.remove('is-active')\n    document.querySelectorAll('.rus').forEach((elem) => {\n      elem.classList.add('display-none')\n    })\n    document.querySelectorAll('.eng').forEach((elem) => {\n      elem.classList.remove('display-none')\n    })\n  }\n})\n\n\n//# sourceURL=webpack://orden/./js/languages.js?");

/***/ }),

/***/ "./js/merch.js":
/*!*********************!*\
  !*** ./js/merch.js ***!
  \*********************/
/***/ (() => {

eval("document.querySelectorAll('.merch-btn').forEach((btn) => {\n  btn.addEventListener('click', (e) => {\n    let source = e.target.closest('.albums__box').querySelector('.albums__img').src.slice(0, -4);\n    console.log('source', source)\n    const album = e.target.closest('.albums__box').previousElementSibling.innerHTML\n    console.log(album)\n\n    if (!document.querySelector('body overflow')) {\n      document.querySelector('body').classList.add('overflow')\n    }\n\n    const popup = document.querySelector('.popup-tape');\n    const popupContainer = popup.querySelector('.popup-tape__container')\n    const title = popup.querySelector('.popup-tape__title')\n    const descr = popup.querySelector('.popup-tape__descr.rus')\n    const descrEng = popup.querySelector('.popup-tape__descr.eng')\n    const firstImg = popup.querySelector('.popup-tape__img_1')\n    const secondImg = popup.querySelector('.popup-tape__img_2')\n\n    title.innerHTML = album;\n    firstImg.src = `${source}-tape1.jpg`\n    secondImg.src = `${source}-tape2.jpg`\n\n    if (source.includes('obl1')) {\n      descr.innerHTML = `Дымчатый матовый кейс, зашкуренный вручную корпус с тампопечатью.`;\n      descrEng.innerHTML = `Smoky box, hand-sanded case with pad printing.`\n    } else if (source.includes('obl2')) {\n      descr.innerHTML = `Вторичное использование советских кассет типа \"МК\" с новой магнитной пленкой, самодельные обложки, ксерокс с элемантами коллажа.`;\n      descrEng.innerHTML = `Recycle soviet tapes \"MK\" with modern magnetic tape. DIY covers, xerox with collage elements.`\n    } else if (source.includes('obl3')) {\n      descr.innerHTML = `Вторичное использование советских кассет типа \"МК\" с новой магнитной пленкой, самодельные обложки, ксерокс с эелемантами коллажа.`;\n      descrEng.innerHTML = `Recycle soviet tapes \"MK\" with modern magnetic tape. DIY covers, xerox with collage elements.`\n    } else if (source.includes('obl4')) {\n      descr.innerHTML = `Вторичное использование советских кассет типа \"МК\" с новой магнитной пленкой, печать плоская, бумага неустановленная,художественное оформление и печать сделаны издательством «Подклет» г. Червоград.`;\n      descrEng.innerHTML = `Recycle soviet tapes \"MK\" with modern magnetic tape,  flat printing, unknown paper, art and print by Podklet publishing house in Chervograd.`\n    }\n\n    popup.classList.add('is-open')\n    popupContainer.classList.add('is-open')\n\n    popup.addEventListener('click', (e) => {\n      if (!e.target.closest('.popup-tape__img') && !e.target.closest('.popup-tape__descr') && !e.target.closest('.popup-tape__for-sale')) {\n        popup.classList.remove('is-open')\n        popupContainer.classList.remove('is-open')\n        document.querySelector('body').classList.remove('overflow')\n      }\n    })\n  })\n})\n\n\n//# sourceURL=webpack://orden/./js/merch.js?");

/***/ }),

/***/ "./js/playpause.js":
/*!*************************!*\
  !*** ./js/playpause.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   actionBtn: () => (/* binding */ actionBtn),\n/* harmony export */   playPause: () => (/* binding */ playPause)\n/* harmony export */ });\nfunction playPause() {\n  document.querySelectorAll('.play-btn').forEach((el) => {\n    el.addEventListener('click', (e) => {\n      if (!e.target.closest('.play-btn')) {\n        const target = e.target.closest('.pause-btn')\n        const player = target.parentNode.parentNode\n        const audio = player.querySelector('audio')\n        target.innerHTML = `<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n      <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n         viewBox=\"0 0 60 60\" style=\"enable-background:new 0 0 60 60;\" xml:space=\"preserve\">\n      <g>\n        <path d=\"M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30\n          c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15\n          C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z\" fill = \"white\"/>\n        <path d=\"M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30\n          S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z\" fill = \"white\"/>\n      </svg>`;\n        audio.pause();\n        target.classList.add('play-btn')\n        target.classList.remove('pause-btn')\n        return\n      }\n\n      if (document.querySelector('.pause-btn')) {\n        document.querySelectorAll('.pause-btn').forEach((elem) => {\n          elem.innerHTML = `<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n          <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n             viewBox=\"0 0 60 60\" style=\"enable-background:new 0 0 60 60;\" xml:space=\"preserve\">\n          <g>\n            <path d=\"M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30\n              c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15\n              C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z\" fill = \"white\"/>\n            <path d=\"M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30\n              S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z\" fill = \"white\"/>\n          </svg>`\n          elem.classList.remove('pause-btn')\n          elem.classList.add('play-btn')\n        })\n      }\n\n      document.querySelectorAll('audio').forEach((sound) => {\n        sound.pause()\n      })\n      const target = e.target.closest('.play-btn')\n      const player = target.parentNode.parentNode\n      const audio = player.querySelector('audio')\n      target.innerHTML = `<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n        <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n           viewBox=\"0 0 60 60\" style=\"enable-background:new 0 0 60 60;\" xml:space=\"preserve\">\n        <g>\n          <path d=\"M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30\n            S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z\" fill=\"white\"/>\n          <path d=\"M33,46h8V14h-8V46z M35,16h4v28h-4V16z\" fill=\"white\"/>\n          <path d=\"M19,46h8V14h-8V46z M21,16h4v28h-4V16z\" fill=\"white\"/>\n        </svg>`;\n      audio.play();\n      target.classList.remove('play-btn')\n      target.classList.add('pause-btn')\n      return target\n    })\n  })\n}\n\nfunction actionBtn(box) {\n  box.querySelectorAll('.action-btn').forEach((elem) => {\n    elem.addEventListener('click', (e) => {\n      console.log('click')\n      if (e.target.closest('.is-disabled')) {\n        return\n      }\n      const box = e.target.closest('.albums__player');\n      const audio = box.querySelector('audio');\n      const trackName = box.querySelector('.player__song')\n\n      let tracks = [];\n      box.querySelectorAll('.albums__track').forEach((el) => {\n        tracks.push(el.textContent)\n      })\n      console.log(tracks)\n      const lastIndex = tracks.length - 1\n\n      if (e.target.closest('.next-btn')) {\n        if (box.querySelector('.prev-btn.is-disabled')) {\n          box.querySelector('.prev-btn.is-disabled').classList.remove('is-disabled')\n        }\n        for (const track of tracks) {\n          if (trackName.textContent == track) {\n            const index = tracks.indexOf(track)\n\n            if (index >= (lastIndex - 1)) {\n              e.target.closest('.next-btn').classList.add('is-disabled')\n\n            }\n            if (index < lastIndex) {\n              const nextTrack = tracks[index + 1]\n              console.log(nextTrack)\n              trackName.textContent = `${nextTrack}`\n              audio.src = `../audio/${nextTrack}.mp3`\n              document.querySelectorAll('audio').forEach((aud) => {\n                aud.pause()\n              })\n              if (box.querySelector('.play-btn')) {\n                box.querySelector('.play-btn').click()\n                return\n              } else {\n                audio.play()\n                return\n              }\n\n            }\n          }\n        }\n      }\n\n      if (e.target.closest('.prev-btn')) {\n        if (box.querySelector('.next-btn.is-disabled')) {\n          box.querySelector('.next-btn.is-disabled').classList.remove('is-disabled')\n        }\n        for (const track of tracks) {\n          if (trackName.textContent == track) {\n            const index = tracks.indexOf(track)\n            if (index <= 1) {\n              e.target.closest('.prev-btn').classList.add('is-disabled')\n            }\n            if (index <= lastIndex) {\n              let nextTrack = tracks[index - 1]\n              console.log(nextTrack)\n              trackName.textContent = `${nextTrack}`\n              audio.src = `../audio/${nextTrack}.mp3`\n              document.querySelectorAll('audio').forEach((aud) => {\n                aud.pause()\n              })\n              if (box.querySelector('.play-btn')) {\n                box.querySelector('.play-btn').click()\n                return\n              } else {\n                audio.play()\n                return\n              }\n            }\n          }\n\n        }\n      }\n    })\n  })\n}\n\n\n//# sourceURL=webpack://orden/./js/playpause.js?");

/***/ }),

/***/ "./js/popup.js":
/*!*********************!*\
  !*** ./js/popup.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   popupDonation: () => (/* binding */ popupDonation)\n/* harmony export */ });\nfunction popupDonation(btn) {\n  let popup = document.querySelector('.popup-donation');\n  let container = popup.querySelector('.popup-donation__container');\n\n  if (btn === true) {\n    popup.querySelector('.popup-donation__coins').classList.remove('display-none')\n    popup.querySelector('.popup-donation__contacts').classList.add('display-none')\n  } else {\n    popup.querySelector('.popup-donation__coins').classList.add('display-none')\n    popup.querySelector('.popup-donation__contacts').classList.remove('display-none')\n  }\n\n\n  popup.classList.add('is-open');\n  container.classList.add('is-open');\n\n  popup.addEventListener('click', (e) => {\n    if (!e.target.closest('.popup-donation__container')) {\n      popup.classList.remove('is-open')\n      container.classList.remove('is-open')\n\n    }\n  })\n}\n\n// popup-donation\ndocument.querySelectorAll('.footer__link').forEach((el) => {\n  el.addEventListener('click', () => {\n    popupDonation(btn = true)\n  })\n})\n\ndocument.querySelectorAll('.contacts-btn').forEach((el) => {\n  el.addEventListener('click', () => {\n    popupDonation(btn = false)\n  })\n})\n\n// popup-video\ndocument.querySelector('.footer__video-btn').addEventListener('click', () => {\n  const popup = document.querySelector('.popup-video')\n  const container = document.querySelector('.popup-video__container')\n  if (container.getElementsByTagName('iframe')) {\n    container.innerHTML = `<iframe id=\"player\" width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/E3YmuEBXxP8?rel=0\"\n    title=\"YouTube video player\" frameborder=\"0\"\n    allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\n    allowfullscreen>\n  </iframe>`\n  }\n\n  popup.classList.add('is-open')\n\n  popup.addEventListener('click', (e) => {\n    if (!e.target.closest('.popup-donation__container')) {\n      popup.classList.remove('is-open')\n      container.classList.remove('is-open')\n\n    }\n  })\n})\n\ndocument.querySelector('.albums__title_youtube').addEventListener('click', () => {\n  if (!document.querySelector('.video_tunnel')) {\n    document.querySelector('.albums__content_video').innerHTML = `<iframe class=\"video_tunnel\" width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/Ekiiv9KqMHU?rel=0\"\n  title=\"YouTube video player\" frameborder=\"0\"\n  allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\"\n  allowfullscreen>\n</iframe>\n<p class=\"albums__descr rus\">небольшой концерт для летучих мышей и пещерных грибов</p>\n <p class=\"albums__descr eng display-none\">little concert for bats and cave mushrooms</p>`\n  }\n\n})\n\n\n//# sourceURL=webpack://orden/./js/popup.js?");

/***/ }),

/***/ "./js/progressbar.js":
/*!***************************!*\
  !*** ./js/progressbar.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setProgress: () => (/* binding */ setProgress),\n/* harmony export */   updateProgress: () => (/* binding */ updateProgress)\n/* harmony export */ });\nfunction updateProgress(e) {\n  const duration = e.srcElement.duration;\n  const currentTime = e.srcElement.currentTime;\n  const progressPercent = (currentTime / duration) * 100;\n  const progressBar = e.target.parentNode.querySelector('.player__progressbar');\n  progressBar.style.width = `${progressPercent}%`;\n\n  const progressCurrentTime = e.target.parentNode.querySelector('.player__current-time');\n\n  let min = Math.trunc(Math.trunc(currentTime) / 60);\n  let sec = Math.trunc(currentTime) - (min * 60);\n  const allMin = Math.trunc(duration / 60);\n  if (min <= allMin) {\n    if (sec < 10) {\n      progressCurrentTime.textContent = `${min}:0${sec}`\n    } else {\n      progressCurrentTime.textContent = `${min}:${sec}`\n    }\n    if (sec == 60) {\n      sec = 0\n    }\n  }\n\n  if (currentTime == duration) {\n    console.log('the end')\n    document.querySelector('.next-btn').click()\n  }\n\n\n}\n\n// Перемотка трека\nfunction setProgress() {\n  document.querySelectorAll('.player__progress').forEach((el) => {\n    el.addEventListener('click', (e) => {\n      const audio = e.target.closest('.player').querySelector('audio')\n      const progressBar = e.target.closest('.player').querySelector('.player__progressbar')\n      const progress = e.target.closest('.player').querySelector('.player__progress')\n      const progressWidth = progress.clientWidth\n      const progressX = e.offsetX\n      const duration = audio.duration\n      audio.currentTime = (progressX / progressWidth) * duration\n\n    })\n  })\n}\n\n\n//# sourceURL=webpack://orden/./js/progressbar.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _addplayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addplayer */ \"./js/addplayer.js\");\n/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion */ \"./js/accordion.js\");\n/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_accordion__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _playpause__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playpause */ \"./js/playpause.js\");\n/* harmony import */ var _progressbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progressbar */ \"./js/progressbar.js\");\n\n\n\n\n\n  // Отображение плеера при раскрытии списка\n  document.querySelectorAll('.albums__title').forEach((el) => {\n    el.addEventListener('click', (e) => {\n      const target = e.target.closest('.albums__title');\n      const content = target.nextElementSibling\n      const albumName = target.textContent\n      const index = albumName.indexOf('-') - 1\n      const artist = albumName.slice(0, index)\n      const artistName = document.createElement('span')\n      artistName.classList.add('player__artist')\n      artistName.textContent = ` \\u00B7 ${artist}`\n\n      const trackList = content.querySelector('.albums__list')\n      const firstTrack = content.querySelector('.albums__track').textContent\n      if (content.querySelector('.player')) {\n        return\n      } else {\n        let player = (0,_addplayer__WEBPACK_IMPORTED_MODULE_0__.addPlayer)(firstTrack)\n        content.querySelector('.albums__player').insertBefore(player, trackList)\n        const progress = content.querySelector('.player__progress-container')\n        content.querySelector('.player__song-container').insertBefore(artistName, progress)\n        ;(0,_playpause__WEBPACK_IMPORTED_MODULE_2__.playPause)()\n        ;(0,_progressbar__WEBPACK_IMPORTED_MODULE_3__.setProgress)()\n        ;(0,_playpause__WEBPACK_IMPORTED_MODULE_2__.actionBtn)(content)\n        changeTrack()\n\n        if (content.querySelectorAll('.albums__item').length < 2) {\n          content.querySelectorAll('.action-btn').forEach((btn) => {\n            btn.classList.add('is-disabled')\n          })\n        }\n      }\n      document.querySelectorAll('audio').forEach((audio) => {\n        audio.addEventListener('timeupdate', _progressbar__WEBPACK_IMPORTED_MODULE_3__.updateProgress)\n      })\n    })\n  })\n\n  // Переключение трека нажатием на название\n  function changeTrack() {\n    document.querySelectorAll('.albums__item').forEach((el) => {\n      el.addEventListener('click', (e) => {\n        let tracks = [];\n        if (document.querySelector('.pause-btn')) {\n          document.querySelectorAll('.pause-btn').forEach((pause) => {\n            pause.classList.remove('pause-btn')\n            pause.classList.add('play-btn')\n            pause.innerHTML = `<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n            <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n               viewBox=\"0 0 60 60\" style=\"enable-background:new 0 0 60 60;\" xml:space=\"preserve\">\n            <g>\n              <path d=\"M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30\n                c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15\n                C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z\" fill = \"white\"/>\n              <path d=\"M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30\n                S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z\" fill = \"white\"/>\n            </svg>`;\n          })\n        }\n        const target = e.target.closest('.albums__item')\n        const track = target.querySelector('.albums__track').textContent\n        const player = target.parentNode.parentNode.querySelector('.player')\n        target.closest('.albums__list').querySelectorAll('.albums__track').forEach((elem) => {\n          tracks.push(elem.textContent)\n        })\n        const lastIndex = tracks.length - 1;\n\n        player.querySelectorAll('.action-btn').forEach((btn) => {\n          btn.classList.remove('is-disabled')\n        })\n\n\n        if (tracks.indexOf(track) == 0) {\n          player.querySelector('.prev-btn').classList.add('is-disabled')\n\n        } else if (tracks.indexOf(track) == lastIndex) {\n          player.querySelector('.next-btn').classList.add('is-disabled')\n\n        }\n\n\n        const audio = player.querySelector('audio')\n        audio.src = `../audio/${track}.mp3`;\n        player.querySelector('.player__song').textContent = `${track}`;\n        audio.addEventListener('loadedmetadata', () => {\n          let timeSong = audio.duration\n          timeSong = Math.trunc(timeSong)\n          minutes = Math.trunc(timeSong / 60)\n          if (minutes < 10) {\n            minutes = `0${minutes}`\n          }\n          sec = timeSong - (minutes * 60)\n          if (sec < 10) {\n            sec = `0${sec}`\n          }\n          player.querySelector('.player__full-time').textContent = ` ${minutes}:${sec}`;\n          player.querySelector('.player__current-time').textContent = `${audio.currentTime} /`;\n          if (player.querySelector('.play-btn')) {\n            player.querySelector('.play-btn').click()\n          }\n        })\n      })\n    })\n  }\n\n  // Нажатие по обложке\n  document.querySelectorAll('.albums__img').forEach((img) => {\n    img.addEventListener('click', (e) => {\n      const source = e.target.src\n\n      if (!document.querySelector('body overflow')) {\n        document.querySelector('body').classList.add('overflow')\n      }\n\n      const popup = document.querySelector('.popup-cover');\n      const popupContainer = popup.querySelector('.popup-cover__container')\n      const fullImg = popup.querySelector('.popup-cover__img')\n      fullImg.src = source;\n      popup.classList.add('is-open')\n      popupContainer.classList.add('is-open')\n\n      popup.addEventListener('click', (e) => {\n\n        if (!document.querySelector('.popup-tape.is-open')) {\n          document.querySelector('body').classList.remove('overflow')\n        }\n\n        popup.classList.remove('is-open')\n        popupContainer.classList.remove('is-open')\n\n      })\n    })\n  })\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://orden/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./js/script.js");
/******/ 	__webpack_require__("./js/addplayer.js");
/******/ 	__webpack_require__("./js/accordion.js");
/******/ 	__webpack_require__("./js/playpause.js");
/******/ 	__webpack_require__("./js/popup.js");
/******/ 	__webpack_require__("./js/languages.js");
/******/ 	__webpack_require__("./js/merch.js");
/******/ 	__webpack_require__("./js/progressbar.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./js/imageSize.js");
/******/ 	
/******/ })()
;