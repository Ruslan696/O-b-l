
document.addEventListener('DOMContentLoaded', () => {
  const accordionItems = document.querySelectorAll('.albums__title');

  accordionItems.forEach((item) => {
    item.addEventListener('click', () => {
      const accordionBox = item.nextElementSibling;
      accordionBox.classList.toggle('active');
    });
  });
})




