/*
  Написать скрипт который собирает 3 строки клавиатуры и клавишу "пробел" из шаблона по заданому объекту.
  Для зарендереной клавиатуры реализовать поведение из модуля 8, подсветка нажатой клавиши, отображение символа итд.
*/

const lang = {
  en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./"
};

console.log(lang);
const arr = lang.en;
lang.en = new Array(
  lang.en.slice(0, 12).split(""),
  lang.en.slice(12, 23).split(""),
  lang.en.slice(23, 33).split("")
);

const html = document.querySelector('#testLodash').textContent.trim();
const output = document.querySelector('#output');
const compiled = _.template(html);
const result = compiled(lang);
output.innerHTML = result; // помещаем результат на html страницу;


const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./ ".split(""); // добавил "пробел", что бы правильно срабатывал event.key;
const pressed = document.querySelector(".pressed");

const onPush = event => {
  if (keys.includes(event.key)) {
    let arg; //переменная для стрелочной ф-и.
    let currentButton = buttons.find((arg) => arg.innerHTML === event.key || arg.innerHTML === 'space'); //ищем в массиве buttons кнопку, которую мы нажали;
    currentButton.classList.add('keyboard__btn--active'); // присваиваем класс с подсветкой;
    setTimeout(() => currentButton.classList.remove('keyboard__btn--active'), 200); //убираем класс через 200мс;
    pressed.textContent = event.key; // помещаем клавишу, которую мы нажали в "pressed";
  }
};

window.addEventListener('keydown', onPush);