shouldSimulate = false;

const logbox = document.getElementById('log-box');
const date = new Date();
function createLog(text) {
    const day = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
    const time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ':' + ('00' + date.getMilliseconds()).slice(-3);
    const dayTime = day+' '+time;
    logbox.value += `[${dayTime}] ${text}\n`;
}

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
    shouldSimulate = false;
    initWorld();
    createLog('simulation reset');
}
function startSystem() {
    shouldSimulate = true;
    createLog('simulation started');
}
function pauseSystem() {
    alert('Pause System');
}
function stopSystem() {
    shouldSimulate = false;
    createLog('simulation stopped');
}
function addBodySystem() {
    alert('Add Body System');
}