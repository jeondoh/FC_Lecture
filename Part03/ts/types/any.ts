// 어떤 타입이어도 상관없는 타입
// 최대한 쓰지 않도록 > 컴파일시 타입 체크가 정상적으로 이뤄지지 않기 때문
// 컴파일 옵션 중 any를 써야하는데 쓰지 않으면 오류를 뱉도록 하는 옵션( nolmplicitAny )

function returnAny(message: any) : any{
  console.log(message);
}
const any1 = returnAny("리턴은 아무거나");
any1.toString();