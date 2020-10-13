let names = ["Alex", "Ben", "Tom", "Werner"];

for (let index in names){
	document.getElementById("index").innerHTML += index + " ";
};

for (var value of names){
	document.getElementById("values").innerHTML += value + " ";
}

for ( let both in names ) {
 	document.getElementById("both").innerHTML += names[both] + " " + both + " ";
}
