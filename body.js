function vectorDistribute(magnitude, heading) {
    let x;
    let y;

    if (heading == 360) {heading = 0;}
    let quadrant;
    if      ( 000 <= heading && heading < 090) {
        quadrant = 0;
    }
    else if ( 090 <= heading && heading < 180) {
        quadrant = 1;
    }
    else if ( 180 <= heading && heading< 270) {
        quadrant = 2;
    }
    else if (270 <= heading && heading < 360) {
        quadrant = 3;
    }

    let d;
    switch (quadrant) {
        case 0:
            d = 90 - heading;
            x = _cos(d) * magnitude;
            y = -(_sin(d) * magnitude);
            break;
        case 1:
            d = 180 - heading;
            x = _cos(d) * magnitude;
            y = _sin(d) * magnitude;
            break;
        case 2:
            d = 270 - heading;
            x = -(_cos(d) * magnitude);
            y = _sin(d) * magnitude;
            break;
        case 3:
            d = 360 - heading;
            x = -(_cos(d) * magnitude);
            y = -(_sin(d) * magnitude);
            break;
    }

    if(Math.abs(x) == Math.abs(magnitude)) {y = 0;}
    if(Math.abs(y) == Math.abs(magnitude)) {x = 0;}


    const retobj = {x: x,
                    y: y};
    return retobj
}

function reVector(x, y) {
    if (y == 0 && x == 0) {
        return {magnitude: 0, direction: 0};
    }

    let magnitude;
    let d;
    magnitude = Math.abs(Math.sqrt((x*x) + (y*y)));
    
    let at = _atan(Math.abs(y)/Math.abs(x));
    if        (x > 0 && y > 0) { // quadrant = 0
        d = 90 - at;
    } else if (x > 0 && y < 0) { // quadrant = 1
        d = 180 - at;
    } else if (x < 0 && y < 0) { // quadrant = 2
        d = 270 - at;
    } else if (x < 0 && y > 0) { // quadrant = 3
        d = 360 - at;
    } else {
        if(x == 0) {
            if(y > 0) {
                d = 180;
            } else {
                d = 0;
            }
        } else if(y == 0) {
            if(x > 0) {
                d = 90;
            } else {
                d = 270;
            }
        }
    }

    return {magnitude: magnitude, direction: d};
}

function initBody(mass, radius, x, y, initial_velocity) { // real, real, real, real, {magnitude: real, direction: real}
    return {mass: mass, radius: radius, momentum: {magnitude: initial_velocity.magnitude * mass, direction: initial_velocity.direction}, position: {x: x, y: y}};
}

function drawBody(worldMap, bodyObj, colour) {
    let realXPos = map(bodyObj.position.x, 0, worldMap.x, 0, width); // Map virtual position to canvas position
    let realYPos = map(bodyObj.position.y, 0, worldMap.y, 0, height);

    fill(colour);
    circle(realXPos, realYPos, bodyObj.radius*2);
}

function addForceToBody(bodyObj, force, heading) {
    // f = ma
    // a = f/m

    // v = u + at
    ret = bodyObj;

    const a = vectorDistribute(force/bodyObj.mass, heading); // Acceleration
    const ax = a.x;
    const ay = a.y;

    const t = deltaTime;

    const u = vectorDistribute(bodyObj.momentum.magnitude / bodyObj.mass, bodyObj.momentum.direction);
    const ux = u.x;
    const uy = u.y;

    const vx = ux + (ax * t);
    const vy = uy + (ay * t);

    ret.momentum.magnitude = reVector(vx, vy).magnitude * bodyObj.mass; // Update velocity
    ret.momentum.direction = reVector(vx, vy).direction;

    return ret;
}

function moveBody(bodyObj) {
    ret = bodyObj;

    ret.position.x += vectorDistribute(ret.momentum.magnitude / ret.mass, ret.momentum.direction).x;
    ret.position.y += vectorDistribute(ret.momentum.magnitude / ret.mass, ret.momentum.direction).y;

    return ret;
}