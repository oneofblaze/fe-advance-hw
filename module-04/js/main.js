/*
Используя логику создания массива клавиатурных строк, создать функцию addKeyboardLayout(alphabet)
которая на входе получает строку-алфавит и возвращает массив-массивов клавиатурных строк.
Создать функцию getRandCharInRow(row) которая получает номер строки клавиатуры и возвращает
случайную букву из этой строки.
Создать функцию getRandCharInAlph() которая возвращает случайную букву из всего алфавита.
*/

const alphabet = "qwertyuiop\[\]asdfghjkl\;'zxcvbnm\,./";
console.log(alphabet); 

function addKeyboardLayout(alphabet) {
    let keyboard = [alphabet.slice(0, 12).split(""), alphabet.slice(12, 23).split(""), alphabet.slice(23, 33).split("")];
    return keyboard;
}
console.log(addKeyboardLayout(alphabet));

// Функция, которая получает номер строки клавиатуры и возвращает случайную букву из этой строки.
function getRandCharInRow(row) {
    let keyboard = [alphabet.slice(0, 12).split(""), alphabet.slice(12, 23).split(""), alphabet.slice(23, 33).split("")];
    if (Number.isInteger(row) !== true || row < 0 || row > keyboard.length) { return console.log('Ошибка ввода!'); }
    else {
        var rand = Math.floor(Math.random() * keyboard[row].length);
        return keyboard[row][rand];
    }

}
console.log(getRandCharInRow(1));

// Функция, которая возвращает случайную букву из всего алфавита.
function getRandCharInAlph() {
    let keyboard = [alphabet.slice(0, 12).split(""), alphabet.slice(12, 23).split(""), alphabet.slice(23, 33).split("")];
    var randRow = Math.floor(Math.random() * keyboard.length);
    var randItem = Math.floor(Math.random() * keyboard[randRow].length);
    return keyboard[randRow][randItem];
}
console.log(getRandCharInAlph());

