const defaultWhiteText = document.querySelectorAll(".color-white");
const defaultDesaturatedBlueText = document.querySelectorAll(".color-desaturated-blue");
const page = document.querySelector(".page");
const card = document.querySelectorAll(".card");
const themeSwitcher = document.querySelector(".theme-switcher__body");
const pageMainTitle = document.querySelector(".page__main-title");
const themeSwitcherLabel = document.querySelector(".theme-switcher__label");
const inp = document.querySelector("input");
const innerCircle = document.querySelector(".inner-circle");
const footerAttribution = document.querySelector(".footer__attribution");

themeSwitcher.addEventListener("change", () => {
  if (!inp.checked) {
    darkTheme();
  }
  else {
    lightTheme();
  }
});

function lightTheme() {
  page.classList.replace("page--dark-mode", "page--light-mode");

  defaultWhiteText.forEach((item) => {
    item.classList.replace("color-white", "color-dark-blue");
  });

  pageMainTitle.classList.replace("page__main-title--color-white", "color-dark-grayish-blue");

  defaultDesaturatedBlueText.forEach((item) => {
    item.classList.replace("color-desaturated-blue", "color-dark-grayish-blue");
  });

  card.forEach((item) => {
    item.classList.replace("card--dark-mode", "card--light-mode");
  });

  themeSwitcher.classList.replace("theme-switcher__body--dark-mode", "theme-switcher__body--light-mode");
  themeSwitcherLabel.classList.replace("theme-switcher__label--dark-mode", "theme-switcher__label--light-mode");

  innerCircle.classList.replace("inner-circle--dark-mode", "inner-circle--light-mode");

  footerAttribution.classList.replace("footer__attribution--dark-mode", "footer__attribution--light-mode");
}

function darkTheme() {
  page.classList.replace("page--light-mode", "page--dark-mode");

  defaultWhiteText.forEach((item) => {
    item.classList.replace("color-dark-blue", "color-white");
  });

  pageMainTitle.classList.replace("color-dark-grayish-blue", "page__main-title--color-white");

  defaultDesaturatedBlueText.forEach((item) => {
    item.classList.replace("color-dark-grayish-blue", "color-desaturated-blue");
  });

  card.forEach((item) => {
    item.classList.replace("card--light-mode", "card--dark-mode")
  });

  themeSwitcher.classList.replace("theme-switcher__body--light-mode", "theme-switcher__body--dark-mode");
  themeSwitcherLabel.classList.replace("theme-switcher__label--light-mode", "theme-switcher__label--dark-mode");
  
  innerCircle.classList.replace("inner-circle--light-mode", "inner-circle--dark-mode");

  footerAttribution.classList.replace("footer__attribution--light-mode", "footer__attribution--dark-mode");
}
