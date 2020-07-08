## IntersectionObserver-交叉监听器

### 关键词

- 交叉
- 异步监听

### 特别注意

- Entry的isVisible是chrome浏览器的特有属性

```js
const container = document.getElementById('container');
const prePad = document.getElementById('prePad');
const aftPad = document.getElementById('aftPad');
const itemFactory = new ItemFactory;
const observer = createObserver(container, function(entries) {
    console.log('dow：', entries);
    // return;
    if(entries[0].isIntersecting) {
        let lastItemText = +container.lastChild.innerHTML;
        // 取消监听原lastone
        observer.unobserve(container.children[container.children.length - 1]);
        // 移出第一个元素
        const first = container.children[1];
        container.removeChild(first);
        // 增加padding
        pad.style.paddingTop = `${parseInt(pad.style.paddingTop) + 50}px`;
        // 添加并监听lastone
        const last = itemFactory.createElement(++lastItemText);
        container.appendChild(last);
        observer.observe(last);
    }
});

```

```js
let lastItemText = +container.lastChild.innerHTML;
// 取消监听原lastone
observer.unobserve(container.children[container.children.length - 1]);
// 移出第一个元素
const first = container.children[1];
container.removeChild(first);
// 增加padding
prePad.style.paddingTop = `${parseInt(prePad.style.paddingTop) + 50}px`;
// 添加并监听lastone
const last = itemFactory.createElement(++lastItemText);
container.appendChild(last);
observer.observe(last);
```

