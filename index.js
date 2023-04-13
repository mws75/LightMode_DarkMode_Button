const root = document.querySelector("html");
const switchBtn = document.querySelector(".switch-btn");
const content = document.querySelector(".content");

switchBtn.addEventListener("click", () => {
  root.classList.toggle("dark");
  if (root.classList.contains("dark")) {
    content.innerText = "This is Dark Mode";
  } else {
    content.innerText = "This is Light Mode";
  }
});
