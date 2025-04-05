let counter = 3

const topRightTextElem = document.querySelector(".app__top-right")
const notifyPostsElem = document.querySelector(".app__top-notify")
const boxElements = document.querySelectorAll(".app__main-box")
const ovalElements = document.querySelectorAll(".oval")

notifyPostsElem.innerText = `${counter}`

topRightTextElem.addEventListener("click", changeVisualState)

function changeVisualState() {
  counter = 0
  
  notifyPostsElem.innerText = `${counter}`
  
  boxElements.forEach((elem) => {
    elem.classList.remove("app__main-box--unread")
  })
  
  ovalElements.forEach((elem) => {
    elem.style.display = "none"
  })
}