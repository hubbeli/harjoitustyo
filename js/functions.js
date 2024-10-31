const animalContainer = document.getElementById("animal-container");
const numberContainer = document.getElementById("number-container");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");

const animals = [
    "img/ant.png",
    "img/bug.png",
    "img/bumblebee.png",
    "img/butterfly.png",
    "img/fly.png"
];

let correctCount = 0;  // oikein vastattujen laskuri
let incorrectCount = 0;  // väärin vastattujen laskuri
let correctAnswer;
let isAnswered = false; // Estää klikkaukset oikean vastauksen jälkeen
nextButton.onclick = showRandomAnimals;

const updateAnswerCounts = () => {
    document.querySelector('#correct-count').value = correctCount;
    document.querySelector('#incorrect-count').value = incorrectCount;
}

addEventListener("DOMContentLoaded", () => {
    updateAnswerCounts(); // päivittää laskurit
});


// Funktio eläinten näyttämiseen
function showRandomAnimals() {
    animalContainer.innerHTML = "";
    numberContainer.innerHTML = "";
    feedback.innerHTML = "";
    nextButton.style.display = "none";
    isAnswered = false; // Nollataan klikkausesto uuden kysymyksen alussa

    // Valitsee satunnaisesti eläinkuvia satunnaisen määrän
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    correctAnswer = Math.floor(Math.random() * 10) + 1; // Asetetaan oikea vastaus

    // Lisää valitun eläinkuvan animalContaineriin oikean määrän kertoja
    for (let i = 0; i < correctAnswer; i++) {
        const img = document.createElement("img");
        img.src = randomAnimal;
        img.classList.add("animal");
        animalContainer.appendChild(img);
    }

    // Luo numerokuvakkeet
    for (let i = 1; i <= 10; i++) {
        const img = document.createElement("img");
        img.src = `img/number-${i}.png`;
        img.classList.add("number-button");
        img.onclick = () => checkAnswer(i); // Tarkistaa vastauksen klikkauksesta
        numberContainer.appendChild(img);
    }
}

// Vastausten tarkistus
function checkAnswer(selectedNumber) {
    if (isAnswered) return; // Estää klikkauksen oikean vastauksen jälkeen
    if (selectedNumber === correctAnswer) {
        feedback.innerHTML = "<img src='img/smiley.png' alt='Oikein!' />"; // Oikea vastaus
        nextButton.style.display = "inline-block";
        correctCount++;  // kasvattaa oikein-laskuria
        isAnswered = true; // Estää lisää klikkauksia oikean vastauksen jälkeen
    } else {
        feedback.innerHTML = "<img src='img/sadface.png' alt='Väärin!' />"; // Väärä vastaus
        nextButton.style.display = "none";
        incorrectCount++;  // kasvattaa väärin-laskuria
    }
    updateAnswerCounts();
}

// Aloitetaan peli
updateAnswerCounts();
showRandomAnimals();
