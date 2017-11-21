import React, { Component } from 'react';

class ToDoItem extends Component {
  render () {
    return (
      <li className='ToDo'>
        <strong>{this.props.todo.title}</strong>
      </li>
    );
  }
}

export default ToDoItem;
