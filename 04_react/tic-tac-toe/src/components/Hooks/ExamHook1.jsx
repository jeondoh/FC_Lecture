import React from "react";

export default class ExamHook1 extends React.Component{
  state = {count: 0};

  render() {
    const {count} = this.state;

    return (
        <div>
          <p>you clicked {count} times</p>
          <button onClick={this.click}>Click me</button>
        </div>
    )
  }

  click = () => {
    this.setState({count: this.state.count + 1});
  }
}