const setup = () => {
    const mijnButton = document.getElementById("mijnButton");
    const mijnTekstvak = document.getElementById("input");

    const vervangDeEnHet = () => {
        let inputTekst = mijnTekstvak.value; // Haal hier de tekst op
        // split op woordgrenzen zodat we woorden en tussenliggende tekens behouden
        const tokens = inputTekst.split(/\b/);
        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i] === 'de' || tokens[i] === 'het') {
                // originele chained replace resulteerde uiteindelijk in alle 'de' of 'het' -> 'de'
                tokens[i] = 'de';
            }
        }
        const vervangTekst = tokens.join('');

        console.log(vervangTekst);
        return vervangTekst;
    }

    // koppel de knop aan de functie en zet het resultaat terug in het invoerveld
    if (mijnButton && mijnTekstvak) {
        mijnButton.addEventListener('click', () => {
            const resultaat = vervangDeEnHet();
            mijnTekstvak.value = resultaat;
        });
    }
};

window.addEventListener('DOMContentLoaded', setup);
