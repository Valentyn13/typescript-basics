// Objects


// ручное описание
const obj: {
    a: number,
    b: boolean,
    c: string,
    d: boolean,
} =  {a: 2, b: false, c: 'abc', d: false}


// автоописание
const obj2 = {
    a: 14,
    b: false,
    c: 'string',
    d: true
}

// псевдонимы  type

type MyObj = {
    a: number;
    b: boolean;
    c: string;
    d: boolean;
}

const obj3: MyObj =  {
    a: 14,
    b: false,
    c: 'string',
    d: true
}

// interface
// interface INameOfinterface - всегда добавлять I  перед назвзанием интерфейса

// c? => это значит что ключ не льязателен
// readonly => ключ только для чтения и мu не можем его перезаписать
interface IMyObject {
    readonly a: number;
    b: boolean;
    c: string;
    //[key: string]: string;
}

const interfaceObj: IMyObject = {
    a: 14,
    b: false,
    c: 'string',
}



// обьединение интерфейсов

interface IPerson {
    name:string;
}
interface IPerson {
    age: number;
}

const human: IPerson = {
    name:'Valentyn',
    age: 18
} 

// обьединение разных интерфейсов через extends

interface IAccount {
    email:string;
    login:string;
    status:boolean;
}

interface IDeveloper extends IAccount {
    skills:string[];
    level:string;
}

const developer: IDeveloper = {
    email:'email',
    login:'1234',
    status:true,
    skills: ['develop', 'merge', 'bug fix'],
    level:'3'
}

//

type Type1 = {
    type_1: string
}

type Type2 = {
    type_2: string
}

type Type3 = {
    type_3: string
}


type AllTypes = Type1 & Type2 & Type3
