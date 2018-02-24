/*
  Написать скрипт который собирает 3 строки клавиатуры и клавишу "пробел" из шаблона по заданому объекту.
  Для зарендереной клавиатуры реализовать поведение из модуля 8, подсветка нажатой клавиши, отображение
  символа итд.
*/

const lang = {
  en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./"
};

const keyboard = {
  row: [lang.en.slice(0, 12).split(""), lang.en.slice(12, 23).split(""), lang.en.slice(23, 33).split("")],
  notes: ["do", "re", "mi", "fa", "sol", "la", "si"]
}
console.log(keyboard);

const html = document.querySelector('#testLodash').textContent.trim();
const output = document.querySelector('#output');
const compiled = _.template(html);
const result = compiled(keyboard);
output.innerHTML = result; // помещаем результат на html страницу;

const playSound = note => {
  const audio = document.querySelector(`audio[data-note=${note}]`);
  audio.currentTime = 0;
  audio.play();
};

const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./ ".split("");
const pressed = document.querySelector(".pressed");

window.addEventListener("keydown", function callback(e) {
  if (keys.includes(e.key)) {
    let currentButton = buttons.find((a) => a.innerHTML === e.key || a.innerHTML === "space");  //ищем в массиве buttons кнопку, которую мы нажали;
    let note = currentButton.classList.add('keyboard__btn--active');  // присваиваем класс с подсветкой;
    setTimeout(() => currentButton.classList.remove('keyboard__btn--active'), 200);
    pressed.textContent = `"${currentButton.textContent}"`; // помещаем клавишу, которую мы нажали в "pressed";

    let soundCheckbox = document.getElementById('slideThree');
    if (soundCheckbox.checked) {
      playSound(currentButton.dataset.note);
    }
  }
}, true);