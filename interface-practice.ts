// interface == 함수의 정의가 가능하다.

interface fnc {
  (a: number, b: number): number;
}
var aaaa: fnc;
aaaa = function(a, b){
  var result = a + b;
  return result;
}
aaaa(1, 2);


// 객체의 값을 미리 정해놓는다.
interface code {
  [key: string]: string;
}

var obj:code = {
  a: 'a',
  b: 'b',
}

Object.keys(obj).forEach(v=>{
  v = 1 // 여기서도 검사를 해준다.
});

// 인터페이스 확장, 상속 extends
interface Person {
  name: string,
  age: number,
} 
interface Developer extends Person {
  language: string
}
var haha:Developer = {
  name: 'wooram',
  age: 30,
  language: 'javascript',
}