let inspo;
let env = "prod";

async function setup() {
    createCanvas(750, 450);
    if (env == "dev"){
        inspo = await loadImage("assets/on_mari.jpg");
    }
}

function draw() {
    
    scale (1);
    strokeWeight(3);
    stroke(0);

    if (inspo && env == "dev") {
        tint(255, 100);
        image(inspo, 0, 0, width, height);
        fill(255);
        textSize(20);
        text(`${round(mouseX)}, ${round(mouseY)}`, mouseX + 10, mouseY);
    }

    noFill();
    
    //Following is Mari
    
    //Head
    circle(315, 240, 45);

    //Body
    line(220, 310, 295, 253);
    
    //Left leg
    line(210, 408, 193, 408);
    line(193, 408, 220, 310);
    
    //Right leg
    line(261, 432, 210, 432);
    line(210, 432, 220, 310);

    //Right arm
    line(275, 268, 337, 286);
    line(337, 286, 359, 255);

    //Right hand bev
    rect(351, 244, 30, 10);
    rect(340, 246, 14, 5);

    //Left arm
    line(275, 268, 381, 258);


    //Following is the on part (saved for a later date)

    //Head
    circle(295, 81, 37);

    //Body
    line(293, 100, 283, 154);

    //Right leg
    line(256, 255, 289, 258);
    line(283, 154, 256, 255);

    //Left leg
    line(248, 250, 254, 253);
    line(283, 154, 248, 250);

    //Right arm 
    line(288, 134, 367, 60);

    //Left arm
    line(288, 134, 347, 110);
    line(347, 110, 378, 92);

    //Wall, Floor and Roof outlines
    line(87, 389, 355, 384);
    line(355, 384, 351, 56);
    line(351, 56, 412, 0);
    line(351, 56, 86, 86);
    line(355, 384, 454, 451);

    //Text
    scale(2, 1)
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(40);
    fill(255);
    stroke(0);
    strokeJoin(ROUND);
    strokeWeight(4);
    text("ON MARI 💯", 170, 379);
}
