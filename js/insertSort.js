var util = require('./utils');

/**
 * 插入排序
 * 将一个记录插入到已排序好的有序表中，从而得到一个新，记录数增1的有序表。即：先将序列的第1个记录
 * 看成是一个有序的子序列，然后从第2个记录逐个进行插入，直至整个序列有序为止。
 * 要点：设立哨兵，作为临时存储和判断数组边界之用
 */
function insertSort(arr, n) {
    for (var i = 0; i < n; i++) {
        if (arr[i] < arr[i - 1]) {
            var j = i - 1;
            var temp = arr[i];
            arr[i] = arr[i - 1];
            while (temp < arr[j]) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = temp;
        }
        util.print(arr, n, i);
    }
}

var arr = [3, 4, 2, 1, 6, 8, 7];
insertSort(arr, 7);