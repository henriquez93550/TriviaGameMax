// create questions
var questions = [
    new Question("Where is the heart located on a shrimp?", ["Head", "Butt","Body", "Tail"], "Head"),
    new Question("What is the maximum time a snail can sleep?", ["8 Hours", "2 Days", "4 Hours", "3 Years"], "3 Years"),
    new Question("What land animal cannot jump?", ["Lemur", "Elephant","Giraffe", "Wombat"], "Elephant"),
    new Question("Which animal has fingerprints similar to humans", ["Aardvark", "Hedgehog", "Koala", "Ants"], "Koala"),
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
