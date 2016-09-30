(function(){

//filter the words that have 3+ letters and generate a random one

var wordsOverThree = commonWords.filter(function(word){
  if(word.length >= 3) {
    return word;
  }
});

function generateRandomWord() {
  var randomNumber = Math.floor(Math.random() * wordsOverThree.length);
  return wordsOverThree[randomNumber];
}


var randomWord = generateRandomWord();
var guessesLeft = 8;

console.log(randomWord); //prints random word to the console

//get player's guess
var button = document.getElementById("button");
button.addEventListener("click", getGuess);

function getGuess() {
  var guess = document.getElementById("guess");
  var letter = guess.value;
  compareLetters(letter);
  decreaseGuess();
  guess.value = "";
}

//compare letter guess to random word
function compareLetters (letter) {
  event.preventDefault();
  // console.log(randomWord[]);
  for(var i = 0; i < randomWord.length; i++) {
    if (randomWord[i] == letter) {
      wordContainer.children[i].textContent = letter;
      console.log("Huzzah!");
      } else {
      console.log("No!!");
    }
   }
}
//decrease number of guesses left
function decreaseGuess() {
  guessesLeft -= 1;
  var guessNumber = document.getElementById("guess-number");
  guessNumber.textContent = guessesLeft;
}

//update empty spaces to correspond to the number of letters in the word
var wordContainer = document.querySelector(".word-container");


for(var i = 0; i < randomWord.length; i++) {
  var characterSpans = document.createElement("span");
  wordContainer.appendChild(characterSpans);
}



}());
