import InputError from '@/components/InputError'
import { useTodo } from '@/hooks/todo'
import React, { useState } from 'react'

const AddTodo = () => {
    const [todo, setTodo] = useState('')
    const [errors, setErrors] = useState([])
    const { store } = useTodo()
    const storeTodo = e => {
        e.preventDefault()
        store({
            todo,
            setErrors,
        })
    }
    return (
        <>
            <form className="flex" onSubmit={storeTodo}>
                <input
                    value={todo}
                    onChange={e => setTodo(e.target.value)}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered flex-grow flex-shrink"
                    required
                />
                <button className="btn flex-shrink-0">Add Todo</button>
            </form>

            <InputError messages={errors.todo} className="mt-2" />
        </>
    )
}

export default AddTodo
