let words = [
  "Child",
  "Think",
  "Thing",
  "Unite",
  "Voice",
  "Swing",
  "Trial",
  "Trick",
  "Sling",
  "Prick",
  "Noisy",
  "Exile",
  "Being",
  "Align",
  "Axial",
  "Brick",
  "Chick",
  "Daily",
  "Drink",
  "Fairy",
  "Glide",
  "Rover",
  "Racer",
  "Hyper",
  "Joker",
  "Laser",
  "Hover",
  "Power",
  "Owler",
  "Fixer",
  "Boxer",
  "Cyber",
  "Duper",
  "Eager",
  "Baker",
  "Later",
  "Tales",
  "Tesla",
  "Stale",
  "Least",
  "Slate"
];

let timeLeft = document.getElementById("timerLeft");
let letter1 = document.getElementById("letter1");
let letter2 = document.getElementById("letter2");
let letter3 = document.getElementById("letter3");
let letter4 = document.getElementById("letter4");
let letter5 = document.getElementById("letter5");
let startButton = document.getElementById("start");
let resetButton = document.getElementById("reset");
let wins = document.getElementById("winsNo");
let loses = document.getElementById("losesNo");

startButton.addEventListener("click", function(event) {
  playGame();
});

let getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

let playGame = function() {
randomWord();
checkLetters();};

let randomWord = function(getWord, chosenWord, wordSplit) {
getWord = words[getRandom(0, words.length)];
chosenWord = getWord.toUpperCase()
wordSplit = chosenWord.split("");
return wordSplit
};

let chosenWord = randomWord();

let checkLetters = function(l1, l2, l3, l4, l5) {
  l1 = chosenWord[0];
  l2 = chosenWord[1];
  l3 = chosenWord[2];
  l4 = chosenWord[3];
  l5 = chosenWord[4];

  console.log(l1);
  console.log(l2);
  console.log(l3);
  console.log(l4);
  console.log(l5);
  
  addEventListener("keydown", function(event, typed, check) {
    typed = event.key;
    check = typed.toUpperCase();
    switch(check) {
      case l1:
        letter1.textContent = l1;
        break;
      case l2:
        letter2.textContent = l2;
        break;
      case l3:
        letter3.textContent = l3;
        break;
      case l4:
        letter4.textContent = l4;
        break;
      case l5:
        letter5.textContent = l5;
    }
  });
};