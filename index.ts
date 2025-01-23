const anExampleVariable: string = "Hello World"
anExampleVariable = 44;

let list: number[] = [1, 2, 'fsd'];
let list1: Array<number> = [1, 2, 3];

let listTuple: [number, number, string] = [1, 2, 'fsd'];
let listTuple2: [string, number] = [1, 2, 'fsd'];


let listAny: [any, any, any] = [1, 2, 'fsd'];
let listAny2: Array<any> = [1, 2, 'fsd'];

enum Directions {
    Up,
    Down,
    Left,
    Right = 7
};

Directions.Up;
Directions[0]

const msg = 'hello';
const error = (msg: string): never => {
    throw new Error(msg)
};

const infiniteLoop = (): never => {
    while (true) {

    }
};

const create = (o: object | null): void => { };

create(42);
create({a: 42});

type Name = string;
let id: Name;

id="42";
id=10;

const createPassword = (name: string = 'Max', age?: number | string) => `${name}${age}`;
createPassword('Jack', '31');

const createSkills = (name: string, ...skills: Array<string>) => {
    `${name}, my skills are ${skills.join()}`;
}


createSkills('Jack', 'JS', 'ES6', 'React');


type Person = {name: string, age: number, nickName?: string, getPass?: () => string};

let user: Person = {
    name: 'Andrey',
    age: 30,
    nickName: 'Annie',
};

user = 'test';

class User1 {

    public name: string;
    protected age: number;
    private nickName: string;
    readonly pass: number;

    constructor(name: string, age: number, nickName: string, pass: number) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }

}
const yauhen1 = new User1('Yauhen', 31, 'wepDev', 123);

class User2 {

    constructor(
        public name: string,
        public age: number,
        public nickName: string,
        public pass: number,
    ) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }

}

const yauhen = new User2('Yauhen', 31, 'wepDev', 123);

yauhen.name;
yauhen.age;
yauhen.nickName;
yauhen.pass;
