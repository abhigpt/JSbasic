//console.log("animal");
var animal = {"username":"horse","tagline":"Two n half","noises":[]};
var animals = [];
// console.log(animals);
// for(var i=0;i<animals.length;i++){
// 	console.log("Hi i am " + animals[i].username);
// 	console.log("I like to say " + animals[i].tagline);
// }
var  count = 0;
for(var key in animal){
	count++;
	if(key == 'username'){
		console.log("Hi i am " + animal[key]);
	}
}
console.log(count);
var noiseArray = [];
noiseArray.push("Roar");
noiseArray.push("Meiw");
noiseArray[2] = "HAHA";
for(var i=0;i<noiseArray.length;i++){
	animal.noises.push(noiseArray[i]);

}

//animal.noises.push(noiseArray);
console.log(animal);
animals.push(animal);
var quakers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] };
animals.push(quakers);
console.log(animals);
var dog = {"username":"tommy","tagline":"bark-u","noises":['bark','whistle']};
animals.push(dog);
console.log(animals);
var hen = {"username":"murgi","tagline":"kukudo-ku","noises":['kuku','whistle','screetch']};
animals.push(hen);
console.log(animals.length);
var sum = function(a,b){
	console.log(arguments);  //arguments is a keyword that returns an array , //arguments = [2,3] , // arguments[0] =2 arguments[1] =3
	return a+b;
}
sum(2,3);
var summore = function(a,b){
	var res = 0;
	for(var i=0;i<arguments.length;i++){
		res = res + arguments[i];
	}
	return res;
}
var result = summore(2,3,4,5,6);
console.log(result);                 //returns 2+3+4+5+6
// animal.username = "horse";
// console.log(animal.username);
// animal["tagline"] = "HMMMMMMM";
// console.log(animal["tagline"]);


//using constructor function  that returns an object(creating newanimals without using the new keyword)

function animalMaker(name){
	return {
		speak : function(){
			console.log("my name is " + name);
		},
		name : name
	}
}
var anotherAnimal = animalMaker("Cheetah");
anotherAnimal.speak();    // prints my name is cheetah

var animalNames = ["goat","elephant","lion"];
var farm = [];
for(var i =0 ;i<animalNames.length;i++){
	var animalnew = animalMaker(animalNames[i]);
	farm.push(animalnew);
}
console.log(farm);

var friendList = [];
var friends = [];
for(var i=0;i<2;i++){
	var username = animals[i].username;
	friends.push(username);
}
console.log(friends);
var relationships = {};
var matches = [];
relationships.friends = friends;
//relationships.matches = matches;
matches.push(relationships.friends[0]);     //add one element to matches array
relationships.matches = matches; 
console.log(relationships);
for(var i=0;i<animals.length;i++){
	animals[i].relationships = relationships;
}
console.log(animals);


//functions

var AnimalTestUser = function(username){
	var args = arguments.length;
	if(args>1){
		var otherArgs = [];
		for(var i=1;i<arguments.length;i++){
				otherArgs.push(arguments[i]);
		}
	}
	return {
		username : username,
		otherArgs : otherArgs
	}
}
var testSheep = AnimalTestUser('CottonBall',{'loves dancing': true}, [1,2,3] );
console.log(testSheep);

var AnimalCreator = function(username,species,tagline,noises){
	return {
		username : username,
		species : species,
		tagline : tagline,
		noises : noises,
		friends : []
	}
}
var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
console.log(sheep);
var cow = AnimalCreator('mycow', 'cow', 'You can take milk!', ['baah', 'arrg', 'maaahhhhh']);
function addFriend(animal,friend){
	animal.friends.push(friend.username);
}
addFriend(sheep,cow);
console.log(sheep);

var myfarm = [sheep,cow];
addFriend(cow,sheep);
addFriend(sheep,cow);

console.log(myfarm);

var close = function(){
	var x = "hello";
	function innerclose(){
		console.log("#####################");
		console.log(x);
	}
	setTimeout(innerclose,1000);
}


//Example of callback in javascript

var increase = function(num){
	return num+1;
}

var square = function(num){
	return num*num ;
}

var doSomething = function(num,callback){
	return callback(num);
}

var res1 = doSomething(5,square);
var res2 = doSomething(5,increase);
console.log(res1);
console.log(res2);


//callback exercises

var funcCaller = function(arg,callback){
	return callback(arg);
}

var firstVal = function(arr,callback){
	callback(arr[0],0,arr);
}