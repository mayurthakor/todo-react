import { useContext, useRef } from "react";
import { GrAdd } from "react-icons/gr";
import { ToDoItemsContext } from "../store/ToDoItemsContext";

function AddToDo({ onNewItem }) {
  const { addItem } = useContext(ToDoItemsContext);
  const todoNameElement = useRef();
  const todoDueDateElement = useRef();

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    addItem(todoNameElement.current.value, todoDueDateElement.current.value);
    todoNameElement.current.value = "";
    todoDueDateElement.current.value = "";
  };

  return (
    <div className="items-container">
      <form
        className="row todo-container custom-row"
        onSubmit={handleAddButtonClick}
      >
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter ToDo here"
            ref={todoNameElement}
          ></input>
        </div>
        <div className="col-4">
          <input type="date" ref={todoDueDateElement}></input>
        </div>
        <div className="col-2">
          <button className="btn btn-success custom-button">
            <GrAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddToDo;
