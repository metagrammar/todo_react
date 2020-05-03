import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import classes from "./Layout.module.css";

const Layout = props => {
  let bodyBkg = props.defaultBodyColour
  const todoItems = props.todoItems.map(item => (
    <TodoItem
      key={item.id}
      todoContent={item.content}
      time={item.time}
      date={props.date}
      deleteTodo={props.deleteTodo}
      idTodo={item.id}
      toggleTodo={() => props.toggleTodo(item.id)}
      isDoneTodo={item.isDone}
    />
  ));
  return (
    <div className={[classes.Content, classes[bodyBkg]].join(" ")}  >
      <div className={classes.ContentGridder}>
        <div className={classes.ContentWrapper}>{todoItems}</div>
      </div>
    </div>
  );
};

export default Layout;
