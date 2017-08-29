'use strict';

let  bottom = document.querySelector(`.bottom-back`);

document.addEventListener(`scroll`, show_bottom);

function show_bottom () {
  if (window.scrollY > window.innerHeight) {
    bottom.style.zIndex = '2';
  }
  else {
    bottom.style.zIndex = '0';
  }
}