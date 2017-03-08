var util = require('./utils');
/**
 * 在要排序的一组数中，对当前还未排好序的范围内的全部数，自上而下对相邻的两个数依次进行比较和调整，
 * 让较大的数往下沉，较小的往上冒。每当两相邻的数比较后发现它们的排序与排序要求相反时，就将它们互换。
 * @param {[Number]} arr 
 * @param {Number} n 
 */
function bubbleSort(arr, n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n - i - 1; ++j) {
            if (arr[j] > arr[j + 1])
                util.swap(arr, j, j + 1)
        }
        util.print(arr, n, i);
    }
}
/**
 * 改进算法,使用标识变量pos
 * @param {[Number]} arr 
 * @param {Number} n 
 */
function bubbleSort_skip(arr, n) {
    var i = 1;
    while (i > 0) {
        var pos = 0;
        for (var j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                pos = j;
                util.swap(arr, j, j + 1);
                util.print(arr, n, j);
            }
            i = pos;
        }

    }
}
var arr = [3, 4, 2, 1, 6, 8, 7];
bubbleSort(arr, 7);
// bubbleSort_skip(arr, 7);