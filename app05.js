
function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, width, 100, 100);
}

function draw() {
    fill(mouseX, 100, 100);
    circle(mouseX, mouseY, 100);
}

function reset() {
    clear();
    circle(mouseX, mouseY, 100);
}

function mouseClicked() {
    reset();
}