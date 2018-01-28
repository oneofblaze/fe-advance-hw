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
    setCharCount: function() {
        while (keyTrainer.checkPositiveInteger() !== true);
        let num = prompt('Введите количество символов для тренажера:', 1);
        return keyTrainer.charCount = num;
    },
    checkPositiveInteger: function(num) {
        return (num ^ 0) === num;
    },
    task: '',
    createTask: function() {
        array = [];
        for (var i = 0; i < keyTrainer.charCount; i++) {
            var rand = Math.floor(Math.random() * keyTrainer.chars.length);
        }
        return keyTrainer.task = array.push(keyTrainer.chars[rand]);
    },
    startTask: function(){
        var value = prompt(`Введите, пожалуйста, следующие символы: ${keyTrainer.task} в строке ниже`, "");
        var ln1 = task.length
        var ln2 = array2.length;
        var err = 0
        for (var i = 0; i < ln1; ++i) {
            cache = task[i];
            for (var j = 0; j < ln2; ++j) {
                if (cache !== array2[j]) {
                    err = err + 1;
                }
            }
        }
        keyTrainer.userErrors = err;
        return keyTrainer.userInput = value.split('');

    },
    userInput: '',
    userErrors: '',
};

console.log(keyTrainer);
console.log(keyTrainer.checkPositiveInteger(5));
console.log(keyTrainer.createTask());

function run() {
    keyTrainer.setCharCount();
    keyTrainer.checkPositiveInteger();
    keyTrainer.createTask();
    keyTrainer.startTask();
    if (keyTrainer.userErrors === 0) {
        console.log('Поздравляем! Вы успешно посвторили набор текста!');
    } else {
        console.log(`Пользователь, при наборе вы совершили ${keyTrainer.userErrors} ошибок.\
        Желаем удачи при следующей попытке!`)
    }
}
run();