import { useState } from 'react'
import './App.css'

interface Todo {
  id: number
  text: string
  completed: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [inputValue, setInputValue] = useState('')

  const addTodo = () => {
    if (inputValue.trim() === '') return
    
    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    }
    
    setTodos([...todos, newTodo])
    setInputValue('')
  }

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  return (
    <div className="app">
      <div className="container">
        <h1>📝 Todo List</h1>
        
        <div className="input-section">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="What needs to be done?"
            className="todo-input"
          />
          <button onClick={addTodo} className="add-button">
            Add
          </button>
        </div>

        <div className="todos-list">
          {todos.length === 0 ? (
            <p className="empty-state">No todos yet. Add one above!</p>
          ) : (
            todos.map(todo => (
              <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="todo-checkbox"
                />
                <span className="todo-text">{todo.text}</span>
                <button onClick={() => deleteTodo(todo.id)} className="delete-button">
                  ×
                </button>
              </div>
            ))
          )}
        </div>

        {todos.length > 0 && (
          <div className="stats">
            {todos.filter(t => !t.completed).length} item(s) left
          </div>
        )}
      </div>
    </div>
  )
}

export default App
