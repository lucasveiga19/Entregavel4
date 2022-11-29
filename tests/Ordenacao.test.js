const quickSort = require('../funcoes/Ordenacao');

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
