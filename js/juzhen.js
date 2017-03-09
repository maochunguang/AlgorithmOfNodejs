var cal = function (len) {
    var helix = [];
    //初始化空矩阵
    for (var i = 0; i < len; i++) {
        helix[i] = [];
    }

    var min = 0;
    var max = len - 1;
    var row = 0;
    var col = 0;
    for (var i = 0; i < len * len; i++) {
        helix[row][col] = i + 1;
        if (row == min && col < max) {
            col = col + 1;
        } else if (row < max && col == max) {
            row = row + 1;
        } else if (row == max && col > min) {
            col = col - 1;
        } else if (row > min && col == min) {
            row = row - 1;
        }
        if (row - 1 == min && col == min) {
            min = min + 1;
            max = max - 1;
        }
    }
    return helix;
};

var helix = cal(6);
for (var i = 0; i < helix.length; i++) {
    var row = '';
    for (var j = 0; j < helix[i].length; j++) {
        row += helix[i][j] + ' ';
    }
    console.log(html);
}