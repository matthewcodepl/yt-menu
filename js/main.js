const bar = document.getElementById("burger");
const menu = document.querySelector("#nav");

bar.addEventListener("click", () => {
  console.log("klik");
  menu.classList.toggle("mobile-nav");
});
