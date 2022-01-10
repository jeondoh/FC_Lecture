import React from "react";

export default function ExamHook5(){
  const [count, setCount] = React.useState(0);

  React.useEffect(()=> {
    console.log('componentDidMount');

    return() => {
      // cleanup
      // componentWillUnmount
    };

  }, []);

  React.useEffect(()=> {
    console.log('componentDidMount & componentDidUpdate by count', count);

    return() => {
      // cleanup
      console.log('cleanup by count', count);
    };

  }, [count]);

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