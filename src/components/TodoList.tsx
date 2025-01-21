function TodoList({ listOfTodos }: { listOfTodos: string[] }): JSX.Element{

    return (
        <>
           <ul>
            {listOfTodos?.map((todo) => {
                return <li key={todo}>{todo}</li>;
            })}
           </ul>
        </>
    );
}

export default TodoList;