let dot = document.querySelector(".dot");
let btn = document.querySelector("button");
let count = 0;
btn.addEventListener("click", () => {
  count++;
  dot.textContent = count;
  dot.style.display = "initial";
});
