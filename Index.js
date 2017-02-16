var count = 0;
var score1 = 0;
var score2 = 0;
var score3 = 0;
var ticker1 = 0;
var ticker2 = 0;

for (var count = 0; count <11; count++){
  score1 = count;
  score2 = count;
  score3 = count;
}

if (count = 3){
  ticker1 = [count-2]
}

if (count = 6){
  ticker2 = [count-4]
}

if (score1 = 3){
  document.write('<div class="container"><p class="red">Red' + ticker1 + ' is equal to ' + score1 + '</p></div>')
}

if (score1 = 6){
  document.write('<div class="container"><p class="red">Red' + ticker2 + ' is equal to ' + score1 + '</p></div>')
}

if (score2 = 8){
  document.write('<div class="container"><p class="green">Green is equal to ' + score2 + '</p></div>')
}

if (score3 = 10){
  document.write('<div class="container"><p class="blue">Blue is equal to ' + score3 + '</p></div>')
}
