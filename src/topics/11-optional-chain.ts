export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Cristhian Gómez ',
}

const passenger2: Passenger = {
    name: 'Camilo N ',
    children: ['Liam', 'Claire']
}

console.log(passenger1)
console.log(passenger2)


const printChildren = (passenger: Passenger) => {
    const childrens = passenger.children?.length || 0;
    console.log(`${passenger.name} ${childrens}`)
}

printChildren(passenger2);
printChildren(passenger1);