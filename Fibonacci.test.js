const fibonacci = require('../funcoes/Fibonacci');

test('A sequencia fibonacci deve ser 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377', () => {
    expect(fibonacci(15)).toMatchObject([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]);
});

test('A sequencia fibonacci deve ser 0,1,1,2,3,5,8,13', () => {
    expect(fibonacci(8)).toMatchObject([0, 1, 1, 2, 3, 5, 8, 13]);
});

test('A sequencia fibonacci deve ser 0,1,1,2', () => {
    expect(fibonacci(4));
});
