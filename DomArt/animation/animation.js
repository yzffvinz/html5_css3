function positionMessage() {
    if(!doCheck('id')) return;
    var elem = document.getElementById('message');
    if (!elem) return false;
    elem.style.position = 'absolute';
    elem.style.left = '50px';
    elem.style.top = '100px';
}

function moveMessage(elemId, stepX, stepY) {
    if(!doCheck('id')) return;
    var elem = document.getElementById(elemId);
    if (!elem) return false;
    elem.style.position = 'absolute';
    elem.style.left = (2 + parseInt(elem.style.left)) + 'px';
    elem.style.top = (2 + parseInt(elem.style.top)) + 'px';
}

function smoothlyMoveMessage(elemId, x, y, period) {
    var interval = 15;
    if(!doCheck('id')) return;
    var elem = document.getElementById(elemId);
    var distancX = x - parseInt(elem.style.left);
    var distancY = y - parseInt(elem.style.top);
    var stepX =  distancX / (period * 1000) * 15;
    var stepY =  distancY / (period * 1000) * 15;

    var i = setInterval(moveMessage.bind(null, elemId, stepX, stepY), 15);
}

addLoadEvent(positionMessage);
// addLoadEvent(moveMessage.bind(null, 300, 300));
addLoadEvent(smoothlyMoveMessage.bind(null, 'message', 800, 800, 10));