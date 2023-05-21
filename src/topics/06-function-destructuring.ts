export interface Product {
    description: string;
    price: number;

}

// const phone: Product = {
//     description: 'Samsung S10',
//     price: 5500000
// }
//
// const tablet: Product = {
//     description: 'Samsung S8',
//     price: 4500000
// }
//
// const shoppingCart = [phone, tablet];
// const tax = 0.19;

export interface TaxCalculationOptions {
    tax: number,
    products: Product[]
}

export function taxCalculation({tax, products}: TaxCalculationOptions): [number, number] {
    let total = 0;

    products.forEach(({price}) => {
        total += price;
    })
    return [total, total * tax];
}

//
// const [total, taxes] = taxCalculation({
//     products: shoppingCart,
//     tax: tax
// })
//
//
// console.log('Total', total);
// console.log('Taxes', taxes);
export {};