// 5瓶饮料，4个瓶盖换一瓶，两个瓶身换一个，一共喝多少瓶
function drink() {
  var num = 5;
  var body = 5;
  var head = 5;
  while (body >= 2 || head >=4) {
    // 计算瓶盖
    num += parseInt(head /4);
    head = head%4 +parseInt(head/4);
    body+= head/4;

    // 计算瓶身
    num += parseInt(body/2);
    head += parseInt(body/2);
    body = body%4 + parseInt(body/4);
  }
  console.log('num==', num);
}
drink();
console.log(5%3);