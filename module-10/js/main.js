/*
  Создать компонент счетчика времени.
- Простой прямоугольник который показывает время со старта упражения и до того момента когда все 
  клавиши были верно нажаты.
- На входе есть строка символов для упражнения.   
- Написать метод countKPS() который,по окончанию упражнения,  возвращает кол-во верных клавишь
  в секунду которое было нажато за время выполнения упражнения.
- Записать результат в localStorage, но только в том случае если он лучше чем тот что уже есть в localStorage.
- При повторном посещении страницы надо брать то что записано в localStorage и вешать на страницу,
  это будет компонент лучшего результата.
*/
// дается строка и от первого нажатия до посленего правильного набранного знака считать время
const lang = "qwerty";
const string = "qryte";
const charsArr = string.split("").reverse();
const timerOutput = document.querySelector(".timer");

const exerciseOutput = document.querySelector(".exercise");
const keyboard = document.querySelector(".keyboard");

let arrMain = [];
let counter = 0;
let allKeys = [];

let time = setInterval(() => {
  counter++;
  timerOutput.innerHTML = counter;
}, 1000);

// keyboard.textContent = `Повторите, пожалуйста, набор символов указанный выше.`;
exerciseOutput.innerHTML = string;
keyboard.textContent = `Your last result: 5 letters in ${localStorage.getItem("data")} sec`;

window.addEventListener("keydown", function (e) {
  allKeys.push(e.key);
  if (allKeys.length <= 5) {
    if (charsArr.includes(e.key)) {
      arrMain.push(e.key);
      if (arrMain.length == 5) {
        for (let i = 0; i < arrMain.length; i++) {
          if (arrMain[i] == charsArr[i]) {
            clearInterval(time);
            keyboard.textContent = "";
            keyboard.textContent = `Your result: 5 letters in ${counter} sec`;
            localStorage.setItem("data", JSON.stringify(counter));
          }
        }
      }
    }
  } else {
    clearInterval(time);
    keyboard.textContent = "Ваш результат хуже предыдущего!";
  }
});