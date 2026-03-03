const setup = () => {
    // Selecteer alle elementen met de class 'mijnKnop'
    let knoppen = document.getElementsByClassName("mijnKnop");

    // We lopen door de lijst en hangen aan elke knop een klik-event
    for (let i = 0; i < knoppen.length; i++) {
        knoppen[i].addEventListener("click", veranderKleur);
    }
}

const veranderKleur = (event) => {
    let deKnop = event.target;

    // We kijken of de achtergrond op dit moment blauw is
    if (deKnop.style.backgroundColor === "blue") {
        // Is hij al blauw? Maak hem dan weer wit
        deKnop.style.backgroundColor = "white";
        deKnop.style.color = "black";
    } else {
        // Is hij niet blauw? Maak hem dan blauw met witte tekst
        deKnop.style.backgroundColor = "blue";
        deKnop.style.color = "white";
    }
}

window.addEventListener("load", setup);