// 如果onload已经存在，则直接等于会覆盖掉 
// window.onload = prepareLinks;
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
// 适用addLoadEvent添加onLoad方法
addLoadEvent(prepareLinks);
addLoadEvent(preparePlaceholder);



// 为a标签绑定相应方法
function prepareLinks() {
    // Object嗅探
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;

    // 获取ul里面的a标签,减少搜索范围
    var gallery = document.getElementById('imagegallery');
    if (!gallery) return false;
    var links = gallery.getElementsByTagName('a');

    // 绑定点击事件
    if (links.length < 1) return false;
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            return showPic(this) ? false : true;
        };
    }
};

// 创建图片占位符
function preparePlaceholder() {
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    var main = document.getElementById('main');
    if (!main) return false;
    
    var placeholder = document.createElement('img');
    placeholder.setAttribute('id', 'placeholder');
    placeholder.setAttribute('src', './imgs/nerv-icon.webp');
    placeholder.setAttribute('alt', 'my image gallery');
    
    var description = document.createElement('p');
    description.setAttribute('id', 'description');
    var descText = document.createTextNode('Choose an image');
    description.appendChild(descText);
    var gallery = document.getElementById('imagegallery');

    var wrapper = document.createElement('div');
    wrapper.appendChild(placeholder);
    wrapper.appendChild(description);
    
    insertAfter(wrapper, document.getElementById('imagegallery'));
    
}

// 在后面插入
function insertAfter(node, base) {
    var parent = base.parentNode;
    if (parent.lastChild === base) {
        parent.appendChild(node);
    } else {
        parent.insertBefore(node, base.nextSibling);
    }
}

// inline显示图片
function showPic(whichpic) {
    // img
    var img = document.getElementById('placeholder');
    if (img.nodeName !== 'IMG') return false;
    img.setAttribute('src', whichpic.getAttribute('href'));

    // desc
    var description = document.getElementById('description');
    if (description && description.firstChild.nodeType === 3) {
        var text = whichpic.getAttribute('title');
        description.firstChild.nodeValue = text;
    }
    return true;
}

// 弹出显示图片
function popUp(url) {
    window.open(url, 'popUp', "width=320,height=480");
}