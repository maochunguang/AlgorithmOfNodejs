var util = require('./utils');
//普通递归,按从1开始,0,1,1,2,3,5,8
function fib_r(n) {
    if (n <=2)
        return 1;
    return fib_r(n - 1) + fib_r(n - 2);
}
//尾递归实现
function fib_rw(a, b, n) {
    if (n <= 1) return b;
    return fib_rw(b, a + b, n - 1);
}
//动态规划实现
function fib_dp(n) {
    var a = 0;
    var b = 1;
    var i;
    for (i = 2; i <= n; i++) {
        b = a + b;
        a = b - a;
    }
    return b;
}
console.log(fib_r(6));
console.log(fib_rw(0, 1, 6));
console.log(fib_dp(6));