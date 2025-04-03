const questions = [
	{
		question: `What is the correct syntax for referring to an external script called "app.js" ?`,

		answers: [
			{option: `<script href="app.js"></script>`, correct: false},
			{option: `<script name="app.js"></script>`, correct: false},
			{option: `<script src="app.js"></script>`, correct: true},
			{option: `<script file="app.js"></script>`, correct: false}
		]
	},

	{
		question: `How do you write "Hello, World!" in an alert box?`,

		answers: [
			{option: `alertBox("Hello, World!");`, correct: false},
			{option: `alert("Hello, World!");`, correct: true},
			{option: `msgBox("Hello, World!");`, correct: false},
			{option: `msg("Hello, World!");`, correct: false}
		]
	},

	{
		question: "How do you create a function in JavaScript?",

		answers: [
			{option: "function = myFunction()", correct: false},
			{option: "function myFunction()", correct: true},
			{option: "function:myFunction()", correct: false},
			{option: "create myFunction()", correct: false}
		]
	},

	{
		question:  "How do you call a function named myFunction?",


		answers: [
			{option: "call myFunction()", correct: false},
			{option: "myFunction()", correct: true},
			{option: "call function myFunction()", correct: false},
			{option: "execute myFunction()", correct: false}
		]
	},

	{
		question: "How can you add a single-line comment in JavaScript?",

		answers: [
			{option: "<!-- This is a comment -->", correct: false},
			{option: "// This is a comment", correct: true},
			{option: "/* This is a comment */", correct: false},
			{option: "# This is a comment", correct: false}
		]
	},

	{
		question: "How do you declare a JavaScript variable?",

		answers: [
			{option: "variable x;", correct: false},
			{option: "declare x;", correct: false},
			{option: "x variable;", correct: false},
			{option: "let x;", correct: true}
		]
	},

	{
		question: "What is the correct way to check if x is equal to 5 in JavaScript?",

		answers: [
			{option: "if (x = 5)", correct: false},
			{option: "if (x == 5)", correct: false},
			{option: "if x == 5 then", correct: false},
			{option: "if (x === 5)", correct: true}
		]
	},

	{
		question: "What is the output of console.log(typeof 42);?",

		answers: [
			{option: "number", correct: true},
			{option: "string", correct: false},
			{option: "boolean", correct: false},
			{option: "object", correct: false}
		]
	},

	{
		question: "What does NaN stand for in JavaScript?",

		answers: [
			{option: "Not a Null", correct: false},
			{option: "No Assigned Name", correct: false},
			{option: "Not a Number", correct: true},
			{option: "None Applicable", correct: false}
		]
	},

	{
		question: "Which event occurs when the user clicks on an HTML element?",

		answers: [
			{option: "onmouseover", correct: false},
			{option: "onclick", correct: true},
			{option: "onchange", correct: false},
			{option: "onmouseclick", correct: false}
		]
	},
	{
		question: "What is the result of true && false in JavaScript?",

		answers: [
			{option: "true", correct: false},
			{option: "false", correct: true},
			{option: "undefined", correct: false},
			{option: "null", correct: false}
		]
	},
	{
		question: "How do you round a number to the nearest integer in JavaScript?",

		answers: [
			{option: "Math.round()", correct: true},
			{option: "Math.floor()", correct: false},
			{option: "Math.ceil()", correct: false},
			{option: "Math.random()", correct: false}
		]
	},
	{
		question: "Which method is used to add an element to the end of an array?",

		answers: [
			{option: "pop()", correct: false},
			{option: "shift()", correct: false},
			{option: "unshift()", correct: false},
			{option: "push()", correct: true}
		]
	},
	{
		question: "What is the correct way to declare a constant in JavaScript?",

		answers: [
			{option: "let constant x = 5;", correct: false},
			{option: "const x = 5;", correct: true},
			{option: "constant x = 5;", correct: false},
			{option: "var x = 5;", correct: false}
		]
	},
	{
		question: `What will the code console.log(2 + "2"); output?`,

		answers: [
			{option: "4", correct: false},
			{option: "NaN", correct: false},
			{option: "22", correct: true},
			{option: "undefined", correct: false}
		]
	},
	{
		question: `How do you remove the last element from an array?`,

		answers: [
			{option: "array.push()", correct: false},
			{option: "array.shift()", correct: false},
			{option: "array.splice()", correct: false},
			{option: "array.pop()", correct: true}
		]
	},
	{
		question: `Which of the following methods can be used to combine two arrays in JavaScript?`,

		answers: [
			{option: "push()", correct: false},
			{option: "join()", correct: false},
			{option: "splice()", correct: false},
			{option: "concat()", correct: true}
		]
	},
	{
		question: `What will the following code console.log(1 + "2" + 3); output?`,

		answers: [
			{option: "6", correct: false},
			{option: "123", correct: true},
			{option: "33", correct: false},
			{option: "15", correct: false}
		]
	},
	{
		question: `What is the value of !!false`,

		answers: [
			{option: "true", correct: false},
			{option: "false", correct: true},
			{option: "null", correct: false},
			{option: "undefined", correct: false}
		]
	},
	{
		question: `Which method converts a JSON object into a string?`,

		answers: [
			{option: "JSON.parse", correct: false},
			{option: "toString", correct: false},
			{option: "JSON.stringify", correct: true},
			{option: "String", correct: false}
		]
	}
]

