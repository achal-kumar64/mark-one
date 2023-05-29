var readlineSync = require("readline-sync");

var sum = 0;

console.log("Hello!")
var usrname = readlineSync.question("Please enter your name ")
console.log(usrname, "lets see how well do you know Achal")
console.log(" ")
var questions = 
  [
  {
    q: "Where do Achal live? ",
    a: "delhi",
  },
  {
    q: "what's his favourite colour? ",
    a: "black",
  },
  {
    q: "His favourite food is ",
    a: "burger",
  },
  {
    q: "From which school he has done is schooling? ",
    a: "dps",
  },
  {
    q: "His favourite superhero is ",
    a: "ironman",
  }
]

  function play(c, b)
{
  var useranswer = readlineSync.question(c);
  if (useranswer === b)
  {
  console.log("RIGHT")
  console.log(" ")
  sum = sum+1;
  }
  else
  {
  console.log("No No No No...")
    console.log(" ")
}
}
  function game()
{
  for (i=0; i<questions.length; i++)
    {
  var currentquestion = questions[i];
  play(currentquestion.q, currentquestion.a);
}
}

game();
console.log("You answered", sum, "questions correctly")
