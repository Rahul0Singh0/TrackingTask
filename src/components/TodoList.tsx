import { useCallback } from "react";
import TodoListItem from "./TodoListItem";

type T = {
    listOfTodos: string[],
    onDeleteTodo: (t: string) => void
};

function TodoList({ listOfTodos, onDeleteTodo }: T): JSX.Element{

    const deleteTodo = (t: string): void => {
        console.log(`Deleting todo with id: ${t}`);
        onDeleteTodo?.(t);
    }

    const memoDeleteTodoCallback = useCallback(deleteTodo, [onDeleteTodo]);
    return (
        <>
           <ul>
            {listOfTodos?.map((todo) => {
                return <TodoListItem todo={todo} onDelete={memoDeleteTodoCallback} />
            })}
           </ul>
        </>
    );
}

export default TodoList;