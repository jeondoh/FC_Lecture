import React from "react";
import PersonContext from "./PersonContext";

// 선호 X
export default class Example2 extends React.Component{
  static contextType = PersonContext;

  render() {
    const persons = this.context;
    return (
      <ul>
        {persons.map(person => (
            <li>{person.name}</li>
        ))}
      </ul>
    );
  }
}