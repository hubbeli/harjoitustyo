const animalContainer = document.getElementById("animal-container");
const numberContainer = document.getElementById("number-container");
const feedback = document.getElementById("feedback");

const animals = [
    "img/ant.png",
    "img/bug.png",
    "img/bumblebee.png",
    "img/butterfly.png",
    "img/fly.png"
];

let correctAnswer;

// Funktio eläinten näyttämiseen
function showRandomAnimals() {
    animalContainer.innerHTML = "";
    numberContainer.innerHTML = "";

    // Valitsee satunnaisesti eläinkuvia
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    
    // Valitsee satunnaisen määrän eläinkuvia
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
    if (selectedNumber === correctAnswer) {
        feedback.innerHTML = "<img src='img/smiley.png' alt='Oikein!' />"; // Oikea vastaus
    } else {
        feedback.innerHTML = "<img src='img/sadface.png' alt='Väärin!' />"; // Väärä vastaus
    }
}

// Aloitetaan peli
showRandomAnimals();
