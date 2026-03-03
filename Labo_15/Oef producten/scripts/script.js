const setup = () => {
    const knop = document.getElementById("btnHerbereken");
    knop.addEventListener("click", herbereken);
};

const herbereken = () => {
    // Haal alle elementen op per categorie
    const prijzen = document.getElementsByClassName("prijs");
    const aantallen = document.getElementsByClassName("aantal");
    const btwTarieven = document.getElementsByClassName("btw");
    const subtotalen = document.getElementsByClassName("subtotaal");

    let algemeenTotaal = 0;

    // Loop door elke rij (i)
    for (let i = 0; i < prijzen.length; i++) {
        // Haal de getallen uit de tekst/velden
        // parseInt negeert " Eur" en "%" automatisch
        let prijs = parseInt(prijzen[i].innerHTML);
        let aantal = parseInt(aantallen[i].value);
        let btw = parseInt(btwTarieven[i].innerHTML);

        // Berekening per rij
        let subtotaalZonderBtw = prijs * aantal;
        let subtotaalMetBtw = subtotaalZonderBtw * (1 + (btw / 100));

        // Schrijf het subtotaal terug in de tabel (met 2 cijfers na de komma)
        subtotalen[i].innerHTML = subtotaalMetBtw.toFixed(2) + " Eur";

        // Voeg toe aan de totale som
        algemeenTotaal += subtotaalMetBtw;
    }

    // Vul het eindtotaal in
    const totaalVeld = document.getElementById("totaal");
    totaalVeld.innerHTML = algemeenTotaal.toFixed(2) + " Eur";
};

window.addEventListener("load", setup);