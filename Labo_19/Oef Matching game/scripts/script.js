let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6, // 12 kaarten totaal, dus 6 paren
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    ACHTERKANT_PAD: "images/achterkant.png",
    eersteKaart: null,
    tweedeKaart: null,
    busy: false // om te voorkomen dat je 3 kaarten tegelijk klikt
};

const setup = () => {
    let kaarten = [];
    // Vul de array met paren (0,0, 1,1, 2,2, ...)
    for (let i = 0; i < global.AANTAL_KAARTEN; i++) {
        kaarten.push(i);
        kaarten.push(i);
    }

    // Shuffle de kaarten (vrij naar cursus/hulpbronnen)
    kaarten.sort(() => Math.random() - 0.5);

    let speelveld = document.getElementById("playField");

    // Maak de kaarten aan in de DOM
    for (let i = 0; i < kaarten.length; i++) {
        let img = document.createElement("img");
        img.src = global.ACHTERKANT_PAD;
        img.setAttribute("data-card-index", kaarten[i]);
        img.className = "kaart";
        img.addEventListener("click", klikKaart);
        speelveld.appendChild(img);
    }
};

const klikKaart = (event) => {
    let geklikteKaart = event.target;

    // Check of we mogen klikken
    if (global.busy || geklikteKaart === global.eersteKaart || geklikteKaart.className === "matched") {
        return;
    }

    // Toon de voorkant
    let index = geklikteKaart.getAttribute("data-card-index");
    geklikteKaart.src = global.IMAGE_PATH_PREFIX + index + global.IMAGE_PATH_SUFFIX;

    if (!global.eersteKaart) {
        global.eersteKaart = geklikteKaart;
    } else {
        global.tweedeKaart = geklikteKaart;
        global.busy = true;
        checkMatch();
    }
};

const checkMatch = () => {
    let match = global.eersteKaart.getAttribute("data-card-index") ===
        global.tweedeKaart.getAttribute("data-card-index");

    if (match) {
        // Match gevonden!
        global.eersteKaart.className = "matched";
        global.tweedeKaart.className = "matched";
        resetBeurt();
    } else {
        // Geen match: wacht 1 seconde en draai terug (Timing uit cursus)
        setTimeout(() => {
            global.eersteKaart.src = global.ACHTERKANT_PAD;
            global.tweedeKaart.src = global.ACHTERKANT_PAD;
            resetBeurt();
        }, 1000);
    }
};

const resetBeurt = () => {
    global.eersteKaart = null;
    global.tweedeKaart = null;
    global.busy = false;
};

window.addEventListener("load", setup);