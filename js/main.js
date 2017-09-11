'use strict';

const bottom = document.querySelector(`.bottom-back`);
const sneakyPanel = document.querySelector(`.sneaky-panel`);

const headerHeight = sneakyPanel.offsetHeight;

const slideElements = document.querySelectorAll(`.slider-item`);
const sliderWrapper = document.querySelector(`.front`);
const btnsToElem = document.querySelectorAll(`.sneaky-link`);

correctSliderWrapperHeight(sliderWrapper, slideElements[0]);

for (let i = 0; i < btnsToElem.length; i++) {
  console.log(`i = ${i}`);
  btnsToElem[i].addEventListener(`click`, (e) => {
    
    for (let j = 0; j < slideElements.length; j++) {
      console.log(`j = ${j}`);
      if (j < i) {
        if (!slideElements[j].classList.contains(`left-page`)) {
          slideElements[j].classList.add(`left-page`);
          slideElements[j].classList.remove(`right-page`);
          slideElements[j].classList.remove(`center-page`);
        }
      }
      else if (j === i) {
        if (!slideElements[j].classList.contains(`center-page`)) {
          slideElements[j].classList.add(`center-page`);
          slideElements[j].classList.remove(`right-page`);
          slideElements[j].classList.remove(`left-page`);
        }
      }
      else if (j > i) {
        if (!slideElements[j].classList.contains(`right-page`)) {
          slideElements[j].classList.add(`right-page`);
          slideElements[j].classList.remove(`center-page`);
          slideElements[j].classList.remove(`left-page`);
        }
      }
    }
  });
}

initStartPage(slideElements, sliderWrapper);

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

  function isScrollOnTop(cordOfTop) {
    let screenHeight = cordOfTop;

    if (window.scrollY < screenHeight) {
      return true;
    }
    else {
      return false;
    }
  }

  function showHideFooter() {
    if (window.scrollY > window.innerHeight) {
      bottom.style.zIndex = '2';
    }
    else {
      bottom.style.zIndex = '0';
    }
  }

  function showHideSneakyPanel() {
    if (isScrollDown() && !isScrollOnTop(window.innerHeight - sneakyPanel.offsetHeight)) {
      sneakyPanel.style.top = `-${headerHeight + 10}px`;
    }
    else {
      sneakyPanel.style.top = 0;
    }
  }

  function changeTransparencySneakyPanel() {
    if (sneakyPanel.classList.contains(`solid-panel`) && isScrollOnTop(window.innerHeight + 10)) {
      sneakyPanel.classList.add(`transparent-panel`);
      sneakyPanel.classList.remove(`solid-panel`);
    }
    else if (!sneakyPanel.classList.contains(`solid-panel`) && !isScrollOnTop(window.innerHeight + 10)) {
      sneakyPanel.classList.add(`solid-panel`);
      sneakyPanel.classList.remove(`transparent-panel`);
    }
  }

  return () => {
    showHideFooter();
    showHideSneakyPanel();
    changeTransparencySneakyPanel();
  }
}

/*Инициализируем начальные положения страниц в сдайдере(.front)
и задаем ему высоту начального элемента
arrOfPages: массив с элементами слайдера, начальный элемент будет центральнм
wrapper: сам слайдер
*/
function initStartPage(arrOfPages, wrapper) {
  arrOfPages[0].classList.add(`center-page`);
  for (let i = 1; i < arrOfPages.length; i++) {
    arrOfPages[i].classList.add(`right-page`);
  }
  correctSliderWrapperHeight(wrapper,arrOfPages[0]);
}


function correctSliderWrapperHeight(wrapper, curElem) {
  console.log(curElem.offsetHeight);
  wrapper.style.height = `${curElem.offsetHeight}px`;
}

function smoothScroll(target) {
  console.log(window.scrollY);
  /*Разобраться с определением положения элемента getBoundingClientRect 
  дает положение относительно вьюпорта, нужно расчитать вместе со scrollY
  и вычислить положение элемента относително страницы
  */
  console.log(document.querySelector(`#about`).getBoundingClientRect());
}