import {createContext , useContext} from "react"

export const toDoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " todod msg",
            completed: false,
        } 
    ],
    addtodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(toDoContext)
}

export const Todoprovider = toDoContext.Provider