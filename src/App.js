import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modal/Modal";
import TodoInput from "./components/Modal/TodoInput/TodoInput";
import ColorPicker from "./components/Modal/ColorPicker/ColorPicker";
import Layout from "./components/Layout/Layout";

class App extends Component {
  state = {
    todoText: '',
    todoDate: '',
    todoTime: '',
    todo: [],
    colour: {
      headerIsActive: true,
      bodyIsActive: false
    },
    headerColour: 'GradDefault',
    bodyColour: 'BodyDefault',
    modal: {
      modalTodoIsActive: false,
      modalColourIsActive: false
    }
  };

  handleChangeTodoText = event => {
    this.setState({ todoText: event.target.value });
  };
  handleChangeTodoDate = event => {
    this.setState({ todoDate: event.target.value });
  };
  handleChangeTodoTime = event => {
    this.setState({ todoTime: event.target.value });
  };

  handleOnSubmit = e => {
    
    const todoCopy = [...this.state.todo];
    const id = Math.random();
    const isDone = false;
    // todo display date
    const dateConfig = { weekday: "long", month: "long", day: "numeric" };
    const doneDeadlineDate = new Date(this.state.todoDate).toLocaleDateString(
      "en-US",
      dateConfig
    );

    const todoItem = {
      id: id,
      isDone: isDone,
      content: this.state.todoText,
      date: doneDeadlineDate,
      // date: this.state.todoDate,
      time: this.state.todoTime
    }

    console.log('Date format ' + doneDeadlineDate)

    if(this.state.todoText !== ''){ // Tony: if statement to alert empty text
    todoCopy.push(todoItem);
    this.setState({ todo: todoCopy });

    this.handleModalTodo(); // Tony: closes the TodoInput Modal page on submit
    } else {
      alert('Please write what you would like to do')
    }
    this.setState(prev => prev.todoText = '')
    this.setState(prev => prev.todoDate = '')
    this.setState(prev => prev.todoTime = '')
    e.preventDefault();
  };



  handleColourHead = () => {
    let colourCopy = { ...this.state.colour };
    colourCopy.headerIsActive = true;
    colourCopy.bodyIsActive = false;
    this.setState({ colour: colourCopy });
  };

  handleColourBody = () => {
    let colourCopy = { ...this.state.colour };
    colourCopy.headerIsActive = false;
    colourCopy.bodyIsActive = true;
    this.setState({ colour: colourCopy });
  };

  setHeaderColour = e => {
    this.setState({ headerColour: e.target.id });
  };

  setBodyColour = e => {
    this.setState({ bodyColour: e.target.id });
  };

  handleDeleteTodo = id => {
    console.log(id);
    this.setState({
      todo: this.state.todo.filter(item => item.id !== id)
    });
  };

  /* handleColourArea = (e) => {
    let colourCopy = {...this.state.colour};
    if (e.target.id === "colourYourHeader"){
    colourCopy.headerIsActive = true;
    colourCopy.bodyIsActive = false;
    } else if (e.target.id === "colourYourBody"){
      colourCopy.headerIsActive = false;
      colourCopy.bodyIsActive = true;    
    };
    this.setState({colour: colourCopy})
  }; */

  handleModalTodo = () => {
    let modalCopy = { ...this.state.modal }; // {modalTodoIsActive: false, modalColourIsActive: false}
    if (modalCopy.modalTodoIsActive) {
      modalCopy.modalTodoIsActive = !modalCopy.modalTodoIsActive;
      this.setState({ modal: modalCopy });
    } else {
      modalCopy.modalTodoIsActive = !modalCopy.modalTodoIsActive;
      this.setState({ modal: modalCopy });
    }
  };

  handleModalColour = () => {
    let modalColourCopy = { ...this.state.modal };
    if (modalColourCopy.modalColourIsActive) {
      modalColourCopy.modalColourIsActive = !modalColourCopy.modalColourIsActive;
      this.setState({ modal: modalColourCopy });
    } else {
      modalColourCopy.modalColourIsActive = !modalColourCopy.modalColourIsActive;
      this.setState({ modal: modalColourCopy });
    }
  };

  handleToggleTodo = id => {
    console.log(id);
    const todoCopy = [...this.state.todo];
    const idOfItemToToggle = todoCopy.findIndex(
      item => item.id === id
    );
    console.log(idOfItemToToggle);
    todoCopy[idOfItemToToggle].isDone = !todoCopy[idOfItemToToggle].isDone;

    this.setState({todo: todoCopy})

    // const todoToUpdate = this.state.todo.filter(
    //   item => item.id.toString() === e.target.id
    // );
    // console.log("todoUpdate: " + todoToUpdate[0].id);
    // console.log(todoToUpdate);
    // todoToUpdate[0].isDone = !todoToUpdate[0].isDone;
    //
    // const remainingTodoItems = this.state.todo.filter(
    //   item => item.id.toString() !== e.target.id
    // );
    //
    // this.setState({ todo: [...remainingTodoItems, todoToUpdate[0]] });
  };

  handleUpdateTodoItem = id => {
    console.log(id);
    this.handleModalTodo();
    //let openModal = 
    //this.setState(modal.modalTodoIsActive)
  }

  render() {
    const displayTodoInput = (
      <Modal>
        <TodoInput
          handleModalTodo={this.handleModalTodo} // For the Modal (TodoInput) close button
          todoContent={this.state.todoText}
          handleChangeTodoText={e => this.handleChangeTodoText(e)}
          todoDate={this.state.todoDate}
          handleChangeTodoDate={e => this.handleChangeTodoDate(e)}
          todoTime={this.state.todoTime}
          handleChangeTodoTime={e => this.handleChangeTodoTime(e)}
          handleOnSubmit={e => this.handleOnSubmit(e)}
        />
      </Modal>
    );

    const displayColorPicker = (
      <Modal>
        <ColorPicker
          headColourProp={this.state.colour.headerIsActive}
          bodyColourProp={this.state.colour.bodyIsActive}
          defaultHeaderColor={this.state.headerColour} // To state the default colour of the header
          defaultBodyColor={this.state.bodyColour} // To state the default colour of the body
          setBodyColour={this.setBodyColour} // To set the default colour of the header
          setHeaderColour={this.setHeaderColour} // To set the default colour of the header
          bodyColourChange={this.handleColourBody} // Makes the BODY colour options show
          headColourChange={this.handleColourHead} // Makes the HEAD colour options show
          handleModalColour={this.handleModalColour} // For the Modal (ColorPicker) close button
          /* handleColourArea={this.handleColourArea} */
        />
      </Modal>
    );
    let displayModal = this.state.modal.modalColourIsActive
      ? displayColorPicker
      : this.state.modal.modalTodoIsActive
      ? displayTodoInput
      : null;

    return (
      <>
        <Navbar
          defaultHeaderColor={this.state.headerColour} // To state the default colour of the header
          handleModalTodo={this.handleModalTodo} // For the Modal (TodoInput) to show
          handleModalColour={this.handleModalColour} // For the Modal (ColorPicker) to show
        />
        <Layout
          todoItems={this.state.todo}
          deleteTodo={this.handleDeleteTodo}
          updateTodo={this.handleUpdateTodoItem}
          toggleTodo={this.handleToggleTodo}
          defaultBodyColor={this.state.bodyColour} // To state the default colour of the body
        />
        {displayModal}
      </>
    );
  }
}

export default App;
