let file = document.querySelector("#fileinp");
let inp = document.querySelector(".inp");
inp.addEventListener("click", () => {
  file.click();
});
file.addEventListener("change", (dets) => {
  const fileName = dets.target.files[0];
  if (fileName) {
    inp.textContent = fileName.name;
  }
});
