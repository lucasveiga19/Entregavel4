const validarNumPrimo = require('../funcoes/NumPrimo');

test('O valor 7 e um numero primo', () => {
    expert(validarNumPrimo(7)).toMatchObjetct(["O numero 7 e primo"]);
});

test('O valor 19 e um numero primo', () => {
    expert(validarNumPrimo(19)).toMatchObjetct(["O numero 19 e primo"]);
});

test('O valor 15 nao e um numero primo', () => {
    expert(validarNumPrimo(15)).toMatchObjetct(["O numero 15 nao e primo"]);
});
