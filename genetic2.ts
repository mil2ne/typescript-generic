function helloBasic<T, U>(message: T, comment: U): T {
  return message;
}

helloBasic<string, number>("Mark",36);
helloBasic(39, 36);