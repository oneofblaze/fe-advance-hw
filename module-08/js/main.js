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
console.log(buttons[0], buttons.length);
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");
console.log(keys);
// const keyboard = document.querySelectorAll("button");
console.log(buttons);

const onPush = event => {
  if (keys.includes(event.key)) {
    console.log(event.key); // входит символ с клавиатуры;
    if (event.key === buttons.find(event.key.innerHTML)) {
      event.key.classList.add('keyboard__btn--active');
      if (soundCheckbox.checked) {
        playSound(event.key.dataset.note);
      }
    }
  }
};
window.addEventListener("keydown", onPush);

//Пример:
// const onPush = event => {
//   if(keys.includes(event.key)){
//     let currentButton = buttons.find((a) => a.innerHTML === event.key || a.innerHTML === "space" );
//     let note = currentButton.classList.add('keyboard__btn--active');
//     setTimeout(()=>currentButton.classList.remove('keyboard__btn--active'), 100);
//     let soundCheckbox = document.getElementById('slideThree');
//     if(soundCheckbox.checked){
//       playSound(currentButton.dataset.note);
//       }
//     }
// };
// window.addEventListener("keydown", onPush);