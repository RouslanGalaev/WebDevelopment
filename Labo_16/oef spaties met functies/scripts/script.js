const maakMetSpaties = (inputText) => {
    let result = "";

    for (let i = 0; i < inputText.length; i++) {
        // Alleen karakters die geen spatie zijn toevoegen, gevolgd door een extra spatie
        if (inputText[i] !== " ") {
            result = result + inputText[i] + " ";
        }
    }

    return result;
};

function verwerkTekst() {
    let tekst = document.getElementById("inputVeld").value;

    // Gebruik de nieuwe functie en zet het resultaat op de console
    let resultaat = maakMetSpaties(tekst);
    console.log(resultaat);
}