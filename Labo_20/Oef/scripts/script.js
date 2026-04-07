const setup = () => {
    // 1. Definiëren van student1 als een complex object (zoals gezien in Labo 20)
    let student1 = {
        voornaam: "Jan",
        familienaam: "Janssens",
        geboorteDatum: new Date(2004, 4, 15), // Maand 4 = Mei
        adres: {
            straat: "Nieuwstraat 1",
            gemeente: "Kortrijk"
        },
        hobbies: ["gamen", "sport"]
    };

    // 2. JSON string bouwen en op de console zetten
    // Volgens de cursus gebruiken we hiervoor JSON.stringify()
    let studentJson = JSON.stringify(student1);
    console.log("De JSON string van student1:");
    console.log(studentJson);

    let jsonTekst = '{"voornaam":"Jan","familienaam":"Janssens","geboorteDatum":"2004-05-14T22:00:00.000Z","adres":{"straat":"Nieuwstraat 1","gemeente":"Kortrijk"},"hobbies":["gamen","sport"]}';

    // 1. Object maken a.d.h.v. de JSON String met JSON.parse()
    let student2 = JSON.parse(jsonTekst);

    // 2. Een property van dit object op de console zetten
    console.log("Voornaam van student 2: " + student2.voornaam);
    console.log("Geboortedatum uit JSON: " + student2.geboorteDatum);

    // Controle of properties identiek zijn
    console.log("Adres straat: " + student2.adres.straat);
};

window.addEventListener("load", setup);
