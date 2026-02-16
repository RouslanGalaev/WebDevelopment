const toonSubstring = () => {
    // 1. Elementen ophalen
    let woord = document.getElementById("txtWoord").value;
    let start = document.getElementById("numStart").value;
    let einde = document.getElementById("numEinde").value;
    let output = document.getElementById("txtOutput");

    // 2. De substring berekenen
    // substring(van_index, tot_index)
    let resultaat = woord.substring(start, einde);

    // 3. Tonen op het scherm
    output.innerHTML = resultaat;
};

const setup = () => {
    let btn = document.getElementById("btnSubstring");
    btn.addEventListener("click", toonSubstring);
};

window.addEventListener("load", setup);