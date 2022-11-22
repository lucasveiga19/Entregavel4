const validarNumPrimo = require('../funcoes/NumPrimo');

test('O valor 7 e um numero primo', () => {
    expect(validarNumPrimo(7)).toMatchObject(["O numero 7 e primo"]);
});

test('O valor 19 e um numero primo', () => {
    expect(validarNumPrimo(19)).toMatchObject(["O numero 19 e primo"]);
});

test('O valor 15 nao e um numero primo', () => {
    expect(validarNumPrimo(15)).toMatchObject(["O numero 15 nao e primo"]);
});
