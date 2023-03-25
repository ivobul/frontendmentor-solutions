const shareBtn = document.querySelector(".component__share-btn");
const shareTooltip = document.querySelector(".share-tooltip");

shareBtn.addEventListener("focus", () => {
  shareTooltip.classList.add("active");
});

// preventing blur behavior
shareTooltip.addEventListener("mousedown", (e) => {
  e.preventDefault();
});

shareBtn.addEventListener("blur", () => {
  shareTooltip.classList.remove("active");
});