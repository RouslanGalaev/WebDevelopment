let tekst = "De man van An geeft geen hand aan ambetante verwanten";
let zoekterm = "an";

let teller = 0;
let positie = tekst.indexOf(zoekterm); // Zoek de eerste 'an'

while (positie !== -1) {
    teller++;
    // Zoek de volgende 'an', beginnend ná de huidige positie
    positie = tekst.indexOf(zoekterm, positie + 1);
}

console.log("Aantal keer gevonden met indexOf: " + teller);

// Alternatieve methode: Begin van achteraan zoeken

let tellerLast = 0;
let positieLast = tekst.lastIndexOf(zoekterm); // Zoek de laatste 'an'

while (positieLast !== -1) {
    tellerLast++;
    // Zoek de vorige 'an', beginnend vóór de huidige positie
    positieLast = tekst.lastIndexOf(zoekterm, positieLast - 1);
}

console.log("Aantal keer gevonden met lastIndexOf: " + tellerLast);