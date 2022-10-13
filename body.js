function velocityXY(speed, direction) {
    // return x + y velocity
    let x;
    let y;

    if (direction == 360) {direction = 0;}
    let quadrant;
    if      ( 000 <= direction && direction < 090) {
        quadrant = 0;
    }
    else if ( 090 <= direction && direction < 180) {
        quadrant = 1;
    }
    else if ( 180 <= direction && direction< 270) {
        quadrant = 2;
    }
    else if (270 <= direction && direction < 360) {
        quadrant = 3;
    }

    

    let d;
    switch (quadrant) {
        case 0:
            d = 90 - direction;
            x = _cos(d) * speed;
            y = -(_sin(d) * speed);
            break;
        case 1:
            d = 180 - direction;
            x = _cos(d) * speed;
            y = _sin(d) * speed;
            break;
        case 2:
            d = 270 - direction;
            x = -(_cos(d) * speed);
            y = _sin(d) * speed;
            break;
        case 3:
            d = 360 - direction;
            x = -(_cos(d) * speed);
            y = -(_sin(d) * speed);
            break;
    }

    if(Math.abs(x) == Math.abs(speed)) {y = 0;}
    if(Math.abs(y) == Math.abs(speed)) {x = 0;}


    const retobj = {x: x,
                    y: y};
    return retobj
}

function initBody(mass, radius, x, y, initial_velocity) { // real, real, real, real, {magnitude: real, direction: real}
    return {mass: mass, radius: radius, momentum: {magnitude: initial_velocity.magnitude * mass, direction: initial_velocity.direction}, position: {x: x, y: y}};
}

function drawBody(worldMap, bodyObj, colour) {
    let realXPos = map(bodyObj.x, 0, worldMap.x, 0, width); // Map virtual position to canvas position
    let realYPos = map(bodyObj.y, 0, worldMap.y, 0, height);

    fill(colour);
    circle(realXPos, realYPos, bodyObj.radius*2);
}

function addForceToBody(bodyObj, speed, direction) {
    ret = bodyObj;
    dxdy = velocityXY(speed, direction);
    dx = dxdy.x;
    dy = dxdy.y;
    ret.momentum.x = dx;
    ret.velocity.y = dy;

    ret.x += ret.velocity.x;
    ret.y += ret.velocity.y;

    return ret;
}