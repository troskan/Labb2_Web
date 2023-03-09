const secondEasterEgg = document.getElementById("easter-egg-2");
const body = document.querySelector("body");
const header = document.querySelector("h1");

let onClickEaster = () => {
  body.style.setProperty("background", "pink");
  console.log("<span id=easter-egg-2> clicked!");
};
let onClickHeader = () => {
  body.style.setProperty("background", "white");
  console.log("<H1> clicked!");
};

secondEasterEgg.addEventListener("click", onClickEaster);
header.addEventListener("click", onClickHeader);
