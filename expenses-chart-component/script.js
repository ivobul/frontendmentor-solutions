const barLabels = document.querySelectorAll(".component__main-bar-label");
const toolTips = document.querySelectorAll(".tooltip");
const bars = document.querySelectorAll(".component__main-bar");

barLabels.forEach((label, index) => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => label.innerText = data[index].day)
    .catch((error) => console.error(error));
});

toolTips.forEach((tooltip, index) => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => tooltip.innerText = `$${data[index].amount}`)
    .catch((error) => console.error(error));
});

bars.forEach((bar, index) => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => bar.style.height = `calc(${data[index].amount}px * 3)`)
    .catch((error) => console.error(error));
});