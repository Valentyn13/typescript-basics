// Functions
// для функций в тайпскрипт надо указывать тип входящих аргументов и тип возвращаемого аргумента

const fn1 = (num: number): string => {
    return String(num)
}

// функция с коллбеком
function fn2 (callback: () => string) {

}


// описание функции с коллбеком, также можна ставить не обязательные параметры в фунциях
type Callback = (num:number) => string

function fn3 (callback?: Callback) {
    if (callback === undefined) {
        callback = String
    }
    callback(12)
}


//  Параметры по умолчанию

function createPoint (x: number = 0,y: number = 0): [number, number] {
    return [x,y]
}

createPoint(42)

// рест параметр

function rest (...numbers: number[]): string {
    return numbers.join('-')
}

interface IToPrintObj {
    label:string;
}
// ели в функции нету return или явно возвращается undefined
// то в возвращаемом значении функции пишем void
function printObject (obj: IToPrintObj): void {
    console.dir(obj.label)
}

const drink = {
    label:'cola',
    price: 13,
}

printObject(drink)// все окей даже не смотря на то что есть лишнее поле в drink
// здесь главное чтобы было поле описаное в интерфейсе а на остальное пох
//  !!!!!!!!!!!!
//printObject({label:'pepsi', price:100}) но когдапараметр идет не через переменную то у нас будет ошибка


// Перегрузка функций

// при перегрузке количество аргументов не должно менятся
// проверок тоже должо быть столько сколько и вариантов событий (перегрузок)

function pickCard(x:{suit:string; card:number}[]):number;
function pickCard (x: number): {suit:string; card:number};
function pickCard (x):any {
    if ( typeof x === 'object') {
        console.log(' case number 1: x = [{suit: some suit, card: some number}]')
        return 200
    }
    if (typeof x === 'number') {
        console.log('case number 2: x = some number')
        return {suit:'23423', card:12}
    }
}
pickCard(42)
pickCard([{suit:'abc', card:232}])



