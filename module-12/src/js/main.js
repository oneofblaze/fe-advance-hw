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
};

console.log(virtualKeyboard);
