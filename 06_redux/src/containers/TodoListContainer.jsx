import TodoList from "../components/TodoList";
import { useSelector } from "react-redux";

export default function TodoListContainer() {
  const todos = useSelector((state) => state.todos);
  return <TodoList todos={todos} />;
}
