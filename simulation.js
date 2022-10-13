worldMap = {x: 1000, y:1000};

let b1;

function initWorld() {
    b1 = initBody(500.0, 10, 40, 40, {magnitude: 10, direction: 135});
    createLog('bodies created');
}


function setup() {
    const canvas = createCanvas(1000, 600);
    canvas.parent('canvasDiv');
    createLog('canvas created');
    initWorld();
}

function GravitationalAttractionForces(m1, m2, distance) {
    const G = 6.6743e-11;
    let d2 = distance * distance;
    let force = G * m1 * m2;
    force = force/d2;

    return force;
}

function simulate(shouldSimulate) {
    if(!shouldSimulate) {return;}
    b1 = addForceToBody(b1, 40, 135);
    createLog(`x: ${b1.velocity.x} y: ${b1.velocity.y}`);
}

function draw() {
    background(000);
    simulate(shouldSimulate);
    drawBody(worldMap, b1, '#ffffff');
}