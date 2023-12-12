import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";
import styles from './TodoActions.module.css'

function TodosActions({ resetTodos, deleteComplidetTodos, completedTodosExist }) {
    return (
        <div className={styles.TodosActionsContainer}>
            <>
                <Button 
                title="Обновить заметки" 
                onClick={resetTodos}>
                    <RiRefreshLine />
                </Button>
                <Button 
                title="Удалить завершенные заметки" 
                onClick={deleteComplidetTodos}
                disabled={!completedTodosExist}
                >
                    <RiDeleteBin2Line />
                </Button>
            </>
        </div>
    )
}

export default TodosActions;