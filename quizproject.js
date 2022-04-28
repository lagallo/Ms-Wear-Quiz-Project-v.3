let currentQuestion = 0;
let score = 0;
let hints = 0; //counter for hints shown
let maxHints = 3; // max hints to show

let questions = [
   {
	"question": "What is the law that enforces Islam in the Middle East?",
	"a": "Sharia Law",
	"b": "Akbar Law",
	"c": "Islam Law",
	"d": "Sujood Law",
	"image": "quizimages/q1.jpg",
	"hint": "Starts with 'S'",
	"answer": "a"
   },
   {
	"question": "What's happening in Israel and Palestine",
	"a": "Innocent Palestinians are being killed",
	"b": "IDF Soldiers are massacring Palestinians",
	"c": "All of the Above",
	"d": "Palestinians are terrorizing Israel",
	"image":"quizimages/q2.jpg",
	"hint":"Israel is evil",
	"answer": "c"
   },
   {
	"question": "Who is the current President of Syria ",
	"a": "Saddam Hussein"  ,
	"b": "Michael Jackson",
	"c": "Muammar Gaddafi",
	"d": "Bashar Al Assad",
	"image":"quizimages/q3.jpg",
	"hint": "Doesn't start with M",
	"answer": "d"
   },
   {
	"question": "Is Turkey and Cyprus in the Middle East",
	"a": "Mostly but Turkey has a portion in Europe",
	"b": "Mostly but Cyprus has a portion in Europe",
	"c": "Yes",
	"d": "No",
	"image":"quizimages/q4.jpg",
	"hint": "has a portion in Europe",
	"answer": "a"
   },
   {
	"question": "Which middle eastern country has the most oil",
	"a": "Kuwait",
	"b": "Bahrain",
	"c": "Syria",
	"d": "Saudi Arabia",
	"image":"quizimages/q5.jpg",
	"hint":"Starts with 'S' again",
	"answer": "d"
   },
   {
	"question": "Bangladesh and Pakistan are considered to be part of the middle east",
	"a": "True",
	"b": "False",
	"c": "True but only a little portion",
	"d": "It is widely debated",
	"image":"quizimages/q6.jpg",
	"hint":"Not answer a or b",
	"answer": "d"
   },
   {
	"question": "Middle East is mostly desert with a few oasis and sea",
	"a": "True",
	"b": "False",
	"c":"Maybe",
	"d":"All desert",
	"image":"quizimages/q7.jpg",
	"hint":"it would be unrealistic if all of middle east is mostly desert",
	"answer": "b" 
   },
   {
	"question": "Which movie was filmed in the Middle East",
	"a": "Avengers: Infinity War",
	"b": "Star Wars",
	"c": "Justice League",
	"d": "Lord of the Rings",
	"image":"quizimages/q8.jpg",
	"hint":"filmed with desert background",
	"answer": "b"
   },
   {
	"question": "Who did the September 11, 2001 attacks",
	"a": "George Bush",
	"b": "Osama Bin Laden",
	"c": "All of the Above",
	"d": "Kareem Abdul Jabbar",
	"image":"quizimages/q9.jpg",
	"hint":"Osama partaked in it",
	"answer": "c"
   },
   {
	"question": "Which one of these countries are most definitely in Middle East",
	"a": "Yemen",
	"b": "Pakistan",
	"c": "Indonesia",
	"d": "Algeria",
	"image":"quizimages/q10.jpg",
	"hint":"If it's debatable it is not in the middle east",
	"answer": "a"
   },
 ];
 
 window.onload = function () {
	 loadQuestion();
	 
 }
 
 function loadQuestion() {
     
    // close light box for first question
    if (currentQuestion == 0) {
       closeLightBox();
    }
     
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "70vh";
	img.style.maxHeight = "80vh";
	
	document.getElementById("hint").innerHTML = "You have " + (maxHints - hints) + " hint left.";
    
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
	// only show this line if c is not emtpys
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
	
	//get hint when  button is clicked
	document.getElementById("hintButton").onclick = getHintF;
 } // loadQuestion
 
 
 function markIt(ans) {
     
    let message = "";
    
    if (ans == questions[currentQuestion].answer) {
        
       // add 1 to score
       score++;
       
       // display score 
       document.getElementById("score").innerHTML = score + " / " + questions.length;
       
       message = "Correct! Good job! Your score is " + score + " / " + questions.length;
    } else {
       message = "Incorrect :(((( Keep going! Your score is " + score + " / " + questions.length; 
    } // else
        
   
    
    // move to the next question
    currentQuestion++;
    if (currentQuestion >= questions.length) {
		message = "Great Job! Your final score was " + score + " / " + questions.length;
		// add ability to restart
	   message += "<div id='restart' onClick='restartQuiz()'>Restart Quiz></div>";
	   message += "<div id='exit' onclick='closeQuiz()'>Close Quiz</div>";
	} else {
       loadQuestion();
    }
    
    // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
  
 }  // markIt
 
 function closeLightBox() {
    document.getElementById("lightbox").style.display = "none";
 } // closeLightbox
 
 
 let getHintF = function getHint() {
	//if max hints not reached
	
	if (hints < maxHints){
		
		//get hint for current question
		
		let currentHint = questions[currentQuestion].hint;
		
		//increment hints shown
		hints++;
		
		//show in page
		document.getElementById("hint").innerHTML = currentHint + "; you have used " + hints + " / " + maxHints + " of your hints.";

		
		
		
	} else {
		
		//show a message that there are no hints left
		
		
	}//else
	
	
	document.getElementById("hintButton").onclick = null;
	
	
	
}

function restartQuiz(){
		location.reload();
}

function closeQuiz() {
		window.close();
}
 
 if ('serviceWorker' in navigator) {
	 navigator.serviceWorker.register('/sw.js');
 }
 
 
 
 
 
 
 
   
