let btnEl = document.querySelector(".btn");
let colorEl = document.querySelector(".change-color");

let colors = ["red", "green", "blue"];
let i = 0;

btnEl.onclick = function () {
  colorEl.style.backgroundColor = colors[i];
  i++;
  if (i == 3) i = 0;
};
