/*
1. Создайте объект keyTrainer, содержащий свойство chars, значением которого будет массив
символов алфавита.
chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h',
'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
2. Добавьте свойство charCount и метод setCharCount. Метод делает запрос через prompt о
количестве символов, которые пользователь должен будет набрать.
3. Добавьте метод checkPositiveInteger, который проверяет является ли число целым положительным
числом. Используйете метод checkPositiveInteger в методе setCharCount для проверки
корректности ввода пользователем. Если ввод неверный, используйте цикл while для того
чтобы запрашивать у пользователя верное число (целое положительное).
4. Создайте свойство task и метод createTask, который создает массив длинной в charCount
и заполняет его случайными буквами из массива chars.
5. Создайте метод startTask, который с помощью prompt выводит строку из массива task и
просит набрать эту строку в этом же prompt сообщении.
6. Результат, полученный методом startTask запишите в свойство userInput и затем сравните
строки userInput и task посимвольно. Если симовол не совпадает, то запишите количество
ошибок в свойство userErrors.
7. Выведите в консоль userErrors: eсли количество ошибок 0, то поздравьте, если отлично
от ноля - напишите количество ошибок и пожелание успехов в следующем упражнении.
*/

const keyTrainer = {
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    charCount: '',
    setCharCount: {},
    checkPositiveInteger: {},
    checkPositiveInteger: {},
    task: '',
    createTask: {},
    startTask: {},
    userInput: '',
    userErrors: '',
};


// let num
// while (num !== "0" && num !== "1" && num !== "2") {
//     num = prompt('Выберите, пожалуйста, язык раскладки: en - 0; ru - 1; ua - 2.', 0);
//     if (num == "0") {
//         keyboard.currentLang = '0 это en';
//     } else if (num == "1") {
//         keyboard.currentLang = '1 это ru';
//     } else if (num == "2") {
//         keyboard.currentLang = '2 это ua';
//     } else if (confirm("Ошибка ввода! Введите верный код раскладки") !== true) break;
//     else continue;
// }
// console.log(keyboard);



function run() {
    // let res;
    // if (keyboard.currentLang == '0 это en') {
    //     res = keyboard.layouts.en;
    // } else if (keyboard.currentLang == '1 это ru') {
    //     res = keyboard.layouts.ru;
    // } else if (keyboard.currentLang == '2 это ua') {
    //     res = keyboard.layouts.ua;
    // } else {
    //     console.log('Что-то пошло не так...')
    // };

    // let resRow = Object.keys(res);
    // let randRow = Math.floor(Math.random() * (resRow.length));
    // let randRowName = resRow[randRow];
    // let arr = res[randRowName];
    // let str = arr.join('');
    // let randItem = Math.floor(Math.random() * (str.length));
    // console.log(resRow); //отслеживаем выбор layouts 
    // console.log(randRowName); //отслеживаем выбор случайной раскладки
    // console.log(str); //отслеживаем выбор случайной строки
    // alert('Случайный символ - \"' + str[randItem] + '\"'); //выводим случайный символ
}
getRandCharInAlph();