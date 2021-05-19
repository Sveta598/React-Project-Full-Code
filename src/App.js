import React from 'react';
import TodoList from './Todo/TodoList'
import Context from './context'
import AddTodo from './Todo/AddTodo'

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Сходить в магазин за продуктами'},
    {id: 2, completed: true, title: 'Убрать в квартире'},
    {id: 3, completed: false, title: 'Сделать приложение на React'},
    {id: 4, completed: false, title: 'Сделать приложение на Redux'}
  ])
  
  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([
        {
          title,
          id: Date.now(),
          completed: false
        }
      ])
    )
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>Список задач</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (<TodoList todos={todos} onToggle={toggleTodo} />) : (<p>Задач пока нет!</p>)}
        
      </div>
    </Context.Provider>
  )
}

export default App;
