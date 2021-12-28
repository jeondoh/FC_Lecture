interface IPerson{
  name: string;
  age: number;
}

const person11: IPerson = {
  name: "Mark",
  age: 39,
};
// IPerson[keyof IPerson]
// => IPerson["name" | "age"]
// => IPerson["name"] | IPerson["age"]
// => string | number
function getProp<T, K extends keyof T>(obj: T, key: K): T[K]{
  return obj[key];
}

getProp(person11, 'age');

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void{
  obj[key] = value;
}

setProp(person11, "name", "Anna");
