const etchPad = document.querySelector('#pad');
buildSketch(16);

const shakeButton = document.querySelector('#reset');
shakeButton.addEventListener('click', function() {
    shakeItOff();
    let newSize = parseInt(prompt("How big should the Etch-a-Sketch be?"));
    buildSketch(newSize);
});


function shakeItOff() {
    let toWipe = etchPad.querySelectorAll('div');
    toWipe.forEach((pixel) => {
        etchPad.removeChild(pixel);
    })
}
function buildSketch(size) {
    etchPad.style.grid = "none";
    etchPad.style.grid = `repeat(${size}, 1fr)/repeat(${size}, 1fr)`;
    addPixels(size);
    addSand();
}

function addPixels(size) {
    for(let i = 1; i <= (size**2); i++) {
        let etchPixel = document.createElement('div');
        etchPad.appendChild(etchPixel);
    }
}

function addSand() {
    let pixels = etchPad.querySelectorAll('div');
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', function() {
            pixel.classList.add("dark");
        });
    });
}