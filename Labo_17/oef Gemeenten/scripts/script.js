const setup = () => {
    let gemeenten = [];
    let stop = false;

    while (!stop) {
        let input = prompt("Geef een gemeente op:");
        if (input === null || input.toLowerCase() === "stop") {
            stop = true;
        } else {
            gemeenten.push(input);
        }
    }

    // Sorteer de array alfabetisch (cursus pagina 65)
    gemeenten.sort();

    // Voeg de gemeenten toe aan de select in de HTML
    vulSelect(gemeenten);
};

const vulSelect = (lijst) => {
    let select = document.getElementById("gemeentenSelect");
    for (let i = 0; i < lijst.length; i++) {
        // Gebruik de methode uit de cursus om tekst toe te voegen
        select.innerHTML += "<option>" + lijst[i] + "</option>";
    }
};

window.addEventListener("load", setup);