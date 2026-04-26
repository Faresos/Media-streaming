  // menu toggle functionality
  const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});






document.querySelectorAll(".categories").forEach(category => {

  const wrapper = category.querySelector(".wrapper");
  const slides  = category.querySelectorAll(".cat-slider");
  const next    = category.querySelector(".next");
  const prev    = category.querySelector(".prev");
  const dots    = category.querySelectorAll(".dot");

  if (!wrapper || !slides.length) return;

  let currentSlide = 0;

  function updateSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    currentSlide = index;
    wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);
    });
  }

  updateSlide(0);

  next?.addEventListener("click", () => {
    updateSlide(currentSlide + 1);
  });

  prev?.addEventListener("click", () => {
    updateSlide(currentSlide - 1);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      updateSlide(i);
    });
  });

});
































// asked questions toggle functionality
const question = document.querySelectorAll(".q-box")

question.forEach(function(ele){
  ele.addEventListener("click",function(event){
    if(event.target.classList.contains("fa-solid")){
      event.target.classList.toggle("fa-plus");
      event.target.classList.toggle("fa-minus");
    }
    const p = ele.querySelector("p")
    if(event.target.classList.contains("fa-plus")){
      if(p){
        p.style.display="none"
      }
    }else if(event.target.classList.contains("fa-minus")){
      if(p){
        p.style.display="flex"
      }
    }
  })
}
)


let svgCont = document.querySelectorAll(".svg");

svgCont.forEach(function(ele){
  ele.addEventListener("click",function(){
    ele.parentElement.parentElement.classList.toggle("active");
  })
})

// flip card functionality

const btnMonthly = document.getElementById('btn-monthly');
const btnYearly  = document.getElementById('btn-yearly');
const cards      = document.querySelectorAll('.plan-inner');

btnMonthly.addEventListener('click', () => {
  cards.forEach(card => card.classList.remove('flipped')); 
  btnMonthly.classList.add('active');
  btnYearly.classList.remove('active');
});

btnYearly.addEventListener('click', () => {
  cards.forEach(card => card.classList.add('flipped'));    
  btnYearly.classList.add('active');
  btnMonthly.classList.remove('active');
});


// subscribe
let subscribeBtn = document.querySelectorAll(".table-header ul li");

subscribeBtn.forEach(function(ele){
  ele.addEventListener("click", function(event){
    let className = event.target.classList[0];
    document.querySelectorAll(".table-body ul li").forEach(function(li){
      if(li.classList.contains(className)){
        li.classList.add("active");
      }else{
        li.classList.remove("active");
      }
    });
  })
})











