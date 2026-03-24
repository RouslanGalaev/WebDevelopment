//-- Oefening 1 --//

// 1. Gebruik querySelectorAll om alle p-elementen te vinden
const paragrafen = document.querySelectorAll("p");

// 2. Controleer of er een element gevonden is en wijzig de tekst van het eerste item [0]
if (paragrafen.length > 0) {
    paragrafen[0].textContent = "Goed gedaan!";
}



//-- Oefening 2 --//

// 1. Itereer door elk li-element en wijzig de class naar "listitem"
const alleLijstItems = document.querySelectorAll("li");

alleLijstItems.forEach(function(li) {
    li.className = "listitem";
});

// 2. Maak een nieuw img-element aan
const nieuweFoto = document.createElement("img");

// 3. Geef een waarde aan het src-attribuut
// Vervang de URL hieronder door een pad naar je eigen foto
nieuweFoto.src = "https://www.google.com/imgres?q=the%20rock&imgurl=https%3A%2F%2Fvariety.com%2Fwp-content%2Fuploads%2F2024%2F01%2FDwayne-Johnson_credHuyDoan-e1705977711715.jpg&imgrefurl=https%3A%2F%2Fvariety.com%2F2024%2Ftv%2Fnews%2Fdwayne-the-rock-johnson-board-member-wwe-tko-group-1235882746%2F&docid=FNSdGxa6XhjAbM&tbnid=-6EMF5SUuc3b7M&vet=12ahUKEwjE7qONrLiTAxUpOfsDHVNYKO0QnPAOegQIKBAB..i&w=5461&h=3508&hcb=2&ved=2ahUKEwjE7qONrLiTAxUpOfsDHVNYKO0QnPAOegQIKBAB";
nieuweFoto.alt = "Profielfoto";

// 4. Plaats het img-element op het einde van de body
document.body.appendChild(nieuweFoto);


//-- Oefening 3 --//

// 1. Selecteer de elementen
const paragraaf = document.getElementById("tekst"); //
const knop = document.getElementById("stijlKnop");

// 2. Voeg een event listener toe voor de klik
knop.addEventListener("click", function() {

    // Stap A: Pas de kleur direct aan via de .style property
    // In de cursus (p. 21) staat dat je CSS-eigenschappen in JS met camelCase schrijft
    paragraaf.style.color = "blue";
    paragraaf.style.fontSize = "20px";

    // Stap B: Voeg een klasse toe voor extra opmaak
    // Dit is vaak netter dan alles los in JS te typen
    paragraaf.classList.add("opvallend");
});