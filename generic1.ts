function helloString(message: string): string {
  return message;
}

function helloNumber(message: number): number {
  return message;
}

// 더 많은 비슷한 형식의 반복된 함수들 ...

function hello(message: any): any {
  return message;
}

console.log(hello('Mark').length);
console.log(hello(39).length);

function helloGeneric<T>(message: T): T {
  return message;
}

console.log(helloGeneric('Mark').length);
console.log(helloGeneric(39));
console.log(helloGeneric(true));