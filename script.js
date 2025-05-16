document.addEventListener("DOMContentLoaded", function() {
    let num1 = Math.floor(Math.random() * 50) + 1;
    let num2 = Math.floor(Math.random() * 50) + 1;
    let operator = Math.random() > 0.5 ? "+" : "-";
    let result = operator === "+" ? num1 + num2 : num1 - num2;

    document.getElementById("expression").textContent = `${num1} ${operator} ${num2}`;

    window.checkAnswer = function() {
        let userAnswer = document.getElementById("answer").value;
        if (parseInt(userAnswer) === result) {
            document.getElementById("answer").classList.add("correct");
            document.getElementById("answer").classList.remove("incorrect");
        } else {
            document.getElementById("answer").classList.add("incorrect");
            document.getElementById("answer").classList.remove("correct");
        }
    };
});
