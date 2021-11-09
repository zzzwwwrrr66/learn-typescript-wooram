// 제네릭 == 미리 T라는 임의의 타입변수를 넣고 함수를 선언할때 어떤타입인지 결정하는 것// 여러군대에서 함수를 선언할때 서로다른 타입을 정의 할수있는 장점이 있다. // 하나의 타입만을 정하기 때문에 좀더 스트릭하게 작성가능 
// 유니온(|)도 사용할수 있지만, 반환값에서 유니온을 사용한 타입이 그대로 유지되기 때문에 공통으로 사용할수 있는 API이외사용을 할수없다.

function logText<T>(text: T): T{ // <T> 를 사용하는이유는 타입변수의 약자로 type variable 변수처럼 임의값이지만 명시적인 의미로 쓰인다.
  console.log(text);
  return text;
}

logText<string>('hi');


function testtesttest(arg: number | string){ // 유니온으로 설정했을때;
  console.log(arg);
  return arg;
}

var aaaaa = testtesttest('asd');
// aaaaa.split() // <- 경우에 string에서 사용 가능하지만, number에서 사용불가능하기 때문에 못쓰는 함수가 된다.


function generics_test<T>(arg: T){
  console.log(arg);
  return arg;
}

var case_a = generics_test<string>('a');
case_a.split('')
var case_b = generics_test<number>(1);
case_b.toLocaleString();



const multiple_generic = <T, U>(a : T, b: U): [T,U] => {
  return [a, b];
}
multiple_generic<string, number>('1', 1);