var names = ["Alex", "Ben", "Tom", "Werner"];
for (var index in names) {
    document.getElementById("index").innerHTML += index + " ";
}
;
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var value = names_1[_i];
    document.getElementById("values").innerHTML += value + " ";
}
for (var both in names) {
    document.getElementById("both").innerHTML += names[both] + " " + both + " ";
}
