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

var result = Object.keys(alphabet).map(function(key) {
  return [Number(key), alphabet[key]];
}); 

console.log(result);

var firstWord = "hello world";
var secondWord = "we love javascript";

for (var result = 0; result < firstWord.length; result++) {
  console.log(firstWord[result]);
}



