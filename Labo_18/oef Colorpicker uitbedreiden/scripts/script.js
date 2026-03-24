const setup = () => {
    let sliders = document.getElementsByClassName("colorSlider");

    for (let i = 0; i < sliders.length; i++) {
        // "input" zorgt voor live updates tijdens het slepen
        sliders[i].addEventListener("input", update);

        // "change" is een backup voor als je de slider loslaat
        sliders[i].addEventListener("change", update);

        // Voeg de click-event toe aan de Save-knop
        document.getElementById("btnSave").addEventListener("click", saveColor);
    }
}

const update = () => {
    let sliders = document.getElementsByClassName("colorSlider");
    let vakje = document.getElementById("visualisatie");

    let r = sliders[0].value;
    let g = sliders[1].value;
    let b = sliders[2].value;

    // We stellen de kleur live in
    vakje.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";

    // Optioneel: toon de waarde ook in tekst zodat je ziet dat het getal verandert
    document.getElementById("tekstLabel").innerHTML = "rgb(" + r + ", " + g + ", " + b + ")";
}

// Nieuwe functie om de kleur op te slaan
const saveColor = () => {
    const storage = document.getElementById("storage");
    const huidigeKleur = document.getElementById("visualisatie").style.backgroundColor;

    // 1. Maak de swatch (het gekleurde vierkantje) aan
    const swatch = document.createElement("div");
    swatch.style.width = "50px";
    swatch.style.height = "50px";
    swatch.style.backgroundColor = huidigeKleur;
    swatch.style.position = "relative"; // Nodig voor de positie van de X-knop
    swatch.style.border = "1px solid black";

    // 2. Maak de delete-knop ('X') aan
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "X";
    btnDelete.style.position = "absolute";
    btnDelete.style.top = "0";
    btnDelete.style.right = "0";

    // 3. Event: Wanneer je op de swatch klikt, herstel de kleur in de sliders
    swatch.addEventListener("click", () => {
        restoreColor(huidigeKleur);
    });

    // 4. Event: Wanneer je op de 'X' klikt, verwijder de swatch
    btnDelete.addEventListener("click", (event) => {
        event.stopPropagation(); // Zorgt dat de swatch-klik niet wordt afgevuurd
        storage.removeChild(swatch);
    });

    // 5. Voeg de onderdelen samen en voeg ze toe aan de pagina
    swatch.appendChild(btnDelete);
    storage.appendChild(swatch);
}

window.addEventListener("load", setup);