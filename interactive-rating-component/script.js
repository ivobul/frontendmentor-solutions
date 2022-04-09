const form = document.querySelector(".form");

form.addEventListener("submit", () => {
  const radioBtns = document.querySelectorAll(".form__radio");
  radioBtns.forEach((item) => {
    if (item.checked) {
      localStorage.setItem("rating", item.value);
    }
  });
});