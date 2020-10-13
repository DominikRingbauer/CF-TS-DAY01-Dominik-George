"use strict";

let firstName : string = "Dominik";
let lastName : string = "Ringbauer";

document.getElementById("name").innerHTML = firstName + " " + lastName;

let fullName = [firstName, lastName];

//you can't solve Ex2 with forEach
/*let myName = ["Dominik", "Dominik", "Dominik", "Dominik", "Dominik", "Dominik", "Dominik", "Dominik", "Dominik", "Dominik"]

myName.forEach(name => document.getElementById("result").innerHTML += name + "<br>");*/

let obj = {
	lastName: "Ringbauer",
	printLastName : function(){
		setTimeout(function(){
			for (let i = 0; i < 10; i++){
				console.log(lastName);
			}
		}, 5000);
	}
};
obj.printLastName();


