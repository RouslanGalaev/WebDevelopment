function verwerkTekst() {
    let tekst = document.getElementById("inputVeld").value;
    let resultaat = "";

    for (let i = 0; i < tekst.length; i++) {
        // Alleen karakters die geen spatie zijn toevoegen
        if (tekst[i] !== " ") {
            resultaat = resultaat + tekst[i] + " ";
        }
    }

    console.log(resultaat);
}
