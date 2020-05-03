import React from "react";
import classes from "./TodoInput.module.css";
import Close from "@material-ui/icons/Close";

const TodoInput = props => {
  const yesterday = new Date();
  const day = yesterday.getDate() - 1;
  const month = yesterday.getMonth();
  const year = yesterday.getFullYear();

  const dateFormat = [day, month, year].join("-");
  // console.log("dataFormat");
  // console.log(dateFormat);

  // console.log(day, month, year);
  // console.log(typeof year);
  //Todo: set the min date on date field
  const d = new Date();
  d.setDate(d.getDate() - 1);
  // console.log(d);
  return (
    <>
      <div className={classes.ModalHeader}>
        <button
          className={classes.CloseModal}
          type="button"
          onClick={props.handleModalTodo}
        >
          <Close />
        </button>
      </div>
      <form action="" onSubmit={props.handleOnSubmit}>
        <div className={classes.ModalContent}>
          <div className={classes.ModalContentHeader}>
            <span>Do</span> / me
          </div>
          <div className={classes.ModalContentBox}>
            <textarea
              value={props.todoContent}
              onChange={props.handleChangeTodoText}
              placeholder="What would you like to do?"
              maxLength="120"
              cols="30"
              rows="5"
            />
            <label>Max. 120 characters</label>
          </div>
          <div className={classes.ModalContentHeader}>
            <span>Do</span> / me by?
          </div>
          <div>
            <input
              value={props.todoDate}
              onChange={props.handleChangeTodoDate}
              type="date"
              id="todoDate"
              name="todo-date"
              min={dateFormat}
            />

            <input
              value={props.todoTime}
              onChange={props.handleChangeTodoTime}
              type="time"
              id="todoTime"
              name="todo-time"
              step="900"
            />
          </div>
        </div>
        <div className={classes.ModalFooter}>
          <button
            className={[classes.Todo, classes.TodoSave].join(" ")}
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoInput;
