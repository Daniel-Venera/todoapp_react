import React from 'react'

import TodoItem from "./TodoItem"
import todosData from "./todosData"
import Footer from "./Footer"
import Navbar from "./Navbar"


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData,
      newTask: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.createTask = this.createTask.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedToDos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      }
      )
      return {
        todos: updatedToDos
      }
    }
    )
  }

  createTask(event) {
    this.setState({
      newTask: event.target.value
    }
    )
    console.log(this.state.todos)
  }

  handleSubmit(event) {
    event.preventDefault()
    const id = new Date().getTime()
    const nom = this.state.newTask
    const oneNewTask = {id: id, text: nom, completed: false}
    const tasks = this.state.todos.slice()
    tasks.push(oneNewTask)
    this.setState({todos: tasks})
  }

  render() {
    let todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
    return (
      <div>
        <Navbar />
        
        <div className='todo-list'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='New Task' value={this.state.newTask} onChange={this.createTask}></input>
          <button>Add</button>
          <h1>{this.state.newTask}</h1>
        </form>
        {todoItems}
        </div>
        <Footer />
      </div>
    )
  }

}

export default App