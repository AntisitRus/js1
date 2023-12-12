import Todo from "./Todo";
import styles from './TodoList.module.css'

function TodoList({ todos, deleteTodo, toggleTodo }) {
    return (
        <div className={styles.todoListContainer}>
            {!todos.length && <h2>Милорд, ваши заметки еще пусты.</h2>}
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo} />
            ))}
        </div>
    )
}

export default TodoList;