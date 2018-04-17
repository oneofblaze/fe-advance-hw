/*Описание задачи в index.html*/

class Shape {
	constructor(color, initX, initY) {
		this.color = color;
		this.initX = initX;
		this.initY = initY;
	};
	getColor() {
		return this.color;
	};
	setColor(val) {
		this.color = val;
	};
	getCoords() {
		return [this.initX, this.initY];
	};
	moveTo(newX, newY) {
		this.initX = newX;
		this.initY = newY;
	};
}
