const bar = document.querySelector("#burger");
const menu = document.querySelector("#nav");

bar.addEventListener("click", () => {
  menu.classList.toggle("rwd-menu");
});
