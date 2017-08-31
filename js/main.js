'use strict';

let  bottom = document.querySelector(`.bottom-back`);

document.addEventListener(`scroll`, show_bottom);




window.onload = disableLoader(`.loader`);

function disableLoader(loaderClass) {
  setTimeout(() => {
    document.querySelector(loaderClass).style.display = `none`;
  }, 100)
}

function show_bottom () {
  if (window.scrollY > window.innerHeight) {
    bottom.style.zIndex = '2';
  }
  else {
    bottom.style.zIndex = '0';
  }
}