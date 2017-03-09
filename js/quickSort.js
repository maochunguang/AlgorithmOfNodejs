var util = require('./utils');

function partition(arr, low, high) {
    var mid = arr[low];
    while (low < high) {
        while (low < high && arr[high] >= mid) --high;
        util.swap(arr, low, high);
        while (low < high && arr[low] <= mid) ++low;
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
        var mid = partition(arr, low, high);
        quickSort(arr, low, mid - 1);
        quickSort(arr, mid + 1, high);
    }
}
var arr = [3, 4, 2, 1, 6, 8, 7];
quickSort(arr, 0, 6);