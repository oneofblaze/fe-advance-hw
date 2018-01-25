/*
Написать скрипт который на старте спрашивает пользователя какой язык он хочет использовать на тренажере.
Это обычный prompt в котором написано en-0, ru-1, ua-2.
Пользователь вводит 0, 1 или 2, если введено другое значение то вывести alert о том что был выбран не доступный язык
и повторить prompt до того момента пока не будет введено подходящее значание языка или нажат cancel.
При cancel прекратить выполнение скрипта.
Результат выбора языка пользователем записать в обьект keyboard в поле currentLang как строку, 0 это en, 1 это ru, 2 это ua.
Модифицировать функцию getRandCharInAlph() так, чтобы она возвращала случайную букву из выбраного пользователем алфавита.
*/

const keyboard = {
    layouts: { //поле layouts содержит обьекты раскладок языков, в каждом из которых по 3 массива строк клавиатуры
        en: {
            topRow: ["qwertyuiop\[\]"],
            middleRow: ["asdfghjkl\;\'"],
            bottomRow: ["zxcvbnm\,./"]
        },
        ru: {
            topRow: ["йцукенгшщзхъ"],
            middleRow: ["фывапролджэ"],
            bottomRow: ["ячсмитьбю."]
        },
        ua: {
            topRow: ["йцукенгшщзхї"],
            middleRow: ["фівапролджє"],
            bottomRow: ["ячсмитьбю."]
        }
    },
    langs: ['en', 'ru', 'ua'], //поле langs содержит массив доступных языков
    currentLang: '' // поле currentLang будет содержать язык который сейчас выбран
};

let num
while (num !== "0" && num !== "1" && num !== "2") {
    num = prompt('Выберите, пожалуйста, язык раскладки: en - 0; ru - 1; ua - 2.', 0);
    if (num == "0") {
        keyboard.currentLang = '0 это en';
    } else if (num == "1") {
        keyboard.currentLang = '1 это ru';
    } else if (num == "2") {
        keyboard.currentLang = '2 это ua';
    } else if (confirm("Ошибка ввода! Введите верный код раскладки") !== true) break;
    else continue;
}
console.log(keyboard); // Видим изменения в объекте (в ключе "currentLang:")

// Функция, которая возвращает случайную букву из выбраного пользователем алфавита.

function getRandCharInAlph() {
    let res;
    if (keyboard.currentLang == '0 это en') {
        res = keyboard.layouts.en;
    } else if (keyboard.currentLang == '1 это ru') {
        res = keyboard.layouts.ru;
    } else if (keyboard.currentLang == '2 это ua') {
        res = keyboard.layouts.ua;
    } else {
        console.log('Что-то пошло не так...')
    };

    let resRow = Object.keys(res);
    let randRow = Math.floor(Math.random() * (resRow.length));
    let randRowName = resRow[randRow];
    let arr = res[randRowName];
    let str = arr.join('');
    let randItem = Math.floor(Math.random() * (str.length));
    console.log(resRow); //отслеживаем выбор layouts 
    console.log(randRowName); //отслеживаем выбор случайной раскладки
    console.log(str); //отслеживаем выбор случайной строки
    alert('Случайный символ - \"'+str[randItem]+'\"'); //выводим случайный символ
}
getRandCharInAlph();