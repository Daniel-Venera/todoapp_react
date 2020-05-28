import React from 'react'

import TodoItem from "./TodoItem"
import Footer from "./Footer"
import Navbar from "./Navbar"


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
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
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.state.newTask) {
      const id = new Date().getTime()
      const nom = this.state.newTask
      const oneNewTask = { id: id, text: nom, completed: false }
      const tasks = this.state.todos.slice()
      tasks.unshift(oneNewTask)
      this.setState({ todos: tasks, newTask: '' })
    }
  }

  render() {
    let todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
    return (
      <div>
        <Navbar />
        <div className='todo-list'>
          <form onSubmit={this.handleSubmit}>
            <input className='newtask' type='text' placeholder='New Task' value={this.state.newTask} onChange={this.createTask}></input>
            <button>Add</button>
          </form>
          <br></br>
          {todoItems}
        </div>
        <Footer />
      </div>
    )
  }

}

export default App