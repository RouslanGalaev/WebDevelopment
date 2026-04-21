// ─── Constanten ───────────────────────────────────────────────────────────────
// We gebruiken één sleutel in localStorage om alles op te slaan,
// net zoals uitgelegd in de cursus (§11.5.1 localStorage).
const STORAGE_KEY = "colorpicker.pro.data";

// ─── Opslaan naar localStorage ────────────────────────────────────────────────
// Zet het huidige app-object om naar een JSON-string en sla het op.
const saveToStorage = () => {
    const sliders = document.getElementsByClassName("colorSlider");

    // Bouw een object op met slider-instellingen en favorieten
    const data = {
        sliders: {
            r: parseInt(sliders[0].value),
            g: parseInt(sliders[1].value),
            b: parseInt(sliders[2].value)
        },
        favorites: getFavoriteColors()
    };

    // JSON.stringify zet het object om naar een string, vereist door localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

// ─── Laad uit localStorage ────────────────────────────────────────────────────
// Leest de opgeslagen JSON-string uit en zet die terug om naar een object.
const loadFromStorage = () => {
    const raw = localStorage.getItem(STORAGE_KEY);

    // Geen data gevonden? Geef null terug
    if (raw === null) return null;

    // JSON.parse zet de string terug naar een JavaScript-object
    return JSON.parse(raw);
};

// ─── Hulpfunctie: haal alle swatches op als array van kleurstrings ─────────────
const getFavoriteColors = () => {
    const swatches = document.querySelectorAll(".swatch");
    const colors = [];
    for (let i = 0; i < swatches.length; i++) {
        colors.push(swatches[i].style.backgroundColor);
    }
    return colors;
};

// ─── Swatch aanmaken ──────────────────────────────────────────────────────────
// Maakt een gekleurd vakje aan en voegt het toe aan het #storage element.
const createSwatch = (kleur) => {
    const storage = document.getElementById("storage");

    // Lege hint verbergen zodra er een swatch is
    const hint = document.getElementById("emptyHint");
    if (hint) hint.style.display = "none";

    // 1. Maak de swatch (het gekleurde vierkantje) aan
    const swatch = document.createElement("div");
    swatch.classList.add("swatch");
    swatch.style.backgroundColor = kleur;

    // 2. Maak de delete-knop ('X') aan
    const btnDelete = document.createElement("button");
    btnDelete.classList.add("btn-delete");
    btnDelete.textContent = "×";

    // 3. Event: klik op swatch → herstel de kleur in de sliders
    swatch.addEventListener("click", () => {
        restoreColor(kleur);
    });

    // 4. Event: klik op X → verwijder de swatch + update localStorage
    btnDelete.addEventListener("click", (event) => {
        // stopPropagation zodat de swatch-click niet ook afgaat (§7.6 cursus)
        event.stopPropagation();
        storage.removeChild(swatch);

        // Toon hint terug als er geen swatches meer zijn
        if (document.querySelectorAll(".swatch").length === 0) {
            document.getElementById("emptyHint").style.display = "";
        }

        // Sla de nieuwe toestand op na verwijderen
        saveToStorage();
    });

    // 5. Voeg de onderdelen samen en voeg ze toe aan de pagina
    swatch.appendChild(btnDelete);
    storage.appendChild(swatch);
};

// ─── Kleur herstellen in de sliders ──────────────────────────────────────────
// Parsed de rgb()-string en zet de slider-waarden terug.
const restoreColor = (kleur) => {
    // kleur heeft de vorm "rgb(r, g, b)"
    // We extraheren de drie getallen met replace en split
    const waarden = kleur.replace("rgb(", "").replace(")", "").split(", ");

    const sliders = document.getElementsByClassName("colorSlider");
    sliders[0].value = waarden[0];
    sliders[1].value = waarden[1];
    sliders[2].value = waarden[2];

    // Roep update aan om de preview en labels bij te werken
    update();
};

// ─── Live update van de kleurpreview ─────────────────────────────────────────
const update = () => {
    const sliders = document.getElementsByClassName("colorSlider");
    const vakje = document.getElementById("visualisatie");

    const r = sliders[0].value;
    const g = sliders[1].value;
    const b = sliders[2].value;

    // Stel de achtergrondkleur in op het preview-vakje
    vakje.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";

    // Toon de RGB-waarden als tekst
    document.getElementById("tekstLabel").innerHTML = "rgb(" + r + ", " + g + ", " + b + ")";

    // Toon ook de individuele slider-waarden
    document.getElementById("valR").textContent = r;
    document.getElementById("valG").textContent = g;
    document.getElementById("valB").textContent = b;

    // Sla de huidige slider-instellingen op bij elke wijziging
    saveToStorage();
};

// ─── Kleur opslaan als favoriet ───────────────────────────────────────────────
const saveColor = () => {
    const huidigeKleur = document.getElementById("visualisatie").style.backgroundColor;
    createSwatch(huidigeKleur);

    // Sla de volledige toestand op (sliders + nieuwe favoriet)
    saveToStorage();
};

// ─── Setup: alles initialiseren na het laden van de pagina ────────────────────
// Dit wordt opgeroepen door het load-event op window (§7.3.1 cursus).
const setup = () => {
    const sliders = document.getElementsByClassName("colorSlider");

    for (let i = 0; i < sliders.length; i++) {
        // "input" zorgt voor live updates tijdens het slepen (§7.3.4 cursus)
        sliders[i].addEventListener("input", update);
        // "change" als backup wanneer de slider losgelaten wordt
        sliders[i].addEventListener("change", update);
    }

    // Knop: huidige kleur opslaan als favoriet
    document.getElementById("btnSave").addEventListener("click", saveColor);

    // Knop: alle favorieten wissen + localStorage leegmaken
    document.getElementById("btnClear").addEventListener("click", () => {
        const swatches = document.querySelectorAll(".swatch");
        for (let i = 0; i < swatches.length; i++) {
            swatches[i].remove();
        }
        document.getElementById("emptyHint").style.display = "";
        saveToStorage();
    });

    // ── Herstel de eerder opgeslagen toestand uit localStorage ──────────────
    // Dit is de kern van de opdracht: data persisteren over sessies heen.
    const opgeslagenData = loadFromStorage();

    if (opgeslagenData !== null) {
        // 1. Herstel de slider-waarden
        sliders[0].value = opgeslagenData.sliders.r;
        sliders[1].value = opgeslagenData.sliders.g;
        sliders[2].value = opgeslagenData.sliders.b;

        // 2. Herstel de visuele kleurpreview en labels
        update();

        // 3. Herstel alle opgeslagen favorieten als swatches
        const favorieten = opgeslagenData.favorites;
        for (let i = 0; i < favorieten.length; i++) {
            createSwatch(favorieten[i]);
        }
    } else {
        // Geen opgeslagen data: stel de beginwaarden in
        update();
    }
};

// Koppel setup aan het load-event van window (cursus §7.3.1)
window.addEventListener("load", setup);