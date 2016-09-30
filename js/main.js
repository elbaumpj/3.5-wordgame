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

console.log(generateRandomWord()); //prints random word to the console

//get player's guess and decrease number of guesses left
var button = document.getElementById("button");
button.addEventListener("click", getGuess);

function getGuess() {
  var guess = document.getElementById("guess");
  var letter = guess.value;
  guess.value = "";
  decreaseGuess();
}

function decreaseGuess() {
  var guessNumber = document.getElementById("guess-number");
}




}());
