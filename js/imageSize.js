
const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
console.log('width', screenWidth)
document.querySelectorAll('.albums__img').forEach((el) => {
  let source
  if (el.id) {
     source = el.id.slice(-1)
    console.log('source', source)
  }



  // Проверяем ширину экрана и устанавливаем соответствующий путь к изображению
  if (screenWidth <= 340 && source !== undefined) {
    el.src = `./img/obl${source}_320.jpg`;
    console.log(el.src)
  } else if (source !== undefined) {
    el.src = `./img/obl${source}.jpg`
  }
})
