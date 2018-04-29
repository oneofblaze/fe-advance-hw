<template>
  <div id="app">
	<h2>Модуль 17 - тест сборки webpack-simple-starter + VUE</h2>
	<p>Реализовать следующий функционал:</p>
	<ol>
		<li>Создать две кнопки в HTML: <b>start</b> и <b>stop</b>.</li>
		<li>Создать класс <b>Timer</b> с полями <b>startTime</b>, <b>stopTime</b> и <b>interval</b>. Создать несколько экземпляров класса с разными значениями свойств, вывести их в консоль.</li>
		<li>Для класса <b>Timer</b> создать методы <b>start</b> и <b>stop</b>, <b>getTime</b>.</li>
		<li>Создать экземпляр класса <b>Timer</b>, пусть он называется <b>stopwatch</b>.</li>
		<li>При нажатии на кнопку <b>start</b>, метод <b>stopwatch.start</b> сохраняет момент нажатия в свойство <b>startTime</b>.</li>
		<li>При нажатии на кнопку <b>stop</b>, метод <b>stopwatch.stop</b> сохраняет значение текущего момента времени в <b>stopTime</b> и записывает разницу между <b>startTime</b> и <b>stopTime</b> в <b>interval</b>. А метод <b>stopwatch.getTime</b> возвращает значение поля <b>interval</b>, которое необходимо вывести в консоль.</li>
		<li>Для класса <b>Timer</b> создать статический метод <b>timeToNY</b> который возвращает кол-во дней от сегодня и до Нового Года.</li>
	</ol>
	<div class="input-form">
        <button class="input-form__btn" id="start">Start</button>
		<button class="input-form__btn" id="stop">Stop</button>
	</div>
	<div class="result" id="timer_result"></div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss">
.input-form__btn {
  margin: 20px 20px;
}

.input-form {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;

}

.result {
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: red;
}
</style>
