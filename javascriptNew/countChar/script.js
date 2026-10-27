let input = document.querySelector("input");
let span = document.querySelector("span");
input.addEventListener("input", () => {
  let value = 50 - input.value.length;
  span.textContent = value;
  console.log(value);
  if (value < 0) {
    span.style.color = "red";
  } else {
    span.style.color = "#fff";
  }
});
