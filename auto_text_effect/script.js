const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const defaultText = "Welcome to this website!";

let index = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = defaultText.slice(0, index);
  index++;

  if (index > defaultText.length) {
    index = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
