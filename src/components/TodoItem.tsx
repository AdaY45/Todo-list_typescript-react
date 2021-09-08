import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

const Item: React.FC<{ item: Todo, onDeleteTodo: (id: string) => void }> = (props) => {
    const deleteTodo = (event: React.MouseEvent) => {
        event.preventDefault();

        props.onDeleteTodo(props.item.id);
    }

  return (
    <li className={classes["todo-item"]} key={props.item.id}>
      <div className={classes["todo-text"]}>{props.item.text}</div>
      <button className={classes.cancel} onClick={deleteTodo}>x</button>
    </li>
  );
};

export default Item;
