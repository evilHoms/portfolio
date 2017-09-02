'use strict';

const bottom = document.querySelector(`.bottom-back`);
const sneakyPanel = document.querySelector(`.sneaky-panel`);

window.addEventListener(`load`, disableLoader);
document.addEventListener(`scroll`, documentScrolled());


function disableLoader() {
  setTimeout(() => {
    document.querySelector(`.loader`).style.display = `none`;
  }, 100)
}

function documentScrolled () {
  let prevScrollPos = 0;
  let curScrollPos = window.scrollY;
  const headerHeight = sneakyPanel.offsetHeight;

  function isScrollDown() {
    prevScrollPos = curScrollPos;
    curScrollPos = window.scrollY;

    if (curScrollPos - prevScrollPos > 0) {
      return true;
    }
    else {
      return false;
    }

  }

  return () => {
    if (window.scrollY > window.innerHeight) {
      bottom.style.zIndex = '2';
    }
    else {
      bottom.style.zIndex = '0';
    }

    if (isScrollDown()) {
      sneakyPanel.style.top = `-${headerHeight + 10}px`;
    }
    else {
      sneakyPanel.style.top = 0;
    }
  }
}