var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var value = numbers_1[_i];
    for (var index in numbers) {
        console.log(Number(index) + 1 + " * " + value + " = ");
    }
}
