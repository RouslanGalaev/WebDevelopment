
let global = {
    IMAGE_COUNT: 5, // aantal figuren (0.png t/m 4.png)
    IMAGE_SIZE: 48, // grootte van de figuur in pixels
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal ms voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer
};

const setup = () => {
    // Start de game door de eerste verplaatsing te triggeren
    moveTarget();
};

const moveTarget = () => {
    let playField = document.getElementById("playField");
    let target = document.getElementById("target");

    // Als het target nog niet bestaat in de DOM, maken we het aan
    if (!target) {
        target = document.createElement("img");
        target.id = "target";
        target.style.position = "absolute"; // Zorg dat we top/left kunnen zetten
        target.addEventListener("click", clickTarget);
        playField.appendChild(target);
    }

    // 1. Kies een willekeurige afbeelding [cite: 6]
    let randomImageIndex = Math.floor(Math.random() * global.IMAGE_COUNT);
    target.src = global.IMAGE_PATH_PREFIX + randomImageIndex + global.IMAGE_PATH_SUFFIX;

    // 2. Bereken willekeurige positie binnen het speelveld
    let maxLeft = playField.clientWidth - global.IMAGE_SIZE;
    let maxTop = playField.clientHeight - global.IMAGE_SIZE;

    let left = Math.floor(Math.random() * maxLeft);
    let top = Math.floor(Math.random() * maxTop);

    // 3. Pas de positie toe via inline styles [cite: 23]
    target.style.left = left + "px";
    target.style.top = top + "px";

    // 4. Start de timer voor de volgende automatische verplaatsing
    // We wissen eerst de oude om dubbele timers te voorkomen
    clearTimeout(global.timeoutId);
    global.timeoutId = setTimeout(moveTarget, global.MOVE_DELAY);
};

const clickTarget = (e) => {
    // Stop de huidige timer zodat het object niet direct nog eens verplaatst
    clearTimeout(global.timeoutId);

    // Controleer of we een "bom" (0.png) hebben geraakt
    // In de video eindigt het spel of verlies je punten bij de bom
    if (e.target.src.indexOf("0.png") !== -1) {
        alert("GAME OVER! Je raakte de bom.");
        global.score = 0;
    } else {
        global.score++;
    }

    // Update de score in de UI (zorg dat je een element met id 'score' hebt)
    console.log("Score: " + global.score);

    // Verplaats het object onmiddellijk naar een nieuwe plek
    moveTarget();
};

window.addEventListener("load", setup);