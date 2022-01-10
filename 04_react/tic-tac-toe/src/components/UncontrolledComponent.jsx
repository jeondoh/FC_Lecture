import React from "react";

class UncontrolledComponent extends React.Component{
  inputRef = React.createRef();

  render() {
    // console.log('init render', this.inputRef);
    return (
      <div>
        <input ref={this.inputRef} id="my-input" />
        <button onClick={this.click}>전송</button>
      </div>
    )
  }
  // render이후
  componentDidMount() {
    // console.log('componentDidMount', this.inputRef);
  }

  click = () => {
    // input 엘리먼트의 현재 상태 값(value) 를 꺼내서 전송
    // const input = document.querySelector("#my-input");
    // console.log(input);
    console.log(this.inputRef.current.value);
  }
}

export default UncontrolledComponent;