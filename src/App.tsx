import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";

export default function App() {

    const [todos, setTodos] = useState<string[]>([]);

    function onTodoFormSubmit(value: string) {
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
        </>
    );
}