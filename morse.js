var alphabet = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  v: '...-',
  x: '-..-',
  y: '-.--',
  z: '--..'
};

var firstWord = "hello world";
var secondWord = "we love javascript";

/* Task is to get the strings of firstWord and secondWord to
be printed in morse rather than in letters in the console */

/* Split strings into array */
var firstWordArray = firstWord.split("");
var secondWordArray = secondWord.split("");

/* Create a for loop */
for (var i=0; i<firstWordArray.length; i++) {
  console.log(alphabet[firstWordArray[i]]);
};

console.log(" ")

for (var i=0; i<secondWordArray.length; i++) {
  console.log(alphabet[secondWordArray[i]]);
};


