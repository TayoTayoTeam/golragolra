const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.carousel');

let index = 0;

prevButton.addEventListener('click', () => {
   if (index === 0) 
      index += 3;

   index -= 1;
   carousel.style.transform = `translate3d(-${300 * index}px, 0, 0)`
});

nextButton.addEventListener('click', () => {
   if (index === 2) 
      index -= 3;
      
   index += 1;
   carousel.style.transform = `translate3d(-${300 * index}px, 0, 0)`;
});
