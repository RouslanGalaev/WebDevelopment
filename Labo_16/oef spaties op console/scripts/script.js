function verwerkTekst() {
    // 1. Haal de tekst op uit het inputveld
    let input = document.getElementById("inputText").value;

    // 2. Verwijder alle bestaande spaties (met een reguliere expressie)
    // Zodat we geen dubbele spaties krijgen zoals de opdracht vraagt
    let tekstZonderSpaties = input.replace(/\s+/g, '');

    // 3. Maak een variabele voor het resultaat
    let resultaat = "";

    // 4. Loop door elk karakter en voeg een spatie toe
    for (let i = 0; i < tekstZonderSpaties.length; i++) {
        resultaat += tekstZonderSpaties[i];

        // Voeg alleen een spatie toe als het niet het laatste karakter is
        if (i < tekstZonderSpaties.length - 1) {
            resultaat += " ";
        }
    }

    // 5. Toon het resultaat in de console
    console.log(resultaat);
}