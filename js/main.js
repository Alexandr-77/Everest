
$('.popular__box').slick({
   infinite: true,
   speed: 1300,
   autoplay: true,
   autoplaySpeed: 3000,
   slidesToShow: 3,
   slidesToScroll: 1,
   responsive: [
     {
       breakpoint: 940,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
         infinite: true,
       }
     },
     {
       breakpoint: 660,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
   ]
 });


// ================================================== 
let burger = document.querySelector('.burger');
let nav = document.querySelector('.header__block-nav');


burger.addEventListener('click', rotateBurger); 

function rotateBurger() {
  
  burger.classList.toggle('burger-active');

  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }

}
// ===========================================
let blogItemBl = document.querySelectorAll('.blog__item-bl');
let blogTitleAk = document.querySelectorAll('.blog__title-ak');



const click1 = document.querySelector('#blog__click-1');
const click2 = document.querySelector('#blog__click-2');
const click3 = document.querySelector('#blog__click-3');
const click4 = document.querySelector('#blog__click-4');
const click5 = document.querySelector('#blog__click-5');


const id1 = document.querySelector('#blog__content-1');
const id2 = document.querySelector('#blog__content-2');
const id3 = document.querySelector('#blog__content-3');
const id4 = document.querySelector('#blog__content-4');
const id5 = document.querySelector('#blog__content-5');


const blogBtn = document.querySelector('.blog__btn');


click1.addEventListener('click', blogFun1);
function blogFun1() {
  id1.style.display = 'block';
  id2.style.display = 'none';
  id3.style.display = 'none';
  id4.style.display = 'none';
  id5.style.display = 'none';
}

click2.addEventListener('click', blogFun2);
function blogFun2() {
  id2.style.display = 'block';
  id1.style.display = 'none';
  id3.style.display = 'none';
  id4.style.display = 'none';
  id5.style.display = 'none';
}
click3.addEventListener('click', blogFun3);
function blogFun3() {
  id3.style.display = 'block';
  id1.style.display = 'none';
  id2.style.display = 'none';
  id4.style.display = 'none';
  id5.style.display = 'none';
}

click4.addEventListener('click', blogFun4);
function blogFun4() {
  id4.style.display = 'block';
  id1.style.display = 'none';
  id2.style.display = 'none';
  id3.style.display = 'none';
  id5.style.display = 'none';
}

click5.addEventListener('click', blogFun5);
function blogFun5() {
  id5.style.display = 'block';
  id1.style.display = 'none';
  id2.style.display = 'none';
  id3.style.display = 'none';
  id4.style.display = 'none';
}

blogBtn.addEventListener('click', function () {
  id1.style.display = 'block';
  id2.style.display = 'block';
  id3.style.display = 'block';
  id4.style.display = 'block';
  id5.style.display = 'block';
});


function blogblock() {
  if (window.screen.width < 768 ) {
  id1.style.display = 'block';
  id2.style.display = 'block';
  id3.style.display = 'block';
  id4.style.display = 'block';
  id5.style.display = 'block';
  }
}
blogblock()


// ============================
for (let i = 0; i < blogItemBl.length; i++) {
  blogItemBl[i].addEventListener('click', function() {
    blogItemBl.forEach( el => {
    if (el === blogItemBl[i]) {
      el.style.background = 'var(--color-dark)';
      el.childNodes[3].style.color = 'var(--color-light)';
    } else {
      el.style.background = "none";
      el.childNodes[3].style.color = 'var(--color-dark)';
    }})
  });
 
  
}

