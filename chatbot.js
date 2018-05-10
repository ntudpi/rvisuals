var questionNum = 0;													// keep count of question, used for IF condition.
var question = '<h1>what is your name?</h1>';				  // first question

var output = document.getElementById('output');				// store id="output" in output variable
output.innerHTML = question;													// ouput first question

function bot() {
    var input = document.getElementById("input").value;
		var historyk = document.getElementById("historyk");
		historyk.innerHTML = historyk.innerHTML + input + "<br />";

    if (questionNum == 0) {
    output.innerHTML = '<h1>hello ' + input + '</h1>';
    question = '<h1>how old are you?</h1>';	
    }
    else if (questionNum == 1) {
    output.innerHTML = '<h1>That means you were born in ' + (2016 - input) + '</h1>';
    question = '<h1>where are you from?</h1>';
    }
	  else {
		output.innerHTML = 'thanks';
	  question = '<h1>where are you from?</h1>';
		}
		document.getElementById("input").value = "";  
}

function timedQuestion() {
    output.innerHTML = question;
}

document.addEventListener("keydown", keyDownTextField, false);
function keyDownTextField(e) {
var keyCode = e.keyCode;
  if(keyCode==13) {
  	bot();
		questionNum++;
  }
}
