import { useState } from "react";
import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

const Item: React.FC<{
  item: Todo;
  onDeleteTodo: (id: string) => void;
}> = (props) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const checkedHandler = () => {
    setIsChecked(!isChecked);
  };

  const deleteTodo = (event: React.MouseEvent) => {
    event.preventDefault();

    props.onDeleteTodo(props.item.id);
  };

  return (
    <li
      onClick={checkedHandler}
      className={ `${classes["todo-item"]} ${isChecked ? classes['checked'] : ''}`
        // isChecked ? classes["todo-item"] + " " + classes.checked : classes["todo-item"]
      }
      key={props.item.id}
    >
      <div className={classes["todo-text"]}>{props.item.text}</div>
      <button className={classes.cancel} onClick={deleteTodo}>
        x
      </button>
    </li>
  );
};

export default Item;
