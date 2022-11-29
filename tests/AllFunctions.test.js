const contagem = require('../funcoes/Contagem');
const fibonacci = require('../funcoes/Fibonacci');
const maxDivisorComum = require('../funcoes/MaxDivisorComum');
const validarNumPrimo = require('../funcoes/NumPrimo');
const quickSort = require('../funcoes/Ordenacao');
const somatorio = require('../funcoes/Somatorio');

test('A contagem de positivos dos valores -10,10 e 9', () => {
    expect(contagem(-10,10)).toBe(9);
});

test('A contagem de positivos dos valores -3,5 e 4', () => {
    expect(contagem(-3,5)).toBe(4);
});

test('A contagem de positivos dos valores 20,-30 e 19', () => {
    expect(contagem(20,-30)).toBe(19);
});

test('A sequencia fibonacci deve ser 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377', () => {
    expect(fibonacci(15)).toMatchObject(["0,1,1,2,3,5,8,13,21,34,55,89,144,233,377"]);
});

test('A sequencia fibonacci deve ser 0,1,1,2,3,5,8,13', () => {
    expect(fibonacci(8)).toMatchObject(["0,1,1,2,3,5,8,13"]);
});

test('A sequencia fibonacci deve ser 0,1,1,2', () => {
    expect(fibonacci(4)).toMatchObject(["0,1,1,2"]);
});

test('O mdc do valores 10,20 e 10', () => {
    expect(maxDivisorComum(10, 20)).toBe(10);
});

test('O mdc do valores 16,34 e 2', () => {
    expect(maxDivisorComum(16, 34)).toBe(2);
});

test('O mdc do valores 12,9 e 3', () => {
    expect(maxDivisorComum(12, 9)).toBe(3);
});

test('O valor 7 e um numero primo', () => {
    expect(validarNumPrimo(7)).toMatchObject(["O numero 7 e primo"]);
});

test('O valor 19 e um numero primo', () => {
    expect(validarNumPrimo(19)).toMatchObject(["O numero 19 e primo"]);
});

test('O valor 15 nao e um numero primo', () => {
    expect(validarNumPrimo(15)).toMatchObject(["O numero 15 nao e primo"]);
});

var items1 = [5,3,7,6,2,9];
var items2 = [10,3,5,1,2,9];
var items3 = [8,4,12,15,2,1];

test('O conjunto deve ser organizado em ordem QuickSort', () => {
    expect(quickSort(items1, 0, items1.length - 1)).toMatchObject([2,3,5,6,7,9]);
});

test('O conjunto deve ser organizado em ordem QuickSort', () => {
    expect(quickSort(items2, 0, items2.length - 1)).toMatchObject([1,2,3,5,9,10]);
});

test('O conjunto deve ser organizado em ordem QuickSort', () => {
    expect(quickSort(items3, 0, items3.length - 1)).toMatchObject([1,2,4,8,12,15]);
});

test('O somatorio do valor 10 e 45', () => {
    expect(somatorio(10)).toMatchObject([55]);
});

test('O somatorio do valor 4 e 10', () => {
    expect(somatorio(4)).toMatchObject([10]);
});

test('O somatorio do valor 16 e ', () => {
    expect(somatorio(16)).toMatchObject([136]);
});
