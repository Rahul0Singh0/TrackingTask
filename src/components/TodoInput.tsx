import { ChangeEvent, FormEvent, useState } from "react";

type T = {
    onSubmit?: (value: string) => void,
}

function TodoInput({ onSubmit }: T): JSX.Element {
    const [value, setValue] = useState<string>("");
    function onFormSubmit(e: FormEvent<Element>): void {
        e.preventDefault();
        onSubmit?.(value);
        setValue("");
    }
    return (
        <>
           <h1 className="text-5xl font-bold mb-4">Tracking Task</h1>
           <form onSubmit={onFormSubmit}>
              <input
                className="border-2 border-gray-500 p-2 rounded-md "
                type="text"
                placeholder="Add your todo here"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                value={value}
              />
              <button className="ml-5 bg-slate-600 text-white w-20 h-11 rounded-md" type="submit">
                Add Task
              </button>
           </form>
        </>
    );
}

export default TodoInput;