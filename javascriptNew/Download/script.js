let inner = document.querySelector(".inner");
let percent = document.querySelector("h2");
let btn = document.querySelector("button");
let grow = 0;
btn.addEventListener("click", () => {
  btn.style.pointerEvents = "none";
  btn.style.opacity = "0.5";
  let num = 50 + Math.floor(Math.random() * 10);
  console.log(`Your file will be downloaded in ${num / 10} seconds`);
  var intervals = setInterval(() => {
    grow++;
    inner.style.width = grow + "%";
    percent.innerText = grow + "%";
  }, num);
  setTimeout(() => {
    clearInterval(intervals);
    btn.innerHTML = "Downloaded";
  }, num * 100);
});
