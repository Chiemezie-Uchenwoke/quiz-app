const questions = [
	{
		question: "Which Nigerian city was the capital before it was moved to Abuja in 1991?",

		answers: [
			{option: "Lagos", correct: true},
			{option: "Kano", correct: false},
			{option: "Port Harcourt", correct: false},
			{option: "Ibadan", correct: false}
		]
	},

	{
		question: "What natural wonder is located in Australia and is known for its stunning coral reefs?",

		answers: [
			{option: "The Grand Canyon", correct: false},
			{option: "Mount Everest", correct: false},
			{option: "The Great Barrier Reef", correct: true},
			{option: "Niagara Falls", correct: false}
		]
	},

	{
		question: "Who was the first President of Nigeria after independence?",

		answers: [
			{option: "Nnamdi Azikiwe", correct: true},
			{option: "Olusegun Obasanjo", correct: false},
			{option: " Muhammadu Buhari", correct: false},
			{option: "Tafawa Balewa", correct: false}
		]
	},

	{
		question:  "What is the largest desert in the world?",


		answers: [
			{option: "Sahara", correct: false},
			{option: "Arctic", correct: true},
			{option: "Kalahari", correct: false},
			{option: "Gobi", correct: false}
		]
	},

	{
		question: "Which major civil conflict took place in Nigeria between 1967 and 1970?",

		answers: [
			{option: "The Nigerian Civil War", correct: false},
			{option: "Yoruba War", correct: false},
			{option: "Ogoni Crisis", correct: false},
			{option: "Biafran War", correct: true}
		]
	},

	{
		question: "What is the capital city of Japan?",

		answers: [
			{option: "Seoul", correct: false},
			{option: "Beijing", correct: false},
			{option: "Tokyo", correct: true},
			{option: "Bangkok", correct: false}
		]
	},

	{
		question: "Which country is known as the Land of the Rising Sun?",

		answers: [
			{option: "Japan", correct: true},
			{option: "China", correct: false},
			{option: "Thailand", correct: false},
			{option: "India", correct: false}
		]
	},

	{
		question: "What year did Nigeria gain its independence from British colonial rule?",

		answers: [
			{option: "1956", correct: false},
			{option: "1970", correct: false},
			{option: "1963", correct: false},
			{option: "1960", correct: true}
		]
	},

	{
		question: "What is the name of Nigeria's currency?",

		answers: [
			{option: "Naira", correct: true},
			{option: "Yen", correct: false},
			{option: "Dollar", correct: false},
			{option: "Pound", correct: false}
		]
	},

	{
		question: "Which city is famous for its iconic Eiffel Tower?",

		answers: [
			{option: "Madrid", correct: false},
			{option: "London", correct: false},
			{option: "Paris", correct: true},
			{option: "Rome", correct: false}
		]
	},
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
		console.log(buttonElement)
		answerContainer.appendChild(buttonElement);

		buttonElement.addEventListener("click", (e) => {
			const dataCheck = e.target.dataset.check === "true";

			if (dataCheck){
				e.target.style.backgroundColor = "#FFC857";
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
	quizQuestion.textContent = `Your score is ${score} / ${questions.length}`;
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
		location.reload();
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