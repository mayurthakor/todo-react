import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { ToDoItemsContext } from "../store/ToDoItemsContext";

const WelcomeMessage = () => {
  const { todoItems } = useContext(ToDoItemsContext);
  return (
    <div>
      {todoItems.length === 0 && (
        <p className={styles.welcome}>Enjoy your day</p>
      )}
    </div>
  );
};

export default WelcomeMessage;
