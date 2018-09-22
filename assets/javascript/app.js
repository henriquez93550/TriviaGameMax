$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};
/*
	var trivia = {
		questions: ['What can cats drinks but humans cannot?',
								'Who invented the cat flap AKA doggie door?',
								'What activity allows kittens release growth hormones?',
								'On average, how many years of life are added to a cat when they are neutered?',
								'What are male cats called?',
								'Where do cats sweat from?',
								'How many eye lids do cats have?',
								'What human invention matches the frequency of a cats purr?',
								'What other animals are able to purr?',
								'How many hours a day does a cat sleep?'],
		q1: ['A. Sea Water',
				 'B. Acid',
				 'C. Diamondium',
				 'D. Black Tar Heroin'],
		q2: ['A. Zac Efron',
				 'B. Leonardo DiVinci',
				 'C. Issac Newton',
				 'D. Michael Keaton'],
		q3: ['A. Sleeping',
				 'B. Yawning',
				 'C. Exercising',
				 'D. Winning a Game of Fortnight'],
		q4: ['A. 2 to 3 Years',
				 'B. 10 Years',
				 'C. 20 Months',
				 'D. They Achieve Immortality'],
		q5: ['A. Rebecca',
				 'B. Tom',
				 'C. Fred',
				 'D. Taco'],
		q6: ['A. The Nose',
				 'B. Their Butt',
				 'C. Their Paws',
				 'D. Their Transistors'],
		q7: ['A. Three',
				 'B. Seven',
				 'C. Twelve',
				 'D. Two'],
		q8: ['A. A Chain Saw',
				 'B. An Idling Diesel Engine',
				 'C. Both A & B',
				 'D. Electric Fence'],
		q9: ['A. Squirrels',
				 'B. Lemurs',
				 'C. Elephants',
				 'D. All Of The Above'],
		q10: ['A. 8 Hours',
				  'B. 16 Hours',
				  'C. 24 Hours',
				  'D. Cats Do Not Sleep']		 						
	}
*/
var correct = 0;
var wrong = 0;
var q1 = {
	question : 'What can cats drinks but humans cannot?',
	possibleAnswers : ['A. Sea Water',
	'B. Acid',
	'C. Diamondium',
	'D. Black Tar Heroin'],
	flags : [true, false, false, false],
	answer : 'C. Sea Water'
};

var q2 = {
	question: 'Who invented the cat flap AKA doggie door?',
	possibleAnswers: ['A. Zac Efron',
	'B. Leonardo DiVinci',
	'C. Issac Newton',
	'D. Michael Keaton'],
	flags : [false, false, true, false],
	answer : 'C. Issac Newton'
};

var q3 = {
	question : 'What activity allows kittens release growth hormones?',
	possibleAnswers : ['A. Sleeping',
	'B. Yawning',
	'C. Exercising',
	'D. Winning a Game of Fortnight'],
	flags : [true, false, false, false],
	answer : 'A. Sleeping'
};

var q4 = {
	question : 'On average, how many years of life are added to a cat when they are neutered?',
	possibleAnswers : ['A. 2 to 3 Years',
	'B. 10 Years',
	'C. 20 Months',
	'D. They Achieve Immortality'],
	flags : [true, false, false, false],
	answer : 'A. 2 to 3 Years'
};

var q5 = {
	question : 'What are male cats called?',
	possibleAnswers : ['A. Rebecca',
	'B. Tom',
	'C. Fred',
	'D. Taco'],
	flags : [false, true, false, false],
	answer : 'B. Tom'
};

var q6 = {
	question : 'Where do cats sweat from?',
	possibleAnswers : ['A. The Nose',
	'B. Their Butt',
	'C. Their Paws',
	'D. Their Transistors'],
	flags : [false, false, true, false],
	answer : 'C. Their Paws'
};

var q7 = {
	question : 'How many eye lids do cats have?',
	possibleAnswers : ['A. Three',
	'B. Seven',
	'C. Twelve',
	'D. Two'],
	flags : [true, false, false, false],
	answer : 'A. Three'
};

var q8 = {
	question : 'What human invention matches the frequency of a cats purr?',
	possibleAnswers : ['A. A Chain Saw',
	'B. An Idling Diesel Engine',
	'C. Both A & B',
	'D. Electric Fence'],
	flags : [false, true, false, false],
	answer : 'B. An Idling Diesel Engine'
};

var q9 = {
	question : 'What other animals are able to purr?',
	possibleAnswers : ['A. Squirrels',
	'B. Lemurs',
	'C. Elephants',
	'D. All Of The Above'],
	flags : [false, false, false, true],
	answer : 'D. All Of The Above'
};

var q10 = {
	question : 'How many hours a day does a cat sleep?',
	possibleAnswers : ['A. 8 Hours',
	'B. 16 Hours',
	'C. 24 Hours',
	'D. Cats Do Not Sleep'],
	flags : [false, true, false, false],
	answer : 'B. 16 Hours'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
//  getAnswer();  
//  nextQuestion(index);
}

//function nextQuestion() {
//	index = index++;
//	console.log(index);
//}

function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}
//		for (var i=0; i<questionArray.length; i++) {
//			$('.question').append('<p>'+questionArray[i].question+'</p>');
//			for (var j=0; j<questionArray[i].possibleAnswers.length; j++) {
//				$('.answers').append('<span><button id="possibleAnswer">' + questionArray[i].possibleAnswers[j]+ '</button></span>');
//			}
//			$('#possibleAnswers').on('click', function() {


//		console.log("click");
//		countdownTimer.start();
//		for (var i = 0; i < questionArray.length; i++) {
//			console.log(i);

//			$('.timer').html('<h3>'+countdownTimer.time + ' seconds remaining</h3>');
//			$('.question').html(questionArray[i].question);
//			while (countdownTimer != 0) {

//			}
		
//	});
//	$('#startButton').click(countdownTimer.start);

//}
setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});


//	$('#start').click(countdownTimer.start);
});