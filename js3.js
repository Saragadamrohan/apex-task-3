window.onload = function () {

let current = 0;
const questions = document.querySelectorAll(".question");

window.nextQuestion = function () {

    questions[current].classList.remove("active");
    current++;

    if (current < questions.length) {
        questions[current].classList.add("active");
    }

}

window.submitQuiz = function () {

    let score = 0;

    score += Number(document.querySelector('input[name="q1"]:checked')?.value || 0);
    score += Number(document.querySelector('input[name="q2"]:checked')?.value || 0);
    score += Number(document.querySelector('input[name="q3"]:checked')?.value || 0);
    score += Number(document.querySelector('input[name="q4"]:checked')?.value || 0);
    score += Number(document.querySelector('input[name="q5"]:checked')?.value || 0);

    questions[current].style.display = "none";

    document.getElementById("result").innerHTML =
        "<h2>Your Score: " + score + " / 5</h2>";

    document.getElementById("jokeBox").style.display = "block";
}

};