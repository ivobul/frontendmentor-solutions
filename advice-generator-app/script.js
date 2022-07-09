const number = document.querySelector("#number");
const advice = document.querySelector("#advice");
const btn = document.querySelector(".app__btn");

window.addEventListener("load", getData);
btn.addEventListener("click", getData);

async function getData() {
  try {
    let response = await fetch('https://api.adviceslip.com/advice', { cache: "no-cache" }); // https://stackoverflow.com/a/71847275
    let text = await response.json();
    number.innerText = text.slip.id;
    advice.innerText = text.slip.advice;
  }
  catch(e) {
    console.log('Error!', e);
  }
}