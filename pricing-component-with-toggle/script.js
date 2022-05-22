const toggleSwitch = document.querySelector(".toggle-switch__body");
const inp = document.querySelector("input");
const innerCircle = document.querySelector(".inner-circle");
const priceBasic = document.querySelector("#price-basic");
const priceProfessional = document.querySelector("#price-professional");
const priceMaster = document.querySelector("#price-master");

toggleSwitch.addEventListener("change", () => {
  if (!inp.checked) {
    monthly();
  }
  else {
    annually();
  }
});

function monthly() {
  innerCircle.classList.replace("inner-circle--annually", "inner-circle--monthly");
  priceBasic.innerText = "19.99";
  priceProfessional.innerText = "24.99";
  priceMaster.innerText = "39.99";
}

function annually() {
  innerCircle.classList.replace("inner-circle--monthly", "inner-circle--annually");
  priceBasic.innerText = "199.99";
  priceProfessional.innerText = "249.99";
  priceMaster.innerText = "399.99";
}

 


  
