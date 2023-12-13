// 리터럴 타입 - 특정 값을 표현
type FirstName = '최' | '박' | '이' | '윤';

// 유니온 타입 - 여러 타입 중 하나를 표현
let val: string | number;

// 교차 타입 - 여러 타입을 하나로 묶음
type Animal = {
  name: string;
  age: number;
};

type Mammal = {
  canSwim: boolean;
};

type Dog = Animal & Mammal; // 교차 타입

const myDog: Dog = {
  name: 'Berry',
  age: 12,
  canSwim: true,
};
