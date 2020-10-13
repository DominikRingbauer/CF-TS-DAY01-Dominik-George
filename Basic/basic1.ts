let numbers : number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let value of numbers){
	for(let index in numbers){
		console.log(`${Number(index) + 1} * ${value}`);
	}
}