/*
Используя даную строку с полным алфавитом, программно составить массив keyboard содержащий 3 других массива с буквами алфавита, идентичные строкам на клавиатуре.
Массив keyboard будет иметь такую струтуру: [ [первая строка клавиатуры], [вторая строка клавиатуры], [третья строка клавиатуры] ].
const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
Используя готовый массив клавиатурных строк, обращаясь к элементам массива по индексам, записать в переменные слова и вывести их в консоль:
- hello
- javascript
- trainer
*/

const alphabet = "qwertyuiop\[\]asdfghjkl\;'zxcvbnm\,./";
console.log(alphabet);
var keyboard1 = alphabet.slice(0, 12).split("");
// console.log(keyboard1);
var keyboard2 = alphabet.slice(12, 23).split("");
// console.log(keyboard2);
var keyboard3 = alphabet.slice(23, 33).split("");
// console.log(keyboard3);
var keyboard  = [keyboard1, keyboard2, keyboard3]
console.log(keyboard);

for(var i = 0; i < keyboard.length; i++){
    for(var j = 0; j < keyboard[i].length; j++){
        console.log("line-" + i + " symbol-" + j + " содержит: "+ keyboard[i][j]);
    }
}

console.log(`${keyboard[1][5]}${keyboard[0][2]}${keyboard[1][8]}${keyboard[1][8]}${keyboard[0][8]}`);
console.log(`${keyboard[1][6]}${keyboard[1][0]}${keyboard[2][3]}${keyboard[1][0]}${keyboard[1][1]}${keyboard[2][2]}${keyboard[0][3]}${keyboard[0][7]}${keyboard[0][9]}${keyboard[0][4]}`);
console.log(`${keyboard[0][4]}${keyboard[0][3]}${keyboard[1][0]}${keyboard[0][7]}${keyboard[2][5]}${keyboard[0][2]}${keyboard[0][3]}`);



