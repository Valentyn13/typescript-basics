// Generics

const valueFactory = (x:number): number => x

const myValue = valueFactory(11)//  значение сохранится в переменной


//фабрика типов
type TypeFactory<X> =X;
type Mytype = TypeFactory<string>
type Mytype2 = TypeFactory<number>


interface IValueContainer<Value> {
    value:Value;
}

type StringContainer = IValueContainer<string>

const x:StringContainer = {
    value:'abc'
}

// Классы
class ArrayOfNumbers {
    constructor(public collection:number[]) {}

    get(index: number):number {
        return this.collection[index];
    }    
}



class ArrayOfString  {
    constructor(public collection:string[]) {}
    get(index:number):string {
        return this.collection[index]
    }
}

// универсальный клас с параметром в который передается тип
//принято параметр обозначать буквой T
// параметров через запятую может быть сколько угодно

class ArrayOfAnything<T> {
    constructor(public collection:T[]) {}
    
    get(index:number): T {
        return this.collection[index]
    }
}


new ArrayOfAnything<number>([1,24,5,55,654,6,54])



//Функции

function printSring(arr:string[]):void {
    for(const el of arr) {
        console.log(el)
    }
}

function printNumber (arr:number[]):void {
    for(const el in arr) {
        console.log(arr[el])
    }
}


function printAnything<T> (arr:T[]):void {
    for(const el of arr) {
        console.log(arr)
    }
}

printAnything<number>([1,2,4,55])


// !!!
function fillArray<T>(len:number, elem:T): T[] {
    return new Array<T>(len).fill(elem)
}

const arr1 = fillArray<string>(10,'aboba')

//Сложный пример

interface IArray<T> {
    concat(...items: Array<T[] | T>): T[];
    reduce<U>(
        callback: (state:U, element: T, index: number, array: T[]) => U,
        firstState?:U
    ): U
}


//Уточнение параметра типа

interface ILenghtwise {
    length:number
}
function printLength<T extends ILenghtwise>(arg: T,):number {
    return arg.length
}

printLength('abc')
printLength([])
printLength([1,2,45,55])
printLength({length:15, rows:10, colums:5, status:false})
//но с числом работать не будет потому что нет свойства длинны
//printLength(null)
//printLength(undefined)

// keyof обеспечивает то что вторым параметром может быть только ключ из обьекта Т
function getProperty<T,K extends keyof T> (obj: T, key: K) {
 return obj[key]
}

const myObj = {
    a:1,
    b:2,
    c:3
}
// K === 'a' | 'b' | 'c'
getProperty(myObj, 'a')
