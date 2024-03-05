import { Component } from "react";
import UserExercise from "./UserExercise";
import ExerciseDone from "./ExerciseDone";
class UsersList extends Component {
  state = {
    todoValue: "",
    Todo: [{ exercise: "", completed: false }],
  };
  onChange = (event) => {
    const value = event.target.value;
    this.setState({
      todoValue: value,
    });
  };
  addUser = (event) => {
    event.preventDefault();
    const todo = { exercise: this.state.todoValue };
    this.setState({
      Todo: [...this.state.Todo, todo],
      todoValue: "",
    });
  };
  moveUser = (i) => {
    let filtered = this.state.Todo.filter((item, index) => index !== i);
    let changedObj = this.state.Todo.filter((item, index) => index == i).map(
      (item) => ({
        exercise: item.exercise,
        completed: true,
      })
    );
    this.setState({
      todoValue: "",
      Todo: [filtered, changedObj[0]],
    });
  };
  render() {
    return (
      <div className="main-container">
        <form onSubmit={this.addUser}>
          <input
            type="text"
            placeholder="Type your To Do here"
            onChange={this.onChange}
            value={this.state.todoValue}
          />
          <button type="submit" className="main-button">
            Submit
          </button>
        </form>
        <div className="todo-container">
          <div className="left-container">
            <h2>To Do</h2>
            {this.state.Todo.map((todo, index) => (
              <UserExercise
                Todo={todo.exercise}
                action={this.moveUser}
                index={index}
              />
            ))}
          </div>
          <div className="right-container">
            <h2>Done</h2>
            <ExerciseDone />
          </div>
        </div>
      </div>
    );
  }
}
export default UsersList;
