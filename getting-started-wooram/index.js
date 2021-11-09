function a(a, b) {
    return a + b;
}
var str = 'asd';
var num = 1;
var arr = [];
var arr2 = [];
// 튜플
var address = ['1', 1];
// 객체
var obj = {};
var obj2 = {
    name: 'wooram',
    age: 1
};
// 불리언
var show = true;
// 함수 
function fnc(data) {
    var _html = '';
    return _html;
}
function aa(a, b) {
    return a + b;
}
// 함수의 옵셔널 파라미터(선택적 파라미터)   ?: --> 넣어도되고 안넣어도됨
// enum 읽기전용 값, 값이 변하지 않음 
var Shoes;
(function (Shoes) {
    Shoes[Shoes["Nike"] = 0] = "Nike";
    Shoes[Shoes["Adidas"] = 1] = "Adidas";
})(Shoes || (Shoes = {}));
var Shoes_02;
(function (Shoes_02) {
    Shoes_02["Nike"] = "\uB098\uC774\uD0A4";
    Shoes_02["Adidas"] = "\uC544\uB514\uB2E4\uC2A4";
})(Shoes_02 || (Shoes_02 = {}));
console.log(Shoes_02.Nike);
