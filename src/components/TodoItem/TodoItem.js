import React from "react";
import classes from "./TodoItem.module.css";
import Delete from "@material-ui/icons/Delete";
import Alarm from "@material-ui/icons/Alarm";

const TodoItem = props => {
  // todo use props.isDone for css
  // classes.TodoBox: add class todoDone
  // classes.checkmark: class.toggle

  let todoBox = [classes.todoBox];
  let todoCheck = [classes.checkmark];
  if (props.isDoneTodo) {
    todoBox = [classes.todoBox, classes.todoDone].join(" ");
    todoCheck = [classes.checkmark, classes.toggle].join(" ");
  }
  return (
    <div className={todoBox}>
      <div className={classes.todoTime}>
        <Alarm style={{ fontSize: 12 }} />
        <div className={classes.dateTimeCont}>
          <span className={classes.dateOnOff}>{props.date}</span>
          <span className={classes.timeOnOff}>{props.time}</span>
        </div>
        <div
          className={classes.trashIcon}
          style={{ justifySelf: "end" }}
          id={props.idTodo}
          onClick={e => props.deleteTodo(e)}
        >
          <Delete style={{ fontSize: 12 }} id={props.idTodo} />
        </div>
      </div>
      <label className={classes.checkboxContainer}>
        <div className={classes.todoText}>{props.todoContent}</div>
        <input type="checkbox" id={props.idTodo} />
        <span className={todoCheck} onClick={e => props.toggleTodo(e)} id={props.idTodo}/>
      </label>
    </div>
  );
};

export default TodoItem;
