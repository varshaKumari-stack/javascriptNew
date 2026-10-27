let btn = document.querySelector("button");
let h3 = document.querySelector("h3");
let flag = 0;
btn.addEventListener("click", () => {
  if (flag === 0) {
    h3.innerHTML = " Friends";
    btn.innerHTML = "Remove Friend";
    btn.style.backgroundColor = "red";
    flag = 1;
  } else {
    h3.innerHTML = "Stranger";
    btn.innerHTML = "Add Friend";
    btn.style.backgroundColor = "green";
    flag = 0;
  }
});
