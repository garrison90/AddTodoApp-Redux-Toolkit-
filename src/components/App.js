import React from 'react'
import AddTodo from '../features/todos/AddTodo'
import VisibleTodoList from '../features/todos/VisibleTodoList'
import Footer from '../features/filters/Footer'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
