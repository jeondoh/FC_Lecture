interface Person2 {
  name: string;
  age?: number; // 있어도 되고 없어도 될때 ? 사용
}

function hello2(person: Person2): void{
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

hello2({name: 'Mark', age: 39});
hello2({name: 'Anna'});