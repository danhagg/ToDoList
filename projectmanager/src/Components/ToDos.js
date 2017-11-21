import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDos extends Component {
  // deleteProject (id) {
  //   this.props.onDelete(id);
  render () {
    let todoItems;
    if (this.props.todos) {
      todoItems = this.props.todos.map(todo => {
        return (
          <todoItem key={todo.title} todo={todo} />
        );
      });
    }
    return (
      <div className='ToDos'>
        <h3>ToDo List</h3>
        {todoItems}
      </div>
    );
  }
}

export default ToDos;
