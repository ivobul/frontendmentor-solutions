const categories = document.querySelectorAll(".component__summary-subtitle");
const icons = document.querySelectorAll(".component__summary-icon");
const scores = document.querySelectorAll(".component__summary-score");
const result = document.querySelector(".component__result-stack-title")
let total = 0;
let len = 0;

icons.forEach((item, index) => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => item.src = data[index].icon)
    .catch((error) => console.error(error));
});

categories.forEach((item, index) => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => item.innerText = data[index].category)
    .catch((error) => console.error(error));
});

scores.forEach((item, index) => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => item.innerText = data[index].score)
    .catch((error) => console.error(error));
});

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((elem) => {
      total += elem.score;
      len++;
    });
    
    result.innerText = Math.round(total / len);
  })
  .catch((error) => console.error(error));
