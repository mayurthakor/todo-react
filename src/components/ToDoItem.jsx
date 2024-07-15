import { useContext } from "react";
import styles from "./ToDoItem.module.css";
import { AiOutlineDelete } from "react-icons/ai";
import { ToDoItemsContext } from "../store/ToDoItemsContext";

function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(ToDoItemsContext);
  return (
    <div className={styles.container}>
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => {
              deleteItem(todoName);
            }}
          >
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
