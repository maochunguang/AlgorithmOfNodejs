var util = require('./utils');
/**
 * 选择排序:
 * 在要排序的一组数中，选出最小（或者最大）的一个数与第1个位置的数交换；然后在剩下的数当中再找最小
 * （或者最大）的与第2个位置的数交换，依次类推，直到第n-1个元素（倒数第二个数）和
 *  第n个元素（最后一个数）比较为止。
 * @param {[Number]} arr 
 * @param {Number} n 
 */
function selectSort(arr, n) {
    var key, temp;
    for (var i = 0; i < n; i++) {
        key = SelectMinKey(arr, n, i);
        if (key != i) {
            temp = arr[i];
            arr[i] = arr[key];
            arr[key] = temp;
        }
        util.print(arr, n, i);
    }
}
/**
 * 改进算法,每次选择最大和最小
 * @param {[Number]} arr 
 * @param {Number} n 
 */
function doubleSelect(arr, n) {
    var i, j, min, max, temp;
    for (i = 1; i <= n / 2; i++) {
        min = i;
        max = i;
        for (j = i + 1; j <= n - i; j++) {
            if (arr[j] > arr[max]) {
                max = j;
            }
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        util.swap(arr, i - 1, min);
        util.swap(arr, n - i, max);

        util.print(arr, n, i);
    }
}

function SelectMinKey(a, n, i) {
    var k = i;
    for (var j = i + 1; j < n; ++j) {
        if (a[k] > a[j]) k = j;
    }
    return k;
}

var arr = [3, 4, 2, 1, 6, 8, 7];
// selectSort(arr, 7);
doubleSelect(arr, 7);