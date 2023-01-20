// Business Logic
function pigLatin(text) {
  const testVowels = ["a", "e", "i", "o", "u"]
  const testQu = ["q", "u"]
  const letters =["b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "r", "s", "t","v", "w", "x", "y", "z"]
  const textSplit = text.split(' ')
  console.log(textSplit)
  for (i = 0; i <= textSplit.length - 1; i++) {
    console.log(textSplit[i].charAt(0))
    if (testQu.includes(textSplit[i].charAt(0)) && testQu.includes(textSplit[i].charAt(1))) {
      console.log("The QU checks properly")
    }
    else if (testVowels.includes(textSplit[i].charAt(0))) {
      console.log("Hey the vowels check properly")
    }
    else if (letters.includes(textSplit[i].charAt(0))) {
      console.log("Hey every other letter works")
    }
  }
};

// UI Logic
function handleFormSubmission() {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value.replace(/\r\n/g,'\n');
  translation = pigLatin(passage)


}

window.addEventListener("load", function(){
  document.querySelector("form#pig-latin-translator").addEventListener("submit", handleFormSubmission);
});

