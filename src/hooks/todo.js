import useSWR from 'swr'
import axios from '@/lib/axios'

export const useTodo = () => {
    const {
        data: todos,
        error,
        mutate,
    } = useSWR('/api/todos', () =>
        axios
            .get('/api/todos')
            .then(res => res.data)
            .catch(error => console.log('Something went wrong', error)),
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const store = async ({ setErrors, ...props }) => {
        await csrf()
        setErrors([])

        try {
            await axios.post('/api/todos', props)
            mutate() // Refetch data after successful creation
        } catch (error) {
            if (error.response?.status !== 422) throw error // Re-throw non-validation errors

            setErrors(error.response.data.errors) // Set validation errors
        }
    }

    const update = async ({ setErrors, id, ...props }) => {
        await csrf()
        setErrors([])

        try {
            await axios.put(`/api/todos/${id}`, props)
            mutate() // Refetch data after successful creation
        } catch (error) {
            if (error.response?.status !== 422) throw error // Re-throw non-validation errors

            setErrors(error.response.data.errors) // Set validation errors
        }
    }

    const destroy = async ({ setErrors, id }) => {
        await csrf()
        setErrors([])

        try {
            await axios.delete(`/api/todos/${id}`)
            mutate() // Refetch data after successful creation
        } catch (error) {
            if (error.response?.status !== 422) throw error // Re-throw non-validation errors

            setErrors(error.response.data.errors) // Set validation errors
        }
    }

    return {
        todos,
        store,
        update,
        destroy
    }
}
