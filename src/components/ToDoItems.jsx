import { useContext } from "react";
import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css";
import { ToDoItemsContext } from "../store/ToDoItemsContext";

function ToDoItems() {
  const { todoItems } = useContext(ToDoItemsContext);

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <ToDoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
        ></ToDoItem>
      ))}
    </div>
  );
}
export default ToDoItems;
