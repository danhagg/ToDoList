import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      projects: []
    }
  }

  // This is a Life Cycle method that fires off everytime the component is rerendered.

  componentWillMount () {
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
  // get state, push new project to it, set state again
  handleAddProject (project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects});
  }

  // 1. Get state. 2. find index in all projects, 3. splice out 4. reset current as state
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
