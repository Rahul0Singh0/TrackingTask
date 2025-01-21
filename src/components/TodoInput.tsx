import { ChangeEvent, FormEvent, useState } from "react";

function TodoInput({ onSubmit }: { onSubmit?: (value: string) => void }): JSX.Element {
    const [value, setValue] = useState<string>("");
    function onFormSubmit(e: FormEvent<Element>): void {
        e.preventDefault();
        onSubmit?.(value);
        setValue("");
    }
    return (
        <>
           <form onSubmit={onFormSubmit}>
              <input 
                type="text"
                placeholder="Add your todo here"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                value={value}
              />
              <button type="submit">Add Todo</button>
           </form>
        </>
    );
}

export default TodoInput;