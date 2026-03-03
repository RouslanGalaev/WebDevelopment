const setup = () => {
    let sliders = document.getElementsByClassName("colorSlider");

    for (let i = 0; i < sliders.length; i++) {
        // "input" zorgt voor live updates tijdens het slepen
        sliders[i].addEventListener("input", update);

        // "change" is een backup voor als je de slider loslaat
        sliders[i].addEventListener("change", update);
    }
}

const update = () => {
    let sliders = document.getElementsByClassName("colorSlider");
    let vakje = document.getElementById("visualisatie");

    let r = sliders[0].value;
    let g = sliders[1].value;
    let b = sliders[2].value;

    // We stellen de kleur live in
    vakje.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";

    // Optioneel: toon de waarde ook in tekst zodat je ziet dat het getal verandert
    document.getElementById("tekstLabel").innerHTML = "rgb(" + r + ", " + g + ", " + b + ")";
}

window.addEventListener("load", setup);