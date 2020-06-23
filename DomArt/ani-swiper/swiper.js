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

var wrapper = document.getElementsByClassName('items-wrapper')[0];
console.log(wrapper);

var red = document.getElementById('red');
red.addEventListener('click', function() {
    console.log('emit');
    wrapper.style.animation = 'first 1s';
});

var blue = document.getElementById('blue');
blue.addEventListener('click', function() {
    wrapper.style.animation = 'second 1s';
});

var green = document.getElementById('green');
green.addEventListener('click', function() {
    wrapper.style.animation = 'third 1s';
});