const animalContainer = document.getElementById("animal-container");

const animals = [
    "img/ant.png",
    "img/bug.png",
    "img/bumblebee.png",
    "img/butterfly.png",
    "img/fly.png"
];

function showRandomAnimals() {
    animalContainer.innerHTML = "";

    // Valitsee satunnaisesti eläinkuvan
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    
    // Valitsee satunnaisen määrän eläinkuvia
    const animalCount = Math.floor(Math.random() * 10) + 1;

    // Lisää valitun eläinkuvan animalContaineriin oikean määrän kertoja
    for (let i = 0; i < animalCount; i++) {
        const img = document.createElement("img");
        img.src = randomAnimal;
        img.classList.add("animal");
        animalContainer.appendChild(img);
    }
}

showRandomAnimals();
