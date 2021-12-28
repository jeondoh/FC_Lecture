function helloString(message: string): string{
  return message;
}

function helloNumber(message: number): number{
  return message;
}

function hello(message: any): any {
  return message;
}

console.log(hello("Mark"));
console.log(hello(39));

function helloGeneric<T>(message: T): T{
  return message;
}

console.log(helloGeneric('Mark'));
console.log(helloGeneric(30));