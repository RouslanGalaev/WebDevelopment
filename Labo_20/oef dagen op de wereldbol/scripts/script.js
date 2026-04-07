const setup = () => {
    // 1. Maak een Date object aan voor je geboortedatum (Jaar, Maand-1, Dag)
    // Let op: Maanden beginnen in JS vanaf 0 (0 = januari, 4 = mei, enz.)
    let geboorteDatum = new Date(2004, 4, 15); // Voorbeeld: 15 mei 2004

    // 2. Maak een Date object aan voor de huidige datum en tijd
    let vandaag = new Date();

    // 3. Bereken het verschil in milliseconden
    // getTime() geeft het aantal ms sinds 1 januari 1970
    let verschilInMs = vandaag.getTime() - geboorteDatum.getTime();

    // 4. Omrekenen naar dagen
    // 1 dag = 1000ms * 60s * 60m * 24u = 86.400.000 ms
    let aantalDagen = Math.floor(verschilInMs / (1000 * 60 * 60 * 24));

    // 5. Weergeven in de console zoals gevraagd in de opgave
    console.log("Aantal dagen tussen geboortedatum en vandaag: " + aantalDagen);
};

window.addEventListener("load", setup);