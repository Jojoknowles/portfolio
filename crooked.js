const plaques = document.querySelectorAll("figcaption")

function randomRotation(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function crooked() {
    for (let myPlaque of plaques) {
        const randomDegree = randomRotation(-7.29, 8.28)
        myPlaque.style.transform = "rotate(" + randomDegree + "deg)";
    }
}

crooked()
