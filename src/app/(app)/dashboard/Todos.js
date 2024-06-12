'use client'
import { useTodo } from '@/hooks/todo'
import React, { createContext } from 'react'
import Loading from './Loading'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'

export const TodoContext = createContext({ todos: null })

const Todos = () => {
    const { todos } = useTodo()
    return (
        <TodoContext.Provider value={todos}>
            <div className="flex flex-col gap-6">
                <AddTodo />
                {todos ? <TodoItem /> : <Loading />}
            </div>
        </TodoContext.Provider>
    )
}

export default Todos
