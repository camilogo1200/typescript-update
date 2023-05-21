import {Product, taxCalculation, TaxCalculationOptions} from './06-function-destructuring'

const shoppingCart: Product[] = [
    {
        description: 'Iphone 15',
        price: 6500000
    },
    {
        description: 'Samsung S24',
        price: 5500000
    },
];

const options: TaxCalculationOptions = {
    tax: 0.15,
    products: shoppingCart
};

const [total, tax] = taxCalculation(options);

console.log('Total', total);
console.log('Taxes', tax);



