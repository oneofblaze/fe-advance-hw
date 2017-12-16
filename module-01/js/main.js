// Создать три const - строки, содержащие символы клавиатуры верхнего, среднего и нижнего ряда английского языка. Например для верхнего ряда русской раскладки строка будет выглядеть 'йцукенгшщзхъ'.
const messageUpper = 'qwertyuiop[]'; // верхний ряд
const messageMidle = `asdfghjkl;'`; // средний ряд
const messageLow = `zxcvbnm,./`; // нижний ряд
// Создать три const переменные с числом, содержащим длинну строк, полученных ранее.
const messageUpperLong = messageUpper.length; // 12
const messageMidleLong = messageMidle.length; // 11
const messageLowLong = messageLow.length; // 10

// Используя charAt, для каждой строки получить первый и последний символ для каждой из трех строк, используйте имеющиеся константы.
console.log(messageUpper.charAt(0)); // "q"
console.log(messageUpper.charAt(messageUpperLong - 1)); // "]"
console.log(messageMidle.charAt(0)); // "a"
console.log(messageMidle.charAt(messageMidleLong - 1)); // "'"
console.log(messageLow.charAt(0)); // "z"
console.log(messageLow.charAt(messageLowLong - 1)); // "/"

// Сделайте поиск позиции для символов [ и ] с помощью indexOf и сохраните результат в переменных.
console.log(messageUpper.indexOf('[')); // позиция 11
console.log(messageUpper.indexOf(']')); // позиция 12

// Используя многострочную шаблонную строку, вывести названия всех переменных и полученные значения за один console.log.
const allMessage = `Первая строка: ${messageUpper}, Вторая строка: ${messageMidle}, Третья строка: ${messageLow}, длина первой: ${messageUpperLong}, длина второй: ${messageMidleLong}, длина третьей: ${messageLowLong}, первые и последние символы из строк: ${messageUpper.charAt(0)}, ${messageUpper.charAt(messageUpperLong - 1)}, ${messageMidle.charAt(0)}, ${messageMidle.charAt(messageMidleLong - 1)}, ${messageLow.charAt(0)}, ${messageLow.charAt(messageLowLong - 1)}, позиции для символов "[" и "]": ${messageUpper.indexOf('[')}, ${messageUpper.indexOf(']')} соответственно.`;
console.log(allMessage);