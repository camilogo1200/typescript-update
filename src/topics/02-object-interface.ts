let skills: string[] = ['Bash', 'Counter', 'Healing'];
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown: string;
}

const strider: Character = {
    name: "camilo",
    hometown: "Bta",
    hp: 100,
    skills: ['Healing']
}

console.log(strider);
console.table(strider);

export {};