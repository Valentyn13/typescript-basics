// ---------- списки (все елменты одного типа, количество елементов не ограничено)
const arr: string[] = ['a','b','c']
arr.push('d') 
//arr.push(2) // Error

// здесь тайпскрипт сам описывает масив
const arr2 = [1,3,4] // const arr2: number[]

const arr3: Array<number> = [] // const arr3: number[] просто запись по другому

// вложеные массивы
const arr4: string[][] = [['give me a job pls']];
arr4.push(['1','hello','1488'])

// вложенные масивы с type
type ArrType = boolean | number

const typedArr: (string | boolean)[] = [true,false, '1488']
const typedArr2: ArrType[] = [1,2,false]

// ---------- кортежи (tuple) - фиксированое количество елементов разных типов

const tuple1: [string,number,boolean] = ['string',13,false]

// вложеные кортежы

type CortegeExample = [string,string,number,boolean]

const example: CortegeExample[] = [['123','str',42,false],['3','number',666,true]]

const example2: CortegeExample =  ['abc','a', 55, false]


//Извлечение елементов

const arrExample = [1,23,4,44]

const el0 = arrExample[0]
let elLast = arrExample.pop()

arrExample.push(23) // Correct!
//arrExample.push('string')



