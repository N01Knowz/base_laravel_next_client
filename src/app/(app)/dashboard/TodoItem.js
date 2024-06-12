import React, { useContext, useEffect, useState } from 'react'
import { TodoContext } from './Todos'
import { useTodo } from '@/hooks/todo'

const TodoItem = () => {
    const todo = useContext(TodoContext)
    const { update, destroy } = useTodo()
    const data = todo.data
    const [errors, setErrors] = useState([])
    const updateTodo = (id, completed) => {
        console.log(id, completed)
        update({
            completed,
            id,
            setErrors,
        })
    }
    const deleteTodo = id => {
        destroy({
            id,
            setErrors,
        })
    }

    // useEffect(() => console.log(errors), [errors])
    return (
        <div className="flex flex-col gap-4">
            {data.map(value => (
                <div key={value.id} className="flex justify-between">
                    <p>
                        {value.todo} - {value.completed}
                    </p>
                    <div className="flex gap-6">
                        <button
                            className={`btn ${value.completed ? 'btn-error' : 'btn-success'} btn-sm w-24`}
                            onClick={e =>
                                updateTodo(value.id, value.completed)
                            }>
                            {value.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button
                            className="btn btn-error btn-sm w-24"
                            onClick={e =>
                                deleteTodo(value.id)
                            }>
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TodoItem
