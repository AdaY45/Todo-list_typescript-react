import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";

import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

    return (
    <ul className={classes["todos-list"]}>
      {todosCtx.items.map((item) => (
          <TodoItem item={item} onDeleteTodo={todosCtx.deleteTodo.bind(null, item.id)}/> //pre-configure function to get the right id
      ))}
    </ul>
  );
};

export default Todos;
