let inspo;

async function setup() {
    createCanvas(800, 600);
    inspo = loadImage("assets/on_mari.jpg");
}

function draw() {
    if (inspo) {
        image(inspo, 0, 0, width, height);
        fill(255, 220, 177);
        circle(400, 300, 200);
    }
    text("fah", 0, 0)
}