/* 
--- Display our question with the question number.
--- Display our answers.
--- Select an option and have the option reflect whether it is right or wrong.
--- Score value that will increment if the user clicks the correct option.
--- Clicking the next button should take the user to the next question.
--- If we are on the last question, let the next button show submit.
--- Clicking the submit button should take us to a page where we see our score.

*/
const quizQuestion = document.getElementById("question");
const answerContainer = document.getElementById("answers");
const nextButton = document.getElementById("next");
let questionIndex = 0;
let score = 0;

const displayQuestion = () => {
	const questionObject = questions[questionIndex];
	const questionNumber = questionIndex + 1;
	
	quizQuestion.textContent = `${questionNumber}. ${questionObject.question}`

	answerContainer.innerHTML = "";
	// display answers
	questionObject.answers.forEach((answer) => {
		const buttonElement = document.createElement("button");
		buttonElement.innerText = answer.option;
		buttonElement.dataset.check = answer.correct;
		// console.log(buttonElement)
		answerContainer.appendChild(buttonElement);

		buttonElement.addEventListener("click", (e) => {
			const dataCheck = e.target.dataset.check === "true";

			if (dataCheck){
				e.target.style.backgroundColor = "#FFC857";
				e.target.style.color = "#1A1A1A";
				score++;
			} else {
				e.target.style.backgroundColor = "red";
			}

			const buttonArray = Array.from(answerContainer.children)
			buttonArray.forEach(btn => {
				btn.disabled = true;
				btn.style.cursor = "no-drop";
			});
		})
	})
	if (questionIndex === questions.length - 1){
		nextButton.innerHTML = "submit";
	}
}

const displayScore = () => {
	const percentScore = (score / questions.length) * 100;
	quizQuestion.textContent = `Your score is ${score} / ${questions.length}`;

	// display the score as a percentage after 4secs
	setTimeout (() => {
		quizQuestion.textContent = `Percentage score is ${percentScore}%`;
	}, 4000);

	answerContainer.innerHTML = "";
	document.getElementById("title").textContent = "result";
	nextButton.style.display = "none";

	// Create a reload button
	const reloadButton = document.createElement("button");
	reloadButton.textContent = "start again";
	answerContainer.appendChild(reloadButton);
	reloadButton.style.width = "10rem";
	reloadButton.style.textTransform = "capitalize";

	// center text
	document.querySelector(".quiz__wrapper").style.textAlign = "center";
	document.querySelector(".quiz_question").style.alignItems = "center";

	reloadButton.addEventListener("click", () => {
		location.href = "./index.html";
	});
}

nextButton.addEventListener("click", () => {
	if (questionIndex < questions.length - 1){
		questionIndex++;
		displayQuestion();
	}
	else {
		displayScore();
	}
})

displayQuestion();