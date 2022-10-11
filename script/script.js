
//Загрузка левого блока
gsap.from(".hero__title", {
  opacity: 0,
  y: 300,
  duration: 1.2,
  ease: "expo",
});


gsap.from(".hero__descr", {
  opacity: 0,
  delay: 1,
  duration: 1.2,
  ease: "none",
});


gsap.from(".hero__btn", {
  opacity: 0,
  y: 300,
  duration: 1.2,
  ease: "expo",
});


//Загрузка правого блока

gsap.from("#photo_1", {
  opacity: 0,
  scale: 0.9,
  delay: 1,
  duration: 1.2,
});

gsap.from("#photo_2", {
  opacity: 0,
  scale: 0.9,
  delay: 1.2,
  duration: 1.2,
});

gsap.from("#photo_3", {
  opacity: 0,
  scale: 0.9,
  delay: 1.5,
  duration: 1.2,
});

gsap.from(".photos__author", {
  opacity: 0,
  delay: 1.6,
  duration: 1,
  ease: "power1",
});




// Бургер меню
let burgerBtn = document.querySelector('.burger')
let burgerMenu = document.querySelector('.menu')
let burgerCloce = document.querySelector('.close')

let tl = gsap.timeline({ paused: true })

tl.from(".menu__top", { opacity: 0, y: -100, duration: 0.5 })

  .to(".close", { opacity: 1, duration: 0.5 }, "+=0.5")

  .from(".menu", { opacity: 0, duration: 0.5, ease: "power1" })

  .from(".nav__list", { opacity: 0, y: 70, duration: 0.5 })

  .from(".social", { opacity: 0, y: 50, duration: 0.5 })

  .from(".menu__right", { opacity: 0, y: 50, duration: 0.5 }, "-=0.5")

burgerBtn.onclick = function () {
  burgerMenu.classList.toggle('menu--open');
  tl.play();
}

burgerCloce.onclick = function () {
  clearInterval
  setTimeout(() => {
    burgerMenu.classList.remove('menu--open')
  }, 2000)
  tl.reverse();
};



let photoCards = document.querySelectorAll('.photos__shape')
let tiLi = gsap.timeline({ paused: true })

photoCards.forEach(el => {

  el.addEventListener('click', (e) => {

    let self = e.currentTarget;
    //let cart = el.querySelector('.photos__shape');

    if (!self.classList.contains('zindex')) {
      self.classList.toggle('zindex')

      tiLi.from(self, { scale: 1, y: 300, duration: 1 });
      tiLi.play();

    } else {
      self.classList.remove('zindex');
      //tiLi.reverse();
    }

  })
})
