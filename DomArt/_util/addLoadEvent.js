// 如果onload已经存在，则直接等于会覆盖掉 
function addLoadEvent(func) {
    if (window.onload && typeof window.onload === 'function') {
        var oldOnLoad = window.onload;
        window.onload = function() {
            oldOnLoad();
            func();
        };
    } else {
        window.onload = func;
    }
}