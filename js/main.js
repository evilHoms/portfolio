'use strict';

const bottom = document.querySelector(`.bottom-back`);
const sneakyPanel = document.querySelector(`.sneaky-panel`);

const headerHeight = sneakyPanel.offsetHeight;

const about = document.querySelector(`.about`);
const works = document.querySelector(`.works`);
const contacts = document.querySelector(`.contacts`);

const aboutPage = document.querySelector(`.about-page`);
const worksPage = document.querySelector(`.works-page`);
const contactsPage = document.querySelector(`.contacts-page`);

let currentPage = `about`;

about.addEventListener(`click`, aboutClicked);
works.addEventListener(`click`, worksClicked);
contacts.addEventListener(`click`, contactsClicked);

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

  function isScrollOnTop() {
    let screenHeight = window.innerHeight;
    console.log(screenHeight);
    if (window.scrollY < screenHeight - sneakyPanel.offsetHeight) {
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

    if (isScrollDown() && !isScrollOnTop()) {
      sneakyPanel.style.top = `-${headerHeight + 10}px`;
    }
    else {
      sneakyPanel.style.top = 0;
    }

    if (isScrollOnTop()) {
      sneakyPanel.style.backgroundColor = `rgba(255, 255, 255, 0.0)`;
      sneakyPanel.style.boxShadow = `none`;
    }
    else {
      sneakyPanel.style.backgroundColor = `rgba(255, 255, 255, 1.0)`;
      sneakyPanel.style.boxShadow = `0 0 5px #555555`;
    }
  }
}

function aboutClicked() {
  if (currentPage != `about`) {
    currentPage = `about`;
    console.log(`About clicked`);

    aboutPage.style.position = `relative`;
    aboutPage.style.zIndex = `3`;
    worksPage.style.position = `absolute`;
    worksPage.style.zIndex = `0`;
    contactsPage.style.position = `absolute`;
    contactsPage.style.zIndex = `0`;
    contactsPage.style.display = `none`;
    aboutPage.style.display = `block`;
    worksPage.style.display = `none`;
  }
}

function worksClicked() {
  if (currentPage != `works`) {
    currentPage = `works`;
    console.log(`Works clicked`);
    worksPage.style.position = `relative`;
    worksPage.style.zIndex = `3`;
    aboutPage.style.position = `absolute`;
    aboutPage.style.zIndex = `0`;
    contactsPage.style.position = `absolute`;
    contactsPage.style.zIndex = `0`;
    contactsPage.style.display = `none`;
    aboutPage.style.display = `none`;
    worksPage.style.display = `block`;
  }
}

function contactsClicked() {
  if (currentPage != `contacts`) {
    currentPage = `contacts`;
    console.log(`Contacts clicked`);
    contactsPage.style.position = `relative`;
    contactsPage.style.zIndex = `3`;
    worksPage.style.position = `absolute`;
    worksPage.style.zIndex = `0`;
    aboutPage.style.position = `absolute`;
    aboutPage.style.zIndex = `0`;
    contactsPage.style.display = `block`;
    aboutPage.style.display = `none`;
    worksPage.style.display = `none`;
  }
}

