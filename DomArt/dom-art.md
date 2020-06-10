## 最佳实践

### 平稳退化

## 书籍章节总结

### 4. DOM获取和属性赋值

- `getElementById`
- `getElementsByTagName`
- `getElementsByClassName`
- `getAttribute`
- `setAttribute`

### 5. 子节点相关属性

- `childNodes`
- `nodeType`
- `nodeValue`
  - 1: 元素节点
  - 2: 属性节点
  - 3: 文本节点
- `firstChild`
- `lastChild`

### 6.优化

- 对象嗅探
- css样式优化

### 7. 动态创建标记

- `document.createElement`
- `document.createTextNode`
- 配合`ajax`动态创建元素

### 8. 充实文档内容

- 遍历整个文档，获取下面内容进行展示
  - 缩略语`abbr`
  - 超链接
  - accessKey（快捷键对照）

### 9. CSS-DOM 样式相关

#### 样式-行为-表现分离

- css
- js
- xhtml

#### element.style

不在DOM中的style属性中设置的属性（如外引css、head中编写style）是无法通过`element.style`读取到的

#### 何时使用js修改元素style

css不方便的时候，使用js。个人认为一些动态场景更适合这样

#### js干涉样式的方式

- element.style
- element.className

#### Trick有关添加样式的抽象

##### 获取邻居并且添加给定样式函数

```js
function styleTagNextSiblings(tagName, className) {
    if (!document.getElementsByTagName) return false;
    var elems = document.getElementsByTagName(tagName);
    var elem;
    for (var i = 0; i < elems.length; i++) {
        addClass(elems[i].nextElementSibling, className)
    }
}
```

##### 对addClass也进行了抽象

```js
function addClass(elem, className) {
    if (elem) {
        if (elem.className) {
            elem.className += (' ' + className);
        } else {
            elem.className = className;
        }
    }
}
```



## Trick

### 可复用函数

#### addLoadEvent

```js
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
```



#### 添加cite说明区域

```js
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
```



#### 添加accesskey对照区域

```js
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
```



#### 添加斑马线

##### Css3

```css
/* css3可以按照如下写 */
tr:nth-child(odd) {
    background-color: #ffc;
}
tr:nth-child(even) {
    background-color: #fff;
}
```

##### 降级方案

```js
/* 降级方案 */
function addStripeOnTable() {
    var trs = document.getElementsByTagName('tr');
    for (var i = 0; i < trs.length; i++) {
        trs[i].style.backgroundColor = i % 2 ? '#ffc' : '#fff';
    }
}
```



#### 添加a标签对照区域

```js
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
```

#### hover的降级方案

##### css3

```css
tr:hover {
    font-weight: bold;
}
```

##### 降级方案

```js
function highlightRows() {
    if (!document.getElementsByTagName) return false;
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
```

#### 为特定元素添加class（这里给h1后的一个元素添加class或者样式）

##### css方案

```css
h1 + * {
    font-weight: bold;
    font-size: 1.4em;   
}
```



##### js方案1（这样会覆盖原有class）

```js
// add class on dom after h1
function addClassAfterH1() {
    if (!document.getElementsByTagName) return false;
    var h1s = document.getElementsByTagName('h1');
    var elem;
    for (var i = 0; i < h1s.length; i++) {
        elem = h1s[i].nextElementSibling;
        if (elem) elem.className = 'intro';
    }
}
```



##### js方案2（加class）

```js
// add class on dom after h1
function addClassAfterH1() {
    if (!document.getElementsByTagName) return false;
    var h1s = document.getElementsByTagName('h1');
    var elem;
    for (var i = 0; i < h1s.length; i++) {
        elem = h1s[i].nextElementSibling;
        if (elem) {
            if (elem.className) {
                elem.className += ' intro';
            } else {
                elem.className = 'intro';
            }
        }
    }
}
```



