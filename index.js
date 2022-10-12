document.getElementById('title').onclick = (e) => {
    resetSystem();
}
document.getElementById('startsim').onclick = (e) => {
    startSystem();
}
document.getElementById('pausesim').onclick = (e) => {
    pauseSystem();
}
document.getElementById('stopsim').onclick = (e) => {
    stopSystem();
}
document.getElementById('addbody').onclick = (e) => {
    addBodySystem();
}

function resetSystem() {
    alert('Reset');
}
function startSystem() {
    alert('Start System');
}
function pauseSystem() {
    alert('Pause System');
}
function stopSystem() {
    alert('Stop System');
}
function addBodySystem() {
    alert('Add Body System');
}