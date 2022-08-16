const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progBar = document.getElementById("prog");
const circles = document.querySelectorAll(".circle");

let progWidth = 0;
let count = 0;

const increaseProg = () => {
  if (count >= 0 && count < 3) {
    count += 1;
    progWidth += 33;
  }
  progBar.setAttribute("style", `width: ${progWidth}%`);
  if (count !== 0) {
    prevBtn.removeAttribute("disabled");
  }
  circles[count].classList.add("active");
  if (count == 3) {
    nextBtn.setAttribute("disabled", "");
  }
};

const decreaseProg = () => {
  if (count > 0 && count <= 3) {
    circles[count].classList.remove("active");
    count -= 1;
    progWidth -= 33;
  }

  if (count !== 3) {
    nextBtn.removeAttribute("disabled");
  }
  progBar.setAttribute("style", `width: ${progWidth}%`);
  if (count == 0) {
    prevBtn.setAttribute("disabled", "");
  }
};

nextBtn.addEventListener("click", increaseProg);
prevBtn.addEventListener("click", decreaseProg);
