function helloBasic<T, U>(message: T, comment: U): T{
  return message;
}

helloBasic<string, number>("sdf", 39);
helloBasic(36, 48);