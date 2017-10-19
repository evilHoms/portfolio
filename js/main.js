'use strict';

const bottom = document.querySelector(`.bottom-back`);
const sneakyPanel = document.querySelector(`.sneaky-panel`);

const languageBtn = document.querySelector(`.language`);


const about = document.querySelector(`.about`);
const works = document.querySelector(`.works`);
const contacts = document.querySelector(`.contacts`);
const helloTitle = document.querySelector(`.hello-mate__title`);
const helloIntro = document.querySelector(`.hello-mate__cool-introduction`);
const aboutTitle = document.querySelector(`.about-me .cool-front-title`);
const worksTitle = document.querySelector(`.my-works .cool-front-title`);
const contactsTitle = document.querySelector(`.my-contacts .cool-front-title`);
const coolStoryTitle = document.querySelector(`.about-me .cool-story__title`);
const coolStoryText = document.querySelector(`.about-me .cool-story__text`);

console.log(aboutTitle);


const headerHeight = sneakyPanel.offsetHeight;

const slideElements = document.querySelectorAll(`.slider-item`);
const sliderWrapper = document.querySelector(`.front`);
const btnsToElem = document.querySelectorAll(`.sneaky-link`);

let currentLanguage = `en`;

for (let i = 0; i < btnsToElem.length; i++) {

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
          correctSliderWrapperHeight(sliderWrapper, slideElements[j]);
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
languageBtn.addEventListener(`click`, changeLanguage);

function disableLoader() {
  setTimeout(() => {
    document.querySelector(`.loader`).style.display = `none`;
  }, 100)
}

function changeLanguage() {
  
  switch(currentLanguage) {
    case `en`:
      currentLanguage = `ru`;
      changeToRu();
      break;
    case `ru`:
      currentLanguage = `en`;
      changeToEn();
      break;
  }
  
  function changeToRu() {
    console.log(currentLanguage);
    languageBtn.innerHTML = `Ру`;
    about.innerHTML = `Обо мне`;
    works.innerHTML = `Работы`;
    contacts.innerHTML = `Контакты`;
    helloTitle.innerHTML = `Я Игорь`;
    helloIntro.innerHTML = `фронт энд разработчик`;
    aboutTitle.innerHTML = `Обо Мне`;
    worksTitle.innerHTML = `Мои Работы`;
    contactsTitle.innerHTML = `Мои Контакты`;
    coolStoryTitle.innerHTML = `Инфо`;
    coolStoryText.innerHTML = `Меня зовут Игорь и я начинающий фронт энд разработчик. 
Получаю массу удовольствия от кодинга и стремлюсь к получению новых знаний и улучшению старых.`;
  }
  
  function changeToEn() {
    console.log(currentLanguage);
    languageBtn.innerHTML = `En`;
    about.innerHTML = `About`;
    works.innerHTML = `Works`;
    contacts.innerHTML = `Contacts`;
    helloTitle.innerHTML = `I'm Igor`;
    helloIntro.innerHTML = `a front end developer `;
    aboutTitle.innerHTML = `About Me`;
    worksTitle.innerHTML = `My Works`;
    contactsTitle.innerHTML = `My Contacts`;
    coolStoryTitle.innerHTML = `Some Info`;
    coolStoryText.innerHTML = `My name is Igor and I'm front end developer.
I got a lot of pleasure from coding and strive to gain new knowledge and improve old ones.`;
  }
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