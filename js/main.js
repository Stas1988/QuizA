// var correct = document.getElementById("correct")
// var incorrect = document.getElementById("incorrect")
// correct = 0
// incorrect = 10
// var question1 = document.getElementById("question1")

var quiz = [
	{
		question: "Who is the first president of USA?",
		answer: "George Washington"
	},
	{
		question: "2+2?",
		answer: 4
	},
	{
		question: "The capital of USA",
		answer: "Washington"
	},
	{
		question: "Basketball player Kobe ...?",
		answer: "Bryant"
	},
	{
		question: "6*3",
		answer: 18
	}
]

// 	for (i = 0; i < quiz.length; i++) {
// 		var x = quiz[i].question
// 	  document.getElementById('question' + [i]).textContent = x
// }

function getResult() {
	var correct = 0
	var incorrect = 0
	for (i = 0; i < quiz.length; i++) {
		var mainAnswer = document.getElementById("answer" + [i]).value
		var questionSpot = document.getElementById("question" + [i])
		if (mainAnswer == quiz[i].answer) {
			questionSpot.className = "green"
			correct++
		} else {
			questionSpot.className = "red"
			incorrect++
		}

	}


document.getElementById("correct").textContent = correct
document.getElementById("incorrect").textContent = incorrect
}



