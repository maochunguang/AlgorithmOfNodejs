var util = require('./utils');
/**
 * 希尔排序:
 * 先将要排序的一组记录按某个增量d（n/2,n为要排序数的个数）分成若干组子序列，每组中记录的下标相差d.
 * 对每组中全部元素进行直接插入排序，然后再用一个较小的增量（d/2）对它进行分组，在每组中再进行直接插入排序。继续不断缩小增量直至为1，最后使用直接插入排序完成排序
 * @param {[Number]} a 
 * @param {Number} n 
 * @param {Number} dk 
 */
function shellInsertSort(a, n, dk) {
    for (i = dk; i < n; i++) {
        if (a[i] < a[i - dk]) {
            var j = i - dk;
            var temp = a[i];
            a[i] = a[j];
            while (temp < a[j]) {
                a[j + dk] = a[j];
                j = j - dk;
            }
            a[j + dk] = temp;
        }
        util.print(a, n, i);
    }

}

function shellSort(a, n) {
    var dk = n / 2;
    while (dk >= 1) {
        shellInsertSort(a, n, dk);
        dk = dk / 2;
    }
}

var a = [3, 1, 5, 7, 2, 4, 9, 6];
shellInsertSort(a, 8, 1); //相当于直接插入
shellSort(a, 8);