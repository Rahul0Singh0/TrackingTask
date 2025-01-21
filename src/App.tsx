import { useCallback, useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App(): JSX.Element {

    const [todos, setTodos] = useState<string[]>([]);

    function deleteTodoById(id: string): void {
        const newTodos = todos.filter(todo => todo !== id);
        console.log(newTodos);
        setTodos(newTodos);
    }

    const memoDeleteTodoCallback = useCallback(deleteTodoById, [todos]);

    function onTodoFormSubmit(value: string): void {
        if(value) {
            setTodos([...todos, value]);
        }
    }

    useEffect(() => {
        console.log("Todos: ", todos);
    }, [todos]);

    return (
        <>
           <TodoInput onSubmit={onTodoFormSubmit}/>
           <TodoList listOfTodos={todos} onDeleteTodo={memoDeleteTodoCallback} />
        </>
    );
}