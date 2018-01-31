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
    setCharCount() {
        let num
        while (this.checkPositiveInteger(num) === false) {
            num = +prompt('Введите количество символов для тренажера:', 1);
        }
        return this.charCount = num;
    },
    checkPositiveInteger(x) {
        return (Number.isInteger(x) && x > 0);
    },
    task: [],
    createTask() {
        let array = [];
        let str = this.chars;
        for (let i = 0; i < this.charCount; i++) {
            var rand = Math.floor(Math.random() * str.length);
            array.push(str[rand]);
        }
        return this.task = array;
    },
    startTask() {
        let value = prompt(`Введите, пожалуйста, следующие символы: "${this.task}" в строке ниже`, "");
        this.userInput = value.split('');
        let arr1 = this.task;
        let arr2 = this.userInput;
        let ln1 = this.task.length;
        let ln2 = this.userInput.length;
        let err = 0
        for (let i = 0; i < ln1; i++) {
            for (let j = 0; j < ln2; j++) {
                if (arr1[i] === arr2[j]) {
                    i = i + 1;
                } else {
                    i = i + 1;
                    err = err + 1;
                }
            }
        }
        return this.userErrors = err;
    },
    userInput: [],
    userErrors: '',
};
console.log(keyTrainer);


function run() {
    keyTrainer.setCharCount();
    keyTrainer.checkPositiveInteger();
    keyTrainer.createTask();
    keyTrainer.startTask();
    if (keyTrainer.userErrors === 0) {
        console.log('Поздравляем! Вы успешно повторили набор текста!');
    } else {
        console.log(`Пользователь, при наборе вы совершили ${keyTrainer.userErrors} ошибок.\
        Желаем удачи при следующей попытке!`)
    }
}
run();

// setCharCount() {
//     let num;
//     while ((Number.isInteger(num) !== true) && (isFinite(num) !== true) || (num <= 0)) {
//         num = prompt('Введите количество символов для тренажера:', 1);
//     }
//     return keyTrainer.charCount = num;
// },