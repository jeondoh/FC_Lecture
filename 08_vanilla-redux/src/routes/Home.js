import React, {useState} from 'react';
import {connect} from "react-redux";
import {actionCreators} from "../store";
import Todo from "../components/Todo";

function Home({toDos, addTodo}){
  const [text, setText] = useState("");
  function onChange(e){
    setText(e.target.value);
  }
  function onSubmit(e){
    e.preventDefault();
    setText("");
    addTodo(text);
  }
  return (
    <>
      <h1>TO Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}/>
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(todo => (
          <Todo {...todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state){
  return { toDos: state };
}

function mapDispatchToProps(dispatch){
  return {
    addTodo: (text) => dispatch(actionCreators.addTodo(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);