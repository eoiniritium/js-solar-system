worldMap = {x: 1000, y:1000};

let b1;

function setup() {
    const canvas = createCanvas(1000, 600);
    canvas.parent('canvasDiv');
    b1 = initBody(500.0, 10, 40, 40, velocityXY(100, 090))
    //console.log(b1);
}

function forces(m1, m2, distance) {
    const G = 6.6743e-11;
    let d2 = distance * distance;
    let force = G * m1 * m2;
    force = force/d2;

    return force;
}

function simulate() {
    b1 = moveBody(b1, 40, 90);
}

function draw() {
    background(000);
    simulate();
    drawBody(worldMap, b1, '#ffffff');
}