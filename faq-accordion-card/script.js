const question = document.querySelectorAll(".card__body-question");
const answer = document.querySelectorAll(".card__body-answer");
const arrow = document.querySelectorAll(".icon");

question.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    item.classList.toggle("card__body-question--clicked");
  });
});
