import React from 'react'
import ReactDOM from 'react-dom'

import TodoItem from "./TodoItem"
import todosData from "./todosData"
import Footer from "./Footer"
import Navbar from "./Navbar"


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
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

  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
    return (
      <div>
        <Navbar />
        <div className='todo-list'>
        {todoItems}
        </div>
        <Footer />
      </div>
    )
  }

}

export default App