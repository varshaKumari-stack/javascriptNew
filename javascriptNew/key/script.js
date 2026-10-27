let h1 = document.querySelector("h1");
document.addEventListener("keyup", function (dets) {
  if (dets.key === " ") {
    h1.textContent = "SPC";
  } else {
    h1.textContent = `${dets.key}`;
  }
});
