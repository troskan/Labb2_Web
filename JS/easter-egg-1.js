let registerKeyDownPhrase = [];
let lastKeyPressed = null;

const modal = document.getElementsByClassName("modal-content");

addEventListener("keydown", function (event) {
  lastKeyPressed = event.key;

  registerKeyDownPhrase.length > 3
    ? (registerKeyDownPhrase = [])
    : registerKeyDownPhrase.push(lastKeyPressed);

  //Join the array to a whole word to check if it's the correct word.
  console.log(registerKeyDownPhrase.join(""));
  let completeWord = registerKeyDownPhrase.join("");

  completeWord === "1337" ? modalPopup() : "Wrong word";
});
let modalPopup = () => {
  document.getElementById("myModal").style.setProperty("display", "block");
  console.log("Modal Activated");
};
