// commands for starting:
//  1) tsc filename then node filename
//  2) ts-node filename

import axios from "axios";
const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(response => console.log(response.data))


// анотации и определения типов

//явная анотация или вручную
let a: number
let b: string
let c: boolean = false

a = 12
b = 'abc'
c = true // if c = 12 we will have an error

// в тайпскрипт есть автоанотация которая в большенстве случаев работае ткорректно

let name = 'Valentyn' // let name: string - автоматически
//name = [1,2,4] - Error 
let date = new Date() // let date: Date

// сложносоставная аннотация

let commandScore: number | string // теперь это тип данных union
// теперь наша переменная может быть только типа number и string

// Мы можем задавать типы  type это называется alias
// С БОЛЬШОЙ БУКВЫ !!!

type Salary = number | string

const mySalary: Salary = '300$' // const mySalary: Salary - типом есть елиас salary

// ------------- АННОТАЦИЯ НУЖНА ОБЯЗАТЕЛЬНО ------------------

// Когда возвращаемый тип является  any

let data = JSON.parse('I am a king') // let data: any
// поэтому в таких случаях всегда надо типизировать
let coolSalary: number = JSON.parse('5000')


// Когда создаем переменную но присваиваем ей значение потом

let isGood:boolean;

if (coolSalary > 2000) {
    isGood = true
} else {
    isGood = false
}


// и 3 вариант когда идет сложносоставной тип (уже выше писал про них)

