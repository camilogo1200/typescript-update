export class Person {
    // public name: string;
    // public address: string

    constructor(
        public name: string,
        private address: string
    ) {
        this.name = name;
        this.address = address;
    }
}


// export class Hero extends Person {
//
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ) {
//         super(realName, 'Bogota, Colombia');
//     }
// }

export class Hero {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
    }
}


const person: Person = new Person('Tony Stark', 'Bogota, Colombia')

const ironman = new Hero('IronMan', 35, 'Tony Stark', person);

console.log(ironman);
