console.log("hello parcel!");

// babel을 통해 async & await를 쓰게 될 경우
// npm으로 @babel/plugin-transform-runtime 설치 후 .babelrc.js에 정의
async function test(){
  const promise = Promise.resolve(123)
  console.log(await promise)
}

test()