var util = require('./utils');

function merge(array, low, mid, high) {
    var i = low; // i是第一段序列的下标
    var j = mid + 1; // j是第二段序列的下标
    var k = 0; // k是临时存放合并序列的下标
    var temp = new Array(high - low + 1); // temp是临时合并序列

    // 扫描第一段和第二段序列，直到有一个扫描结束
    while (i <= mid && j <= high) {
        // 判断第一段和第二段取出的数哪个更小，将其存入合并序列，并继续向下扫描
        if (array[i] <= array[j]) {
            temp[k] = array[i];
            i++;
            k++;
        } else {
            temp[k] = array[j];
            j++;
            k++;
        }
    }

    // 若第一段序列还没扫描完，将其全部复制到合并序列
    while (i <= mid) {
        temp[k] = array[i];
        i++;
        k++;
    }

    // 若第二段序列还没扫描完，将其全部复制到合并序列
    while (j <= high) {
        temp[k] = array[j];
        j++;
        k++;
    }

    // 将合并序列复制到原始序列中
    for (k = 0, i = low; i <= high; i++, k++) {
        array[i] = temp[k];
    }
}

function mergePass(array, gap, length) {
    var i = 0;

    // 归并gap长度的两个相邻子表
    for (i = 0; i + 2 * gap - 1 < length; i = i + 2 * gap) {
        merge(array, i, i + gap - 1, i + 2 * gap - 1);
    }

    // 余下两个子表，后者长度小于gap
    if (i + gap - 1 < length) {
        merge(array, i, i + gap - 1, length - 1);
    }
}

function mergeSort(list) {
    for (var gap = 1; gap < list.length; gap = 2 * gap) {
        mergePass(list, gap, list.length);
        console.log(list);
    }
    return list;
}
var array = [9, 1, 5, 3, 4, 2, 6, 8, 7];
mergeSort(array);
