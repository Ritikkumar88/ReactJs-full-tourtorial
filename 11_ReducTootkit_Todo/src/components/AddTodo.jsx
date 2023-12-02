import React, { useState } from 'react'
import {useDispatch} from 'react-redux'  // step: 11
import { addTodo } from '../features/Todo/todoSlice';

function AddTodo() {  //step-9

    // step-10;
    const [input , setInput] = useState('');
    const dispatch = useDispatch()  // using dispatch from step-11;

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }


    return (
        <form onSubmit={addTodoHandler} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default AddTodo;

