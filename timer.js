


var questions = [
	{
		question: "Who is the first president of the United States?",
		answers: {
           a. "George Washington"
           b. "Donald Trump"
           c. "Thomas Jefferson"
           d. "Kanye West"
		},
		correctAnswer: 'a'
	},
	{
		question: "Who sailed the Ocean blue in 1942?",
		answers: {
            a. "King George II"
            b. "John Snow"
            c. "Christopher Columbus"
            d. "James Cook"
		},
        correctAnswer: 'c'
        

	}
];

function showquestions(questions, quizContainer){
	
	var output = [];
	var answers;

	for(var i=0; i<questions.length; i++){
		

		answers = [];


		for(letter in questions[i].answers){


			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
}

var quizContainer = document.getElementById('quiz');
generateQuiz(questions);