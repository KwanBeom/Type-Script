const say = (name: string): string => {
  return `hello, ${name}`;
};

const validAge = (age: number): boolean => {
  return age > 19;
};

// 매개변수도 옵셔널한 타입 가능
const opt = (name?: string): string => {
  return `hello, ${name || 'world'}`;
};

// 매개변수 default 값 지정하면 타입스크립트가 추론하여 타입 지정
const sayHello = (name = 'choi'): string => {
  return `hello, ${name}`;
};

function sum(...numbers: number[]) {
  return numbers.reduce((total, cur) => total + cur, 0);
}

console.log(sum(1, 2, 3, 4));

interface Person {
  name: string;
}

const human: Person = { name: 'choi' };

// this의 타입을 정의하려면 함수 첫번째 매개변수에 지정
function sayName(this: Person) {
  console.log(this.name);
}

const test = sayName.bind(human);

test();

interface RequestOptions {
  method: string;
  ContentType: string;
  headers?: { 'Content-Type': string };
  body?: string;
}

// 함수 오버로드 구현
function fetchData(url: string): Promise<string>;
function fetchData(url: string, options: RequestOptions): Promise<string>;
function fetchData(url: string, options?: RequestOptions): Promise<string> {
  // API 호출 및 데이터 가져오기 로직
  return new Promise((res, rej) => {});
}
