class PersonG1<T, K>{
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

new PersonG1("Mark", 22);
// new Person<string>(39);
// new Person<string, number>("Mark", "age");