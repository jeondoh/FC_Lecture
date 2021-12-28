"use strict";
let myName = 'Mark';
// Template String
// backtick(`) 기호를 이용해 +로 문자열을 합치지 않고 사용가능
let fullName = 'Mark Lee';
let age = 39;
let sentence = `Hello, My name is ${fullName}.
I'll be ${age + 1} years old next month.`;
console.log(sentence);
