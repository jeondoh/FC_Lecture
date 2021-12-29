class PersonC1{
  public constructor(private _name: string, private _age: number) {}

  get name(){
    return this._name;
  }

  set name(n: string){
    this._name = n;
  }
}

const pc1: PersonC1 = new PersonC1("Mark", 39);
console.log(pc1);

console.log(pc1.name); // getter
pc1.name = "dohyun"; // setter
console.log(pc1.name); // getter

console.log("*********************************************************")
/* 인덱스 시그니처 */
// 동적으로 prop이 들어올때 사용
class Students{
  [index:string]: "male" | "female";
}

const ac1 = new Students();
ac1.mark = "male";
ac1.jade = "male";

console.log(ac1);

const bc1 = new Students();
bc1.chloe = "female";
bc1.alex = "male";
bc1.anna = "female";


class SingleTonClass {
  private static instance: SingleTonClass | null = null;

  public static getInstance(){
    if(SingleTonClass.instance === null){
      SingleTonClass.instance = new SingleTonClass();
    }
    return SingleTonClass.instance;
  }

  private constructor() {
  }

}

const as1 = SingleTonClass.getInstance();
const bs1 = SingleTonClass.getInstance();