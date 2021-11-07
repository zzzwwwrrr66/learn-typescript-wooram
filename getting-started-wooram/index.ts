function a(a: number, b:number){
  return a + b;
}

const str: string = 'asd';
const num: number = 1;
const arr: Array<number> = [];
const arr2: any[] = [];

// 튜플
let address: [string, number] = ['1', 1];

// 객체
let obj: object = {};
let obj2: {name: string, age: number} = {
  name: 'wooram',
  age: 1,
}

// 불리언
let show: boolean = true;

// 함수 
function fnc(data: object): string { //return type을 지정했을때, return 값이 없으면 에러
  var _html: string = '';

  return _html;
}

function aa(a:string, b:string) {
  return a + b;
}

aa('2'); // stric CHECK!

// 함수의 옵셔널 파라미터(선택적 파라미터)   ?: --> 넣어도되고 안넣어도됨
function log(a: string, b ?:string) {

}

log('1')
