"use strict";
var firstName = "Dominik";
var lastName = "Ringbauer";
document.getElementById("name").innerHTML = firstName + " " + lastName;
var fullName = [firstName, lastName];
//you can't solve Ex2 with forEach
/*let myName = ["Dominik", "Dominik", "Dominik", "Dominik", "Dominik", "Dominik", "Dominik", "Dominik", "Dominik", "Dominik"]

myName.forEach(name => document.getElementById("result").innerHTML += name + "<br>");*/
var obj = {
    lastName: "Ringbauer",
    printLastName: function () {
        setTimeout(function () {
            for (var i = 0; i < 10; i++) {
                console.log(lastName);
            }
        }, 5000);
    }
};
obj.printLastName();
