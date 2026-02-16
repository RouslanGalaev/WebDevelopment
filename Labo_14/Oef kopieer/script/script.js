const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let pOutput = document.getElementById("txtOutput");

    // We lezen de .value van de input (wat de gebruiker heeft getypt)
    let tekst = txtInput.value;

    // We schrijven de tekst in de innerHTML van het p-element
    pOutput.innerHTML = tekst;
};

const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");
    // We voegen een 'listener' toe die wacht op een klik
    btnKopieer.addEventListener("click", kopieer);
};

window.addEventListener("load", setup);