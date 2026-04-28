// =============================================
// ColorPicker Pro – met localStorage
// Favoriete kleuren en slider-instellingen
// worden bewaard via de Web Storage API.
// =============================================

// Sleutel waarmee we data opslaan in localStorage.
// Door een unieke naam te gebruiken vermijden we
// conflicten met andere pagina's op hetzelfde domein.
const STORAGE_KEY_FAVORITES = 'colorpicker.favorites';
const STORAGE_KEY_SLIDERS   = 'colorpicker.sliders';

// ---- Setup ----

const setup = () => {
    // Event listeners op de sliders
    const sliders = document.getElementsByClassName('colorSlider');
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener('input', update);
        sliders[i].addEventListener('change', update);
    }

    // Knoppen
    document.getElementById('btnSave').addEventListener('click', saveColor);
    document.getElementById('btnClearAll').addEventListener('click', clearAll);

    // Herstel slider-instellingen uit localStorage
    laadSliders();

    // Herstel favoriete kleuren uit localStorage
    laadFavorieten();

    // Meteen de kleur tonen op basis van herstelde sliderwaarden
    update();
};

// ---- Update kleurvak en labels ----

const update = () => {
    const r = document.getElementById('sliderR').value;
    const g = document.getElementById('sliderG').value;
    const b = document.getElementById('sliderB').value;

    // Toon sliderwaarden naast de labels
    document.getElementById('labelR').textContent = r;
    document.getElementById('labelG').textContent = g;
    document.getElementById('labelB').textContent = b;

    const kleur = `rgb(${r}, ${g}, ${b})`;
    document.getElementById('visualisatie').style.backgroundColor = kleur;
    document.getElementById('tekstLabel').textContent = kleur;

    // Sla de huidige slider-instellingen op in localStorage
    slaSlidersOp(r, g, b);
};

// ---- Slider-instellingen bewaren en herstellen ----

const slaSlidersOp = (r, g, b) => {
    const instellingen = { r, g, b };
    localStorage.setItem(STORAGE_KEY_SLIDERS, JSON.stringify(instellingen));
};

const laadSliders = () => {
    const opgeslagen = localStorage.getItem(STORAGE_KEY_SLIDERS);
    if (opgeslagen === null) return; // niets opgeslagen, standaardwaarden blijven

    const instellingen = JSON.parse(opgeslagen);
    document.getElementById('sliderR').value = instellingen.r;
    document.getElementById('sliderG').value = instellingen.g;
    document.getElementById('sliderB').value = instellingen.b;
};

// ---- Favorieten bewaren en herstellen ----

const slaFavorietenOp = (favorieten) => {
    localStorage.setItem(STORAGE_KEY_FAVORITES, JSON.stringify(favorieten));
};

const haalFavorietenOp = () => {
    const opgeslagen = localStorage.getItem(STORAGE_KEY_FAVORITES);
    if (opgeslagen === null) return []; // nog geen favorieten
    return JSON.parse(opgeslagen);
};

const laadFavorieten = () => {
    const favorieten = haalFavorietenOp();
    for (let i = 0; i < favorieten.length; i++) {
        voegSwatchToe(favorieten[i]);
    }
};

// ---- Kleur opslaan als favoriet ----

const saveColor = () => {
    const huidigeKleur = document.getElementById('visualisatie').style.backgroundColor;

    // Voeg toe aan de opgeslagen lijst
    const favorieten = haalFavorietenOp();
    favorieten.push(huidigeKleur);
    slaFavorietenOp(favorieten);

    // Toon de nieuwe swatch op de pagina
    voegSwatchToe(huidigeKleur);
};

// ---- Swatch aanmaken en toevoegen aan de pagina ----

const voegSwatchToe = (kleur) => {
    const storage = document.getElementById('storage');

    // Gekleurde swatch
    const swatch = document.createElement('div');
    swatch.classList.add('swatch');
    swatch.style.backgroundColor = kleur;
    swatch.title = kleur;

    // Delete-knop op de swatch
    const btnDelete = document.createElement('button');
    btnDelete.classList.add('btnDelete');
    btnDelete.textContent = '×';

    // Klik op swatch → herstel kleur in de sliders
    swatch.addEventListener('click', () => {
        herstelKleur(kleur);
    });

    // Klik op X → verwijder deze swatch
    btnDelete.addEventListener('click', (event) => {
        event.stopPropagation(); // swatch-klik niet mee activeren
        verwijderSwatch(swatch, kleur);
    });

    swatch.appendChild(btnDelete);
    storage.appendChild(swatch);
};

// ---- Kleur herstellen in de sliders ----

const herstelKleur = (kleur) => {
    // kleur is in formaat "rgb(r, g, b)"
    // Extracteer de drie getallen met een reguliere expressie
    const match = kleur.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (match === null) return;

    document.getElementById('sliderR').value = match[1];
    document.getElementById('sliderG').value = match[2];
    document.getElementById('sliderB').value = match[3];

    update();
};

// ---- Swatch verwijderen ----

const verwijderSwatch = (swatchElement, kleur) => {
    // Verwijder uit de DOM
    document.getElementById('storage').removeChild(swatchElement);

    // Verwijder ook uit localStorage
    const favorieten = haalFavorietenOp();
    const index = favorieten.indexOf(kleur);
    if (index !== -1) {
        favorieten.splice(index, 1);
    }
    slaFavorietenOp(favorieten);
};

// ---- Alle favorieten wissen ----

const clearAll = () => {
    document.getElementById('storage').innerHTML = '';
    localStorage.removeItem(STORAGE_KEY_FAVORITES);
};

// ---- Start de applicatie zodra de pagina volledig geladen is ----
window.addEventListener('load', setup);
