const heroWrapper = document.querySelector('.hero-wrapper');
const heroSlides  = document.querySelectorAll('.hero-wrapper .slide');
const heroPrev    = document.getElementById('hero-prev');
const heroNext    = document.getElementById('hero-next');
const heroDots    = document.querySelectorAll('.hero-dot');

let heroCurrent = 0;

function goToHeroSlide(index) {
  if (index < 0) index = heroSlides.length - 1;
  if (index >= heroSlides.length) index = 0;

  heroCurrent = index;

  const offset = -heroCurrent * 100;
  heroWrapper.style.transform = `translateX(${offset}%)`;

  heroDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === heroCurrent);
  });
}

console.log('heroWrapper =', heroWrapper);
console.log('heroSlides length =', heroSlides.length);
console.log('heroPrev =', heroPrev);
console.log('heroNext =', heroNext);
console.log('heroDots length =', heroDots.length);

if (heroWrapper && heroSlides.length && heroPrev && heroNext && heroDots.length) {
  console.log('Hero slider INIT');

  goToHeroSlide(0);

  heroNext.addEventListener('click', () => {
    goToHeroSlide(heroCurrent + 1);
  });

  heroPrev.addEventListener('click', () => {
    goToHeroSlide(heroCurrent - 1);
  });

  heroDots.forEach((dot, i) => {
    dot.addEventListener('click', () => goToHeroSlide(i));
  });
}


// reviews slider
const wrapper = document.querySelector(".s-wrapper");
const slides = document.querySelectorAll(".cont")
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");

let index = 0
let total = slides.length

function updateSlider(){
  wrapper.style.transform = `translateX(${-index * 100}%)`

  dots.forEach(dot => dot.classList.remove("active"))
  dots[index].classList.add("active")
}


next.addEventListener("click", ()=>{
  index++
  if(index >= total){
    index = 0
  }
updateSlider()
})


prev.addEventListener("click", ()=>{
  index--
  if(index < 0){
    index = total - 1
  }
updateSlider()
})


dots.forEach((dot , i)=>{
  dot.addEventListener("click" , ()=>{
    index = i
    updateSlider()
  })
})







