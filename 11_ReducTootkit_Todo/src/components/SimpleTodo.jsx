import React from 'react'
import { UseSelector , useDispatch, useSelector } from 'react-redux'
import { removeTodo
 } from '../features/Todo/todoSlice' 

function SimpleTodo() {
    const todods = useSelector((state) => state.SimpleTodo)
    const dispatch = useDispatch()

  return (
    <>
    <div>MyTodo's</div>
    {todods.map((todo) => {
        <li key={todo.id}>
            {todo.text}
        <button onClick={() => dispatch(removeTodo(todo.id))}
        >X</button>
        </li>
    })}
    </>
  )
}

export default SimpleTodo