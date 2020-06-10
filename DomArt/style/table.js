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
addLoadEvent(highlightRows);
addLoadEvent(addClassAfterH1);

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

// hover降级方案，移动变为bold
function highlightRows() {
    var rows = document.getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {
        rows[i].onmouseover = function() {
            this.style.fontWeight = 'bold';
        }
        rows[i].onmouseout = function() {
            this.style.fontWeight = 'normal';
        }
    }
}

// add class on dom after h1
function addClassAfterH1() {
    styleTagNextSiblings('h1', 'intro');
}

function styleTagNextSiblings(tagName, className) {
    if (!document.getElementsByTagName) return false;
    var elems = document.getElementsByTagName(tagName);
    console.log(tagName);
    console.log(elems);
    var elem;
    for (var i = 0; i < elems.length; i++) {
        addClass(elems[i].nextElementSibling, className)
    }
}

function addClass(elem, className) {
    if (elem) {
        if (elem.className) {
            elem.className += (' ' + className);
        } else {
            elem.className = className;
        }
    }
}