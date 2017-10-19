'use strict';

const bottom = document.querySelector(`.bottom-back`);
const sneakyPanel = document.querySelector(`.sneaky-panel`);

const languageBtn = document.querySelector(`.language`);


// Элементы с текстом, для перевода на ру\ен.
const about = document.querySelector(`.about`);
const works = document.querySelector(`.works`);
const contacts = document.querySelector(`.contacts`);
const helloTitle = document.querySelector(`.hello-mate__title`);
const helloIntro = document.querySelector(`.hello-mate__cool-introduction`);
const aboutTitle = document.querySelector(`.about-me .cool-front-title`);
const worksTitle = document.querySelector(`.my-works .cool-front-title`);
const contactsTitle = document.querySelector(`.my-contacts .cool-front-title`);
const coolStoryTitleInfo = document.querySelector(`.info .cool-story__title`);
const coolStoryTextInfo = document.querySelector(`.info .cool-story__text`);
const coolStoryTitleTech = document.querySelector(`.tech .cool-story__title`);
const coolStoryTextTech = document.querySelector(`.tech .cool-story__text`);
const coolStoryTitleLearn = document.querySelector(`.learn .cool-story__title`);
const coolStoryTextLearn = document.querySelector(`.learn .cool-story__text`);
const contactMeName = document.querySelector(`.contact-me__name`);
const contactMeImOne = document.querySelector(`.contact-me__im-one`);
const contactMeText = document.querySelectorAll(`.contact-me__text`);
const contactMeBtn = document.querySelector(`.front__contact-me .msg-btn`);
const copyright = document.querySelector(`.copy-pls`);


const headerHeight = sneakyPanel.offsetHeight;

const slideElements = document.querySelectorAll(`.slider-item`);
const sliderWrapper = document.querySelector(`.front`);
const btnsToElem = document.querySelectorAll(`.sneaky-link`);

let currentLanguage = `ru`;
changeLanguage();

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
  const loader = document.querySelector(`.loader`);
  setTimeout(() => {
    loader.style.bottom = loader.offsetHeight + 'px';
    loader.style.opacity = 0;
  }, 100);
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
    coolStoryTitleInfo.innerHTML = `Инфо`;
    coolStoryTextInfo.innerHTML = `Меня зовут Игорь и я начинающий фронт энд разработчик. 
Получаю массу удовольствия от кодинга и стремлюсь к получению новых знаний и улучшению старых.`;
    coolStoryTitleTech.innerHTML = `Используемые Технологии`;
    coolStoryTextTech.innerHTML = `Верстаю макеты используя все возможности HTML5 и CSS3, сделаю это быстро используя Emmet и Sass,
оживлю с помощью JS и всей мощи стандатов ECMA Script, превращу в полноценное веб-приложение с ReactJS.
Так же в работе использую систему контроля версий Git и сборщик Gulp.`;
    coolStoryTitleLearn.innerHTML = `Образование`;
    coolStoryTextLearn.innerHTML = `Окончил университет Им. Ф.Ф. Ушакова в Новороссийске, имею высшее образование по инженерной специальности,
прошел множество курсов по веб разработке, от простых бесплатных, как на "SoloLearn", так и более продвынутых, на "Нетологии".
Постоянно занимаюсь самообразованием и стараюсь изучать новые технологии и совершенствоваться в уже изученных.`;
    contactMeName.innerHTML = `Меня зовут Игорь`;
    contactMeImOne.innerHTML = `Я тот, кто вам нужен!`;
    contactMeText[0].innerHTML = `Если у вас есть проект, который вы хотите начать, или думаете,`;
    contactMeText[1].innerHTML = `что вам нужна моя помощь с чем-то, тогда`;
    contactMeBtn.innerHTML = `Напишите мне`;
    copyright.innerHTML = `Копирайт`;

    correctHeight(slideElements, sliderWrapper);
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
    coolStoryTitleInfo.innerHTML = `Some Info`;
    coolStoryTextInfo.innerHTML = `My name is Igor and I'm front end developer.
I got a lot of pleasure from coding and strive to gain new knowledge and improve old ones.`;
    coolStoryTitleTech.innerHTML = `The Technologies I Use`;
    coolStoryTextTech.innerHTML = `I rotate layouts with all the features of HTML5 and CSS3, I'll do it quickly using Emmet and Sass,
I will revive with the help of Java Script and all the power of the ECMA Script standard, turn it into a full web application with ReactJS.
I also use the Git version control system and the Gulp collector.`;
    coolStoryTitleLearn.innerHTML = `My Education`;
    coolStoryTextLearn.innerHTML = `I graduated from the University. F.F. Ushakov in Novorossiysk, I have a higher education in engineering,
went through a lot of courses on web development, from simple free, both to "SoloLearn", and more advanced, on "Netology."
I am constantly engaged in self-education and try to learn new technologies and improve in what I have already studied.`;
    contactMeName.innerHTML = `My name is Igor`;
    contactMeImOne.innerHTML = `I'm the one you need!`;
    contactMeText[0].innerHTML = `If you have a project that you want to get started, think you need my help`;
    contactMeText[1].innerHTML = `with something or just fancy saying hey, then get in touch.`;
    contactMeBtn.innerHTML = `Message me`;
    copyright.innerHTML = `Some copyright`;

    correctHeight(slideElements, sliderWrapper);
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

function correctHeight(arrOfPages, wrapper) {
  arrOfPages.forEach(el => {
    if (el.classList.contains(`center-page`))
      correctSliderWrapperHeight(wrapper, el);
  });
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