/*
  Пользователь через prompt вводит число участников группы. 
  Необходимо проверить является ли введенные данные целым 
  положительным числом. Вывести alert в случае ошибочного ввода.
        
  Всего имеется три группы sharm, hurgada и taba.
  В группах ограничено кол-во свободных мест:
    sharm - 15
    hurgada - 25
    taba - 6
    
  Если количество мест позволяет, то вывести пользователю 
  сообщение через confirm что есть место в группе такой-то, 
  согласен ли пользоваетель быть в этой группе?
  
  Если ответ ok, уменьшаем число свободных мест на  число участников группы.
  Если ответ нет, предлагаем следующую группу со свободными местами.
  
  Если мест нигде нет, выводим сообщение alert('Мест нет!')
*/
let member;
const hotelSharm = 15; //sharm - 15
const hotelHurgada = 25; //hurgada - 25
const hotelTaba = 6; //taba - 6
let num = prompt('Выбирете, пожалуйста отель, для этого введите соотвествующее число: Sharm - 1; Hurgada - 2; Taba - 3.', 1);

switch (num) {
  case '1': member = prompt(`Введите число учасников группы: Sharm. Сейчас свободно ${hotelSharm}`, 1);
    if (Number.isInteger(member) !== true && member < 0) { alert('Ошибка ввода!'); }
    else if (member < hotelSharm) {
      alert("Спасибо за регистрацию!"); alert(`Осталось свободных мест в группе:
           Sharm - ${hotelSharm - member};
           Hurgada - ${hotelHurgada};
           Taba - ${hotelTaba}`);
    }
    else { alert(`Извините нет столько мест, есть ${hotelSharm} свободных мест`) };
    break;
  case '2': member = prompt(`Введите число учасников группы: Hurgada. Сейчас свободно ${hotelHurgada}`, 1);
    if (Number.isInteger(member) !== true && member < 0) { alert('Ошибка ввода!'); }
    else if (member < hotelHurgada) {
      alert("Спасибо за регистрацию!"); alert(`Осталось свободных мест в группе:
          Sharm - ${hotelSharm};
          Hurgada - ${hotelHurgada - member};
          Taba - ${hotelTaba}`);
    }
    else { alert(`Извините нет столько мест, есть ${hotelHurgada} свободных мест`) };
    break;
  case '3': member = prompt(`Введите число учасников группы: Taba. Сейчас свободно ${hotelTaba}`);
    if (Number.isInteger(member) !== true && member < 0) { alert('Ошибка ввода!'); }
    else if (member < hotelTaba) {
      alert("Спасибо за регистрацию!"); alert(`Осталось свободных мест в группе:
          Sharm - ${hotelSharm};
          Hurgada - ${hotelHurgada};
          Taba - ${hotelTaba - member}`);
    }
    else { alert(`Извините нет столько мест, есть ${hotelTaba} свободных мест`) };
    break;
  default: alert("Введите верное число!");
}