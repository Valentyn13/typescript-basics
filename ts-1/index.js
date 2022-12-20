"use strict";
// commands for starting:
//  1) tsc filename then node filename
//  2) ts-node filename
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) { return console.log(response.data); });
// анотации и определения типов
//явная анотация или вручную
var a;
var b;
var c = false;
a = 12;
b = 'abc';
c = true; // if c = 12 we will have an error
// в тайпскрипт есть автоанотация которая в большенстве случаев работае ткорректно
var name = 'Valentyn'; // let name: string - автоматически
//name = [1,2,4] - Error 
var date = new Date(); // let date: Date
// сложносоставная аннотация
var commandScore; // теперь это тип данных union
var mySalary = '300$'; // const mySalary: Salary - типом есть елиас salary
// ------------- АННОТАЦИЯ НУЖНА ОБЯЗАТЕЛЬНО ------------------
// Когда возвращаемый тип является  any
var data = JSON.parse('I am a king'); // let data: any
// поэтому в таких случаях всегда надо типизировать
var coolSalary = JSON.parse('5000');
// Когда создаем переменную но присваиваем ей значение потом
var isGood;
if (coolSalary > 2000) {
    isGood = true;
}
else {
    isGood = false;
}
// и 3 вариант когда идет сложносоставной тип (уже выше писал про них)
