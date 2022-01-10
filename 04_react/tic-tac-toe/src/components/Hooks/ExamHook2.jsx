import React from "react";

export default function ExamHook2(){
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  function click(){
    setCount(count+1);
  }

}