
// step-3
import { createSlice, nanoid } from "@reduxjs/toolkit";

// step-4
const initialState = {
    todos: [{id: 1, text: "hello world"}]
}

// step-6
function sayHello(state, action){    // in parameter we will always get two things;
    const newTodo = {
        id: nanoid(),
        text: action.payload,
    }
    state.todos.push(newTodo)
}

// step-5
export const todoSlice = createSlice({
    name: 'todo',
    initialState,   // step-4 used
    reducers: {     // reducer
        // properties of app;
        addTodo : sayHello,   // step-6 used
        removeTodo: (state , action) => {     // function defined
            state.todos = state.todos.filter((todo) => {todo.id !== action.payload})
        }  , 

    }
})

// step-8
export const {addTodo , removeTodo} = todoSlice.actions   // export functionality
export default todoSlice.reducer  