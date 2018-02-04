/*
Визуализируем клавиатуру.
1. Написать метод createLayout() который создает клавиатуру состоящую из 3-х строк, в каждой строке
такое кол-во кнопок как длины topRow/middleRow и bottomRow полей.
2. Можно использовать либо createElement либо создавать строку из тегов и вешать через
insertAdjacentHTML или innerHTML.
3. Добавить минимальное оформление на свой вкус.
*/

const virtualKeyboard = {
    layouts: {
        topRow: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '\[', '\]'],
        middleRow: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '\;', '\''],
        bottomRow: ['z', 'x', 'c', 'v', 'b', 'n', 'm', '\,', '.', '/']
    },
    createLayout() {
        let ln1 = virtualKeyboard.layouts.topRow.length;
        let ln2 = virtualKeyboard.layouts.middleRow.length;
        let ln3 = virtualKeyboard.layouts.bottomRow.length;
        console.log(ln1, ln2, ln3);


        // for (let i = 0; i < ln1; i++) {
        //     const item = document.createElement("div");
        //     item.classList.add("btn");
        //     item.textContent = `${virtualKeyboard.layouts.topRow[i]}`;
        //     const nav = document.querySelector("article");
        //     nav.appendChild(item);
        // };
        for (let i = 0; i < ln1; i++) {
            const list = document.querySelector('article');
            list.insertAdjacentHTML('beforeend', `<div class="btn" >${virtualKeyboard.layouts.topRow[i]}</div>`);
        };
        for (let i = 0; i < ln2; i++) {
            const list = document.querySelector('article');
            list.insertAdjacentHTML('beforeend', `<div>${virtualKeyboard.layouts.middleRow[i]}</div>`);
        };
        for (let i = 0; i < ln3; i++) {
            const list = document.querySelector('article');
            list.insertAdjacentHTML('beforeend', `<div>${virtualKeyboard.layouts.bottomRow[i]}</div>`);
        };
        return console.log(document.querySelector('article'));


    },
};


console.log(virtualKeyboard);
virtualKeyboard.createLayout();