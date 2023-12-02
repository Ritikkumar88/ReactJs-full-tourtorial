
// step-1
import {configureStore} from '@reduxjs/toolkit'

// step-2
export const store = configureStore({
    reducer: todoReducer
})   // step-10 : object values

// step-9
import todoReducer from '../features/Todo/todoSlice'
