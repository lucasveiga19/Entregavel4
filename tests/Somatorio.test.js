const somatorio = require('../funcoes/Somatorio');

test('O somatorio do valor 10 e 45', () => {
    expect(somatorio(10)).toMatchObject([55]);
});

test('O somatorio do valor 4 e 10', () => {
    expect(somatorio(4)).toMatchObject([10]);
});

test('O somatorio do valor 16 e ', () => {
    expect(somatorio(16)).toMatchObject([136]);
});
