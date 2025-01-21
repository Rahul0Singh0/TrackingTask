import { memo } from "react";

type T = {
    todo: string,
    onDelete: (t: string) => void
}

function TodoListItem({ todo, onDelete }: T): JSX.Element {

    return(
        <>
           <li className="list-disc">
            {todo}
            <button onClick={() => onDelete(todo)}>X</button>
           </li>
        </>
    );
}

export default memo(TodoListItem);