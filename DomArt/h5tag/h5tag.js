window.onload = function() {
    if (!document.createElement || !document.getElementsByTagName || !document.createTextNode) return false;
    displayAbbreevaiations();
    displayCitations();
    displayAccessKeys();
};

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

function displayCitations() {
    var blockquotes = document.getElementsByTagName('blockquote');
    if (blockquotes.length < 1) return false;
    // 遍历并且创建超链接对照区域
    var div = document.createElement('div');
    for (var i = 0; i < blockquotes.length; i++) {
        var cite = blockquotes[i].getAttribute('cite');
        if (!cite) continue;
        
        // 创建a标签
        var a = document.createElement('a');
        a.setAttribute('href', cite);
        a.appendChild(document.createTextNode('source'));
        
        // 创建p标签
        var p = document.createElement('p');
        p.appendChild(a);

        // 添加p标签至div
        div.appendChild(p);
    }

    // 判断是否有合适的对象
    if (div.childNodes.length < 1) return false;

    // 创建标题
    var h2 = document.createElement('h2');
    h2.appendChild(document.createTextNode('Cites'));

    // 添加至body中
    document.body.appendChild(h2);
    document.body.appendChild(div);
}

function displayAccessKeys() {
    // 创建容纳accessKey的ul
    var ul = document.createElement('ul');

    // 获取a标签并且遍历
    var as = document.getElementsByTagName('a');

    for (var i = 0; i < as.length; i++) {
        // 获取href 和 accessKey，无则下一位
        var href = as[i].getAttribute('href');
        var accessKey = as[i].getAttribute('accessKey');
        console.log(href, accessKey);
        if (!href || !accessKey) continue;
        // 创建li及文字节点，添加至li中
        var li = document.createElement('li');
        var href = document.createTextNode(href);
        var colon = document.createTextNode(':');
        var accessKey = document.createTextNode(accessKey);

        li.appendChild(href);
        li.appendChild(colon);
        li.appendChild(accessKey);
        ul.appendChild(li);
    }

    // 判断是否添加了合适的accessKeyed li
    if(ul.childNodes.length < 1) return false;

    // 创建标题
    var h2 = document.createElement('h2');
    h2.appendChild(document.createTextNode('AccessyKeys'));

    // 添加至body中
    document.body.appendChild(h2);
    document.body.appendChild(ul);

}

