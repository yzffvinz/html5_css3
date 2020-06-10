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

addLoadEvent(addStripeOnTable);
addLoadEvent(displayAbbreevaiations);

function addStripeOnTable() {
    var trs = document.getElementsByTagName('tr');
    for (var i = 0; i < trs.length; i++) {
        trs[i].style.backgroundColor = i % 2 ? '#ffc' : '#fff';
    }
}

function displayAbbreevaiations() {
    // 创建标题
    var h2 = document.createElement('h2');
    h2.appendChild(document.createTextNode('Abbreviations'));

    // 获取所有的abbr，并且创建dl
    var abbrs = document.getElementsByTagName('abbr');
    var dl = document.createElement('dl');

    // 遍历abbr列表添加至html中
    for (var i = 0; i < abbrs.length; i++) {
        // ie平稳退化
        if (abbrs[i].childNodes.length < 1) continue;
        // 创建dt
        var dt = document.createElement('dt');
        var dtText = document.createTextNode(abbrs[i].firstChild.nodeValue);
        dt.appendChild(dtText);
        // 创建dd
        var dd = document.createElement('dd');
        var ddText = document.createTextNode(abbrs[i].getAttribute('title'));
        dd.appendChild(ddText);
        // 将dt和dd添加至dl
        dl.appendChild(dt);
        dl.appendChild(dd);
    }
    
    // 如果没有添加元素进来，直接退出
    if (dl.childNodes.length < 1) return false;
    // 将标题、dl插入body尾部
    document.body.appendChild(h2);
    document.body.appendChild(dl);
}

