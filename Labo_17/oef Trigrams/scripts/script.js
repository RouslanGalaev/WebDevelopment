const setup = () => {
    const mijnButton = document.getElementById("mijnButton");
    const mijnTekstvak = document.getElementById("inputVeld");

    const maakTrigrammen = () => {
        let inputWoord = mijnTekstvak.value; // Haal hier de tekst op
        let trigrammen = [];

        // Loop door het woord
        for (let i = 0; i <= inputWoord.length - 3; i++) {
            let trigram = inputWoord.substring(i, i + 3);
            trigrammen.push(trigram);
        }

        console.log(trigrammen);
        return trigrammen;
    };

    mijnButton.addEventListener("click", maakTrigrammen);
};

window.addEventListener("load", setup);