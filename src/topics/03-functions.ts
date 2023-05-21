function addNumbers(a: number, b: number) {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

// @ts-ignore
function multiply(firstNumber: number, secondNumber?: number, base: number = 2): number {
    return firstNumber * base
}

const result: number = addNumbers(2, 3);
const resultArrow = addNumbersArrow(3, 5);

interface Character {
    name: string;
    hp: number;
    showHp: () => string
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 75,
    showHp() {
        console.log(`Heal points [${this.hp}]`)
    }
}


healCharacter(strider, 10)
strider.showHp();
healCharacter(strider, 30)
strider.showHp();
//
// console.log({result})
// console.log({resultArrow})
//
