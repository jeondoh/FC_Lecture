import {connect} from "react-redux";
import {useParams} from "react-router-dom";

function Detail({toDos}){
  const {id} = useParams();
  const findTodo = toDos.find(todo => todo.id === parseInt(id))
  return <h1>{findTodo.text}</h1>
}

function mapStateToProps(state){
  return {toDos: state}
}

export default connect(mapStateToProps)(Detail);