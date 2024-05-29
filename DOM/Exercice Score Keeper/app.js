const button1 = document.querySelector(".one");
const button2 = document.querySelector(".two");
const resetButton = document.querySelector(".reset");
const score1Element = document.querySelector(".score1");
const score2Element = document.querySelector(".score2");

button1.addEventListener("click", () => {
    let currentNumber = parseInt(score1Element.textContent);
    currentNumber += 1;
    score1Element.textContent = currentNumber;
    updateColors();
    checkScores();
});

button2.addEventListener("click", () => {
    let currentNumber = parseInt(score2Element.textContent);
    currentNumber += 1;
    score2Element.textContent = currentNumber;
    updateColors();
    checkScores();
});

resetButton.addEventListener("click", () => {
    score1Element.textContent = 0;
    score2Element.textContent = 0;
    updateColors();
    button1.disabled = false;  
    button2.disabled = false;
});

function checkScores() {
    if (parseInt(score1Element.textContent) + parseInt(score2Element.textContent) === 5) {
        button1.disabled = true;  
        button2.disabled = true;
    }
}

function updateColors() {
    const score1 = parseInt(score1Element.textContent);
    const score2 = parseInt(score2Element.textContent);

    if (score1 > score2) {
        score1Element.style.color = "green";
        score2Element.style.color = "red";
    } else if (score1 < score2) {
        score1Element.style.color = "red";
        score2Element.style.color = "green";
    } else {
        score1Element.style.color = "black";
        score2Element.style.color = "black";
    }
}

