const quickSort = require('../funcoes/Ordenacao');

var items1 = [5,3,7,6,2,9];
var items2 = [10,3,5,1,2,9];
var items3 = [8,4,12,15,2,1];

test('O conjunto deve ser organizado em ordem QuickSort', () => {
    expert(quickSort(items1, 0, items.length - 1)).toMatchObjetct([2,3,5,6,7,9]);
});

test('O conjunto deve ser organizado em ordem QuickSort', () => {
    expert(quickSort(items2, 0, items.length - 1)).toMatchObjetct([10,3,5,1,2,9]);
});

test('O conjunto deve ser organizado em ordem QuickSort', () => {
    expert(quickSort(items3, 0, items.length - 1)).toMatchObjetct([8,4,12,15,2,1]);
});
