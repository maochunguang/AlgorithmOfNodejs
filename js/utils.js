/**
 * 打印每次排序结果
 */
exports.print = function (a, n, i) {
    var str = "";
    str = str.concat(i + ":");
    for (var j = 0; j < n; j++) {
        str = str.concat(a[j] + " ");
    }
    console.log(str);
}
/**
 * 交换数组对应下标元素
 */
exports.swap = function (arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    // console.log(a,b);
}