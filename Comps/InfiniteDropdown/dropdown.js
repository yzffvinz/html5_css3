// item工厂
function Vincent(id = 'container', obOpts = {}) {
    const root = document.getElementById(id);
    const padId = 'pad';

    const observer = new IntersectionObserver(function(entries) {
        // console.log(entries);
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target === root.lastChild) {
                    // 取消监听
                    const beCanceled = entry.target;
                    observer.unobserve(beCanceled);
                    // 添加新元素
                    const newItem = appendItem(+beCanceled.innerHTML + 1);
                    // 将顶部元素删除，用padding替代
                    removeTop();
                    // 添加监听
                    observer.observe(newItem);
                } else if (entry.target === root.children[1] && parseInt(document.getElementById(padId).style.paddingTop) > 0) {
                    console.log(entry);
                    const beCanceled = entry.target;
                    observer.unobserve(beCanceled);
                    const newItem = insertItem(+beCanceled.innerHTML - 1);
                    removeBottom();
                    observer.observe(newItem);
                }
            } else if (entry.target === root.children[1]) {
            }
        });
    }, {
        root,
        rootMargin: '0px',
        threshold: 1,
        ...obOpts
    });

    function initDom() {
        const pad = document.createElement('div');
        pad.style.paddingTop = '0px';
        pad.id = padId;
        root.appendChild(pad);
        for (let i = 0; i < 11; i++) {
            appendItem(i);
        }
        observer.observe(root.lastChild);
        observer.observe(root.children[1]);
    }

    function removeTop(offset) {
        observer.unobserve(root.children[1]);
        root.removeChild(root.children[1]);
        const pad = document.getElementById(padId);
        pad.style.paddingTop = `${parseInt(pad.style.paddingTop) + (offset || 50)}px`;
        observer.observe(root.children[1]);
    }

    function removeBottom(offset) {
        observer.unobserve(root.lastChild);
        root.removeChild(root.lastChild);
        const pad = document.getElementById(padId);
        pad.style.paddingTop = `${parseInt(pad.style.paddingTop) - (offset || 50)}px`;
        observer.observe(root.lastChild);
    }

    function appendItem(text) {
        const div = document.createElement('div');
        div.innerHTML = text;
        div.className = +text % 2 ? 'item item-odd' : 'item';
        root.appendChild(div);
        return div;
    }

    function insertItem(text) {
        const div = document.createElement('div');
        div.innerHTML = text;
        div.className = +text % 2 ? 'item item-odd' : 'item';
        root.insertBefore(div, root.children[1]);
        return div;
    }

    return {
        root,
        observer,
        initDom,
        removeTop,
        appendItem,
        upup: () => {

            const beCanceled = root.children[1];
            observer.unobserve(beCanceled);

            const newItem = insertItem(+beCanceled.innerHTML - 1);
            removeBottom();

            observer.observe(newItem);
        }
    }
}

const vincent = new Vincent();
vincent.initDom();

// void(function() {
//     const btn = document.getElementById('btn');
//     btn.addEventListener('click', function() {
//         console.log('123');
//     });
//     btn.addEventListener('click', function() {
//         console.log('456');
//     });
// })();