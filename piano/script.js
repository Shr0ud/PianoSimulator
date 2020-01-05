// get sounds
const C4 = new Audio("sounds/C4.mp3");
const Db4 = new Audio("sounds/Db4.mp3");
const D4 = new Audio("sounds/D4.mp3");
const Eb4 = new Audio("sounds/Eb4.mp3");
const E4 = new Audio("sounds/E4.mp3");
const F4 = new Audio("sounds/F4.mp3");
const Gb4 = new Audio("sounds/Gb4.mp3");
const G4 = new Audio("sounds/G4.mp3");
const Ab4 = new Audio("sounds/Ab4.mp3");
const A4 = new Audio("sounds/A4.mp3");
const Bb4 = new Audio("sounds/Bb4.mp3");
const B4 = new Audio("sounds/B4.mp3");
const C5 = new Audio("sounds/C5.mp3");
const Db5 = new Audio("sounds/Db5.mp3");
const D5 = new Audio("sounds/D5.mp3");
const Eb5 = new Audio("sounds/Eb5.mp3");
const E5 = new Audio("sounds/E5.mp3");

//experimenting with dictionaries
const soundDict = {
  "C4": C4,
  "Db4": Db4,
  "D4": D4,
  "Eb4": Eb4,
  "E4": E4,
  "F4": F4,
  "Gb4": Gb4,
  "G4": G4,
  "Ab4": Ab4,
  "A4": A4,
  "Bb4": Bb4,
  "B4": B4,
  "C5": C5,
  "Db5": Db5,
  "D5": D5,
  "Eb5": Eb5,
  "E5": E5

};


function toggleKey(keyPressed){

  const key = document.querySelector(keyPressed); 
  key.classList.add("active");
  setTimeout(() => key.classList.remove("active"), 200);

}


function playSound(keyObj, keyStr){

  toggleKey(`.${keyStr}`); //add the . before passing

  const note = keyObj.cloneNode();
  note.play();

  // fade out sound
  setTimeout(() => (note.volume = 0.8), 400);
  setTimeout(() => (note.volume = 0.6), 800);
  setTimeout(() => (note.volume = 0.4), 1200);
  setTimeout(() => (note.volume = 0.2), 1600);
  setTimeout(() => (note.volume = 0), 2000);
};

// mouse clicks
const pianoKeys = document.querySelectorAll(".key");
for (let key of pianoKeys){

  key.addEventListener("click", (event) => {
    
    const keyPressed = event.srcElement.classList[2]; //2 is the unique note index
    playSound(soundDict[keyPressed], keyPressed); //use the dictionary

  });
}


// key presses

window.addEventListener("keydown", (event) => {

  const key = event.key;
  
  // Press Q
  if (key === "q") return playSound(C4, "C4");

  // Press 2
  if (key === "2") return playSound(Db4, "Db4");

  // Press W
  if (key === "w") return playSound(D4, "D4");

  // Press 3
  if (key === "3") return playSound(Eb4, "Eb4");

  // Press E
  if (key === "e") return playSound(E4, "E4");

  // Press R
  if (key === "r") return playSound(F4, "F4");

  // Press 5
  if (key === "5") return playSound(Gb4, "Gb4");

  // Press T
  if (key === "t") return playSound(G4, "G4");

  // Press 6
  if (key === "6") return playSound(Ab4, "Ab4");

  // Press Y
  if (key === "y") return playSound(A4, "A4");

  // Press 7
  if (key === "7") return playSound(Bb4, "Bb4");

  // Press U
  if (key === "u") return playSound(B4, "B4");

  // Press I
  if (key === "i") return playSound(C5, "C5");

  // Press 9
  if (key === "9") return playSound(Db5, "Db5");

  // Press O
  if (key === "o") return playSound(D5, "D5");

  // Press 0 
  if (key === "0") return playSound(Eb5, "Eb5");

  // Press P
  if (key === "p") return playSound(E5, "E5");
}); 