let personen = [];
let geselecteerdeIndex = -1; // -1 betekent dat we een 'nieuwe' persoon aanmaken

const setup = () => {
    let btnBewaren = document.getElementById("btnBewaren");
    let btnNieuw = document.getElementById("btnNieuw");
    let lstPersonen = document.getElementById("lstPersonen");

    btnBewaren.addEventListener("click", bewaarPersoon);
    btnNieuw.addEventListener("click", maakFormulierLeeg);
    lstPersonen.addEventListener("change", toonPersoon);
};

const bewaarPersoon = () => {
    // Hier zou normaal validatie komen zoals in de cursus Hoofdstuk 8
    let voornaam = document.getElementById("txtVoornaam").value;
    let familienaam = document.getElementById("txtFamilienaam").value;
    let geboorteDatum = document.getElementById("txtGeboorteDatum").value;

    let persoon = {
        voornaam: voornaam,
        familienaam: familienaam,
        geboorteDatum: geboorteDatum
    };

    if (geselecteerdeIndex === -1) {
        // Nieuwe persoon toevoegen aan de array (Sectie 3.4.2 Arrays)
        personen.push(persoon);
    } else {
        // Bestaande persoon aanpassen
        personen[geselecteerdeIndex] = persoon;
    }

    updateLijst();
};

const updateLijst = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.innerHTML = ""; // Lijst leegmaken

    // Door de array lopen (Sectie 3.4.4 Itereren)
    for (let i = 0; i < personen.length; i++) {
        let p = personen[i];
        let option = document.createElement("option");
        option.text = p.voornaam + " " + p.familienaam;
        option.value = i; // We gebruiken de index als ID (zoals gevraagd in Labo 2.7)
        lstPersonen.appendChild(option);
    }
};

const toonPersoon = (event) => {
    let index = event.target.value;
    geselecteerdeIndex = index;
    let p = personen[index];

    // Formulier invullen met data uit het object
    document.getElementById("txtVoornaam").value = p.voornaam;
    document.getElementById("txtFamilienaam").value = p.familienaam;
    document.getElementById("txtGeboorteDatum").value = p.geboorteDatum;
};

const maakFormulierLeeg = () => {
    geselecteerdeIndex = -1;
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
};

window.addEventListener("load", setup);