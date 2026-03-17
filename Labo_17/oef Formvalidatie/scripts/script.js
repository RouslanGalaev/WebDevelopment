const isGetal = (tekst) => {
    return !isNaN(tekst) && tekst.trim() !== "";
};

const valideer = () => {
    let alleGeldig = true;

    // 1. Voornaam (max 30 karakters)
    let voornaam = document.getElementById("txtVoornaam").value.trim();
    if (voornaam.length > 30) {
        rapporteerFout("txtVoornaam", "errVoornaam", "max. 30 karakters");
        alleGeldig = false;
    } else {
        wisFout("txtVoornaam", "errVoornaam");
    }

    // 2. Familienaam (verplicht, max 50)
    let familienaam = document.getElementById("txtFamilienaam").value.trim();
    if (familienaam === "") {
        rapporteerFout("txtFamilienaam", "errFamilienaam", "verplicht veld");
        alleGeldig = false;
    } else if (familienaam.length > 50) {
        rapporteerFout("txtFamilienaam", "errFamilienaam", "max. 50 karakters");
        alleGeldig = false;
    } else {
        wisFout("txtFamilienaam", "errFamilienaam");
    }

    // 3. Geboortedatum (jjjj-mm-dd)
    let datum = document.getElementById("txtGeboortedatum").value.trim();
    let datumFout = false;
    if (datum === "") {
        rapporteerFout("txtGeboortedatum", "errGeboortedatum", "verplicht veld");
        datumFout = true;
    } else {
        // Controleer formaat handmatig: jjjj-mm-dd
        let onderdelen = datum.split("-");
        if (onderdelen.length !== 3 || onderdelen[0].length !== 4 ||
            onderdelen[1].length !== 2 || onderdelen[2].length !== 2 ||
            !isGetal(onderdelen[0]) || !isGetal(onderdelen[1]) || !isGetal(onderdelen[2])) {
            rapporteerFout("txtGeboortedatum", "errGeboortedatum", "formaat is niet jjjj-mm-dd");
            datumFout = true;
        }
    }
    if (datumFout) alleGeldig = false; else wisFout("txtGeboortedatum", "errGeboortedatum");

    // 4. Email (verplicht, @ check)
    let email = document.getElementById("txtEmail").value.trim();
    let atIndex = email.indexOf("@");
    let lastAtIndex = email.lastIndexOf("@");

    if (email === "") {
        rapporteerFout("txtEmail", "errEmail", "verplicht veld");
        alleGeldig = false;
    } else if (atIndex < 1 || atIndex !== lastAtIndex || atIndex === email.length - 1) {
        // atIndex < 1: moet min 1 kar voor @
        // atIndex !== lastAtIndex: meer dan 1 @
        // atIndex === email.length - 1: moet min 1 kar na @
        rapporteerFout("txtEmail", "errEmail", "geen geldig email adres");
        alleGeldig = false;
    } else {
        wisFout("txtEmail", "errEmail");
    }

    // 5. Aantal kinderen (getal, positief, < 99)
    let kinderen = document.getElementById("txtAantalKinderen").value.trim();
    if (!isGetal(kinderen) || parseInt(kinderen) < 0) {
        rapporteerFout("txtAantalKinderen", "errAantalKinderen", "is geen positief getal");
        alleGeldig = false;
    } else if (parseInt(kinderen) >= 99) {
        rapporteerFout("txtAantalKinderen", "errAantalKinderen", "is te vruchtbaar");
        alleGeldig = false;
    } else {
        wisFout("txtAantalKinderen", "errAantalKinderen");
    }

    if (alleGeldig) {
        alert("proficiat!");
    }
};

// Hulpmiddelen voor weergave volgens cursusmethode
const rapporteerFout = (inputId, errId, bericht) => {
    document.getElementById(inputId).className = "invalid";
    document.getElementById(errId).innerHTML = bericht;
};

const wisFout = (inputId, errId) => {
    document.getElementById(inputId).className = "";
    document.getElementById(errId).innerHTML = "";
};

const setup = () => {
    let btnValideer = document.getElementById("btnValideer");
    btnValideer.addEventListener("click", valideer);
};

window.addEventListener("load", setup);