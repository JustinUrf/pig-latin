html

form for users to input data
area where user sees their own input data
area where users sees returned input data translated into pig latin

css
>
cheating with bootstrap


js
>
variable that contains fetched user input
event handler button
function that handles translation from english text to pig latin.
  recognize what is a "full" word and sentence.
  split the string into words that fit in an area. For example. 
  stringExmaple = "Here is a string" 
  splitStringArr = ["here", "is,", "a", "string"]
  function needs to take in every index and change the index based off of 3 rules

  3 rules are:
  -If the string contains a cosonate, move to the end + ay. Hello >
  Ello + h + ay > Ellohay

  -If it starts with a vowel, (a, e, i, o, u) > add "way" to end of the string i.e away > away + way > awayway

  -If it starts with qu move both + ay > quick > uick + qu + ay > uickquay

display results to user.