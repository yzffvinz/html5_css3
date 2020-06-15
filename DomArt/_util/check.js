var AVAI_MAP = {
    id: document.getElementById,
    tag: document.getElementsByTagName,
    class: document.getElementsByClassName
};

function doCheck() {
    var flag = true; 
    for (var i = 0; i < arguments.length; i++) {
        if (!AVAI_MAP[arguments[i]]) {
            flag = false; break;
        }
    }
    return flag;
}