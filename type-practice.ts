// type은 확장 불가능, interface 확장 가능; 가급적 interface 추천(공식문서)

interface PERSON_OBJ {
  name: string;
}
// type PERSON_OBJ = {
//   name: string;
// }

interface EXTEND_OBJ extends PERSON_OBJ {
  age: number
}

var wooram_obj: PERSON_OBJ = {
  name: 'wooram',
}


function log(val: string | number) {
  console.log(val)
}

log(1);

var a: object = {};

function test(value: string | number) {
  if(typeof value == 'number') {
    value.toLocaleString();
  }
  if(typeof value == 'string') {
    value.toString();
  }

  throw new TypeError("value must be string or number");
}


interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  skill: string;
}
function test2(someone: Person | Developer): void {
  someone.name = 'wooram';
  someone.skill = 'Javascript';
  someone.age = 30;
}