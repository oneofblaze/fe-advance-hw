/*
 Напишите скрипт который реализует следующее поведение:
- При нажатии на клавишу (не виртуальной клавиатуры) должно обрабатываться событие keydown.
  (Для обработки нажатия нажатия клавиш, повесьте слушателя на window.
  window.addEventListener("keydown", callback);)
- Должны обрабатываться только те клавиши, которые присутствуют в разметке HTML (на виртуальной клавиатуре).
- Звук нажатия на клавишу должен соответсвовать ноте, описанной в атрибуте button data-note.
- Подсветку текущей клавиши реализуйте с помощью класса keyboard__btn--active.
- Чекбокс Sound должен включать и выключать звук нажатия на клавиши. 
*/

const playSound = note => {
  const audio = document.querySelector(`audio[data-note=${note}]`);
  audio.currentTime = 0;
  audio.play();
};
const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./ ".split(""); // добавил "пробел", что бы правильно срабатывал event.key;


const onPush = event => {
  if (keys.includes(event.key)) {
    let arg; //переменная для стрелочной ф-и.
    let currentButton = buttons.find((arg) => arg.innerHTML === event.key || arg.innerHTML === 'space'); //ищем в массиве buttons кнопку, которую мы нажали;
    currentButton.classList.add('keyboard__btn--active'); // присваиваем класс с подсветкой;

    setTimeout(() => currentButton.classList.remove('keyboard__btn--active'), 200); //убираем класс через 200мс;

    let soundCheckbox = document.getElementById('slideThree');
    if (soundCheckbox.checked) {
      playSound(currentButton.dataset.note);
    }
  }
};

window.addEventListener('keydown', onPush);