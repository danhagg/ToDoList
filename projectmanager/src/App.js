import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import uuid from 'uuid';
import './App.css';
import $ from 'jquery' //npm install jquery and import

// added todos[]
class App extends Component {
  constructor () {
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  // Create a function that will be run in both componentWillMount + componentDidMount
  // Will use JQuery to make an http request
  getTodos () {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: 'false',
      success: function (data) {
        this.setState({todos: data}), function () {
          console.log(this.state);
        };
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
      }
    });
  }

  getProjects () {
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: 'Business website',
        category: 'Web Design'
      },
      {
        id: uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        id: uuid.v4(),
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]});
  }

  // LifeCycle functions that get Projects and ToDos
  componentWillMount () {
    this.getProjects();
    this.getTodos();
  }

  componentDidMount () {
    this.getTodos();
  }

  handleAddProject (project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects});
  }

  handleDeleteProject (id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects: projects});
  }

  render () {
    return (
      <div className='App'>
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      </div>
    );
  }
}

export default App;
