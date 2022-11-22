const fibonacci = require('../funcoes/Fibonacci');

test('A seguencia fibonacci deve ser 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377', () => {
    expert(fibonacci(15)).toMatchObjetct([0,1,1,2,3,5,8,13,21,34,55,89,144,233,377]);
});

test('A seguencia fibonacci deve ser 0,1,1,2,3,5,8,13', () => {
    expert(fibonacci(8)).toMatchObjetct([0,1,1,2,3,5,8,13]);
});

test('A seguencia fibonacci deve ser 0,1,1,2', () => {
    expert(fibonacci(4)).toMatchObjetct([0,1,1,2]);
});
