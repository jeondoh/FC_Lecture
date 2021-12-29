"use strict";
class PersonC1 {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    get name() {
        return this._name;
    }
    set name(n) {
        this._name = n;
    }
}
const pc1 = new PersonC1("Mark", 39);
console.log(pc1);
console.log(pc1.name); // getter
pc1.name = "dohyun"; // setter
console.log(pc1.name); // getter
/* 인덱스 시그니처 */
class Students {
}
const a = new Students();
a.mark = "male";
a.jade = "male";
console.log(a);
