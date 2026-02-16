const wijzigTekst = () => {
    // We zoeken het element op
    let pElement = document.getElementById("txtOutput");
    // We passen de inhoud aan
    pElement.innerHTML = "Welkom!";
};

const setup = () => {
    // We zoeken de knop op
    let btnWijzig = document.getElementById("btnWijzig");
    // We koppelen de klik-gebeurtenis aan de functie wijzigTekst
    btnWijzig.addEventListener("click", wijzigTekst);
};

// Zorg dat de setup pas draait als de pagina geladen is
window.addEventListener("load", setup);