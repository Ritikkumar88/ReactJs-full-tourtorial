import {createContext , useContext} from "react"

export const toDoContext = createContext({
    // propwrty*********
    todos: [
        {
            id: 1,
            todo: " todod msg",
            completed: false,
        } 
    ],
    // functionalotys******
    addtodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(toDoContext)
}

export const TodoProvider = toDoContext.Provider