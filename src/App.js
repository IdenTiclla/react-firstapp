import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {tasks} from './tasks.json'
import TaskForm from './components/TaskForm'




class App extends Component {
  constructor() { // es el primero que se ejecuta antes de render
    super(); // heredamos toda la funcionalidad de Component de react
    this.state = { // el estado es la manera en la que estamos al tanto de los datos en la app
      tasks: tasks,
    }
    this.handleAddTask = this.handleAddTask.bind(this)
    
  }
  handleAddTask(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }
  removeTask(index) {
    if (window.confirm('Are you sure you want to delete it?')) {
      this.setState({
        tasks: this.state.tasks.filter((e, i) => {
          return i != index
        })
      })
    }
  }

  render() {
    const tasks = this.state.tasks.map((task, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{task.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {task.priority}
              </span>
            </div>
            <div className="card-body">
              <p> {task.description} </p>
              <p> {task.responsible} </p>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-danger" onClick={this.removeTask.bind(this, i)}>Delete</button>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">tasks <span className="badge badge.pill badge.light ml-2">{this.state.tasks.length}</span></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active"><a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a></li>
              <li className="nav-item"><a className="nav-link" href="#">Features</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Pricing</a></li>
              <li className="nav-item"><a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a></li>
            </ul>
          </div>
        </nav>
        
        <div className="container">
          <div className="row mt-4">
            
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <TaskForm onAddTask={this.handleAddTask} />
            </div>

            <div className="col-md-8">
              <div className="row">
                {tasks}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}


export default App;
