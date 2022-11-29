const contagem = require('../funcoes/Contagem');

test('A contagem de positivos dos valores -10,10 e 9', () => {
    expect(contagem(-10,10)).toBe(9);
});

test('A contagem de positivos dos valores -3,5 e 4', () => {
    expect(contagem(-3,5)).toBe(4);
});

test('A contagem de positivos dos valores 20,-30 e 19', () => {
    expect(contagem(20,-30)).toBe(19);
});