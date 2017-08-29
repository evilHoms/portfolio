'use strict';

let  bottom = document.querySelector(`.bottom-back`);

document.addEventListener(`scroll`, show_bottom);

function show_bottom () {
  console.log(window.innerHeight);
  if (window.scrollY > window.innerHeight) {
    console.log('if');

    bottom.style.zIndex = '2';
  }
  else {
    console.log('else');
    bottom.style.zIndex = '0';
  }
}