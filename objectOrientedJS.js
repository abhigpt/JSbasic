function carMaker(name,cost){
	this.name = name,
	this.cost = cost
}
carMaker.prototype.color = "RED";
var car1 = new carMaker("Ferrari",20000000);
var car2 = new carMaker("Ford",4000000);
console.log(car1);
console.log(car2);
console.log(car1.color);      //outputs RED
// car1.color = "blue";
// console.log(car1);

carMaker.prototype.speed = function(distance,time){
	return distance/time;
}

var sp = car1.speed(10,2);
car1.speed = sp;
console.log(car1);