var util = require('./utils');
/**
 * 创建堆
 * @param {[Number]} heap待调整的堆数组
 * @param {Number} s 待调整的数组元素的位置
 * @param {Number} len 数组的长度
 */
function createHeap(heap, pos, len) {
    //将当前节点值进行保存
    var temp = heap[pos];
    //定位到当前节点的左边的子节点
    var child = pos * 2 + 1;
    //递归，直至没有子节点为止
    while (child < len) {
        //如果当前节点有右边的子节点，并且右子节点较大的场合，采用右子节点
        //和当前节点进行比较
        if (child + 1 < len && heap[child] < heap[child + 1]) {
            child += 1;
        }
        //比较当前节点和最大的子节点，小于则进行值交换，交换后将当前节点定位
        //于子节点上
        if (heap[pos] < heap[child]) {
            util.swap(heap, pos, child);
            pos = child;
            child = pos * 2 + 1;
        } else {
            break;
        }
        heap[pos] = temp;
    }

}

function heapSort(heap, length) {
    //从最后一个拥有子节点的节点开始，将该节点连同其子节点进行比较，
    //将最大的数交换与该节点,交换后，再依次向前节点进行相同交换处理，
    //直至构建出大顶堆（升序为大顶，降序为小顶）
    for (var i = (length / 2); i >= 0; i--)
        createHeap(heap, i, length);
    for (var j = length - 1; j > 0; j--) {
        var tmp = heap[0];
        heap[0] = heap[j];
        heap[j] = tmp;
        createHeap(heap, 0, j);
        util.print(heap, length, j);
    }

}

var h = [3, 1, 5, 7, 2, 4, 9, 6, 10, 8];
heapSort(h, 10);
console.log(h);