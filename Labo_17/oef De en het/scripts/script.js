const setup = () => {
    const mijnButton = document.getElementById("mijnButton");
    const mijnTekstvak = document.getElementById("inputVeld");

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

}