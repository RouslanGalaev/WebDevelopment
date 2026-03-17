const toonResultaat = () => {
    // 1. Checkbox uitlezen (.checked geeft true of false)
    let isRoker = document.getElementById("chkRoker").checked;
    if (isRoker) {
        console.log("is een roker");
    } else {
        console.log("is geen roker");
    }

    // 2. Radiobuttons uitlezen (gebruik querySelector voor de :checked status)
    let gekozenTaal = document.querySelector('input[name="taal"]:checked');
    if (gekozenTaal != null) {
        console.log("moedertaal is " + gekozenTaal.value);
    } else {
        console.log("moedertaal is niet opgegeven");
    }

    // 3. Enkelvoudige select uitlezen (.value)
    let buurland = document.getElementById("selBuurland").value;
    console.log("favoriete buurland is " + buurland);

    // 4. Meervoudige select uitlezen (loop over alle options)
    let selectElement = document.getElementById("selBestelling");
    let geselecteerdeItems = "";

    for (let i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].selected) {
            geselecteerdeItems += selectElement.options[i].value + " ";
        }
    }
    console.log("bestelling bestaat uit " + geselecteerdeItems.trim());
};

const setup = () => {
    let btnToon = document.getElementById("btnToon");
    btnToon.addEventListener("click", toonResultaat);
};

window.addEventListener("load", setup);