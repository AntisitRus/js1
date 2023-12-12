import { useState } from 'react';
import TodoForm from './component/Todos/TodoForm';
import TodoList from './component/Todos/TodoList';
import './App.css';
import { v4 as uuidv4 } from 'uuid'
import TodosActions from './component/Todos/TodoActions';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4()
    }

    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    )
  }

  const resetTodosHandler = () => {
    setTodos([])
  }

  const deleteComplitedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const completedTodoCount = todos.filter((todo) => todo.isCompleted).length;
  console.log(completedTodoCount)

  return (
    <div className="App">
      <h1>Мои Заметки</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          resetTodos={resetTodosHandler}
          deleteComplitedTodos={deleteComplitedTodosHandler}
          completedTodoExist={!!completedTodoCount}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler} />

      {completedTodoCount > 0 && (  
        <h2>{`Мирорд, у вас завершены ${completedTodoCount} ${  
          completedTodoCount > 1 ? 'задачи' : 'задач'
        }`}</h2>
      )}
    </div>
  )
}

export default App;
