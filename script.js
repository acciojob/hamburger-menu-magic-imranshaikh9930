//your JS code here. If required.
const hamburger = document.querySelector(".hamburger");
const listItem = document.querySelector(".list__item");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  listItem.classList.toggle("active");
});
