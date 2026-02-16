// Oefening 1: Maak een array met de namen van 5 familieleden.
const familieLeden = ["Piet", "Klaas", "Jan", "Henk", "Joris"];

// Oefening 2: Toon in de console hoeveel familieleden er zijn.
console.log("Aantal familieleden: " + familieLeden.length);

// Oefening 3: Toon in de console de naam van het eerste, derde en vijfde familielid.
console.log("Familielid op 1ste plaats: " + familieLeden[0]);
console.log("Familielid op 3de plaats: " + familieLeden[2]);
console.log("Familielid op 5de plaats: " + familieLeden[4]);

// Oefening 4: Voeg een nieuw familielid toe aan de arrray via een prompt en toon de nieuwe array in de console.

const voegNaamToe = prompt("Voer de naam van een nieuw familielid in:");
familieLeden.push(voegNaamToe);
console.log("Nieuwe array met toegevoegd familielid: " + familieLeden);

// Oefening 5: Converteer de array naar een string en toon deze in de console.
const familieLedenString = familieLeden.join(", ");
console.log("Familieleden als string: " + familieLedenString);