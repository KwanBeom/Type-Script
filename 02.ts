type Gender = '남자' | '여자'; // 사용자 정의 타입

// 인터페이스
interface User {
  id: string; // ?: '?' 접두사로 optional한 프로퍼티로 만듬
  name: string;
  gender?: Gender;
  age: number;
  readonly password: string; // 읽기전용
}

const user: User = {
  id: 'abc',
  name: 'choi',
  gender: '남자',
  age: 30,
  password: '1234',
};

// 튜플
const arr: [number, string] = [1, 'a'];

enum Color {
  Red,
  Blue,
}

const myColor: Color = Color.Red;
console.log(myColor);
console.log('hi');

const abc: any = 123;

// void: 함수 반환값이 없음을 명시
const hello = (): void => {
  // 어쩌구
};

const err = (): never => {
  throw new Error('에러');
};
