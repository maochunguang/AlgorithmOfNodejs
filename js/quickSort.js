var util = require('./utils');

function partition(arr, low, high) {
    var privot = arr[low];
    while (low < high) {
        while (low < high && arr[high] >= privot) --high;
        util.swap(arr, low, high);
        while (low < high && arr[low] <= privot) ++low;
        util.swap(arr, low, high);
    }
    util.print(arr, 7, low);
    return low;
}
/**
 * 快速排序,递归实现
 * @param {[Number]} arr 
 * @param {Number} low 
 * @param {Number} high 
 */
function quickSort(arr, low, high) {
    if (low < high) {
        var privot = partition(arr, low, high);
        quickSort(arr, low, privot - 1);
        quickSort(arr, privot + 1, high);
    }
}
var arr = [3, 4, 2, 1, 6, 8, 7];
quickSort(arr, 0, 6);