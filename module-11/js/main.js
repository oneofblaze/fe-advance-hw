/*Написать приложение для работы с REST сервисом http://fecore.net.ua/rest/, 
реализовать следующий функционал:
- функция getUsers должна получать текущий список всех пользователей в БД.
- функция addUser должна записывать в БД юзера с полями name и score.
- функция removeUser должна удалять из БД юзера по id.
- функция updateUser должна обновлять данные пользователя по id.
Сделать минимальный графический интерфейс в виде панели с полями и кнопками, 
а так же панелью для вывода результатов операций с REST сервисом.
Внимание: при попытке запроса по HTTPS протоколу будет ошибка (CORS).
API имеет слудующий функционал:
http://fecore.net.ua/rest/?action=3&id=1 - удаление
http://fecore.net.ua/rest/?action=2&id=1&name=Hey1&score=13 - изменение
http://fecore.net.ua/rest/?action=1&name=Mark&score=100 - добавление
http://fecore.net.ua/rest/?action=4 - описание доступного функционала*/


let inputsId = document.querySelector(".inputs__id") //Поле для ввода id 
let inputsName = document.querySelector(".inputs__name") //Поле для ввода name
let inputsScore = document.querySelector(".inputs__score") //Поле для ввода score

let outerdataBaseList = document.querySelector(".dataBaseList") //Поле вывода Базы Данных на страницу
let result = document.querySelector(".resultClick");

const dataBaseButton = document.querySelector(".dataBaseListButton")
dataBaseButton.addEventListener("click", function getUsers() {
	fetch("http://fecore.net.ua/rest/")
		.then(res => res.json())
		.then(res => {
			console.log(res)
			let counter = 0;
			for (key in res) {
				var link = JSON.stringify(res[key]);
				counter++;
				outerdataBaseList.innerHTML += `<div>${counter}. ${link}</div>`;
			}
		})
});

const addUserButton = document.querySelector(".addButton")
addUserButton.addEventListener('click', function addUser(name, score) {
	fetch(`http://fecore.net.ua/rest/?action=1&name=${inputsName.value}&score=${inputsScore.value}`)
		.then(res => res.json())
		.then(res => {
			console.log();
			// result.innerHTML = `<div>User:${inputsName.value} успешно добавлен!<div>`;
		});
	location.reload();
});

const removeUserButton = document.querySelector(".removeButton")
removeUserButton.addEventListener("click", function removeUser(id) {
	fetch(`http://fecore.net.ua/rest/?action=3&id=${inputsId.value}`)
		.then(res => res.json())
		.then(res => {
			console.log();
			// result.innerHTML = `<div>User:${inputsName.value} успешно удален!<div>`;
		});
	location.reload();
});

const updateButton = document.querySelector(".updateButton")
updateButton.addEventListener("click", function updateUser(id, name, score) {
	fetch(`http://fecore.net.ua/rest/?action=2&id=${inputsId.value}&name=${inputsName.value}&score=${inputsScore.value}`)
		.then(res => res.json())
		.then(res => {
			console.log();
			// result.innerHTML = `<div>User:${inputsName.value} успешно изменен!<div>`;
		});
	location.reload();
});