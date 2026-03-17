const vervangDeDoorHet = () => {
    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let zoekTerm = "de";
    let vervangTerm = "het";

    let resultaat = "";
    let huidigePositie = 0;
    let gevondenIndex = tekst.indexOf(zoekTerm);

    // Zolang er nog een "de" gevonden wordt in de tekst
    while (gevondenIndex !== -1) {
        // 1. Neem het stuk tekst vanaf waar we gebleven waren tot aan de gevonden "de"
        resultaat += tekst.substring(huidigePositie, gevondenIndex);

        // 2. Plak "het" erachter in plaats van "de"
        resultaat += vervangTerm;

        // 3. Verzet onze startpositie naar net na de gevonden "de" (lengte is 2)
        huidigePositie = gevondenIndex + zoekTerm.length;

        // 4. Zoek naar de volgende "de"
        gevondenIndex = tekst.indexOf(zoekTerm, huidigePositie);
    }

    // 5. Plak het allerlaatste stukje tekst (na de laatste "de") er nog bij
    resultaat += tekst.substring(huidigePositie);

    console.log(resultaat);
};

vervangDeDoorHet();