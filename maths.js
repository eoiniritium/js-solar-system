function deg2rad(deg) {
    return (deg * Math.PI)/180;
}

function rad2deg(rad) {
    return (rad * 180)/Math.PI;
}

function _sin(theta) {
    return Math.sin(deg2rad(theta));
}

function _cos(theta) {
    return Math.cos(deg2rad(theta));
}

function _tan(theta) {
    return Math.tan(deg2rad(theta));
}

function _asin(oh) {
    return rad2deg(Math.asin(oh));
}

function _acos(ah) {
    return rad2deg(Math.acos(ah));
}

function _atan(oa) {
    return rad2deg(Math.atan(oa));
}