// private
class Human {
  // private 키워드로 비공개 멤버 생성
  constructor(private name: string, private password: string) {
    this.name = name;
    this.password = password;
  }
}

const me = new Human('choi', 'bk0112');

// protected
class Ani {
  protected name: string; // 인스턴스에서는 접근하지 못하는 멤버

  constructor(name: string) {
    this.name = name;
  }
}

class Cat extends Ani {
  constructor(name: string) {
    super(name);
  }
}

// static
class Parent {
  static test = 1;
}

const par = new Parent();

// 정적 프로퍼티에 접근 불가
// console.log(par.test);

// abstract : 추상 클래스 생성, 하위 클래스에서 메서드를 오버라이드하여 사용해야 함
abstract class Member {
  abstract login(): void;
}
