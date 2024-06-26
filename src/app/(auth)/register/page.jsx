'use client'

import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

const Page = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({
            first_name,
            last_name,
            username,
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
        })
    }

    return (
        <form onSubmit={submitForm}>
            {/* Name */}
            <div>
                <Label htmlFor="first_name">First Name</Label>

                <Input
                    type="text"
                    className="block mt-1 w-full"
                    id="first_name"
                    value={first_name}
                    onChange={event => setFirst_name(event.target.value)}
                    required
                    autoFocus
                />
                <InputError messages={errors.first_name} className="mt-2" />
            </div>

            <div className="mt-4">
                <Label htmlFor="last_name">Last Name</Label>

                <Input
                    id="last_name"
                    type="text"
                    value={last_name}
                    className="block mt-1 w-full"
                    onChange={event => setLast_name(event.target.value)}
                    required
                    autoFocus
                />

                <InputError messages={errors.last_name} className="mt-2" />
            </div>

            <div className="mt-4">
                <Label htmlFor="username">Username</Label>

                <Input
                    id="username"
                    type="text"
                    value={username}
                    className="block mt-1 w-full"
                    onChange={event => setUsername(event.target.value)}
                    required
                    autoFocus
                />

                <InputError messages={errors.username} className="mt-2" />
            </div>

            {/* Email Address */}
            <div className="mt-4">
                <Label htmlFor="email">Email</Label>

                <Input
                    id="email"
                    type="email"
                    value={email}
                    className="block mt-1 w-full"
                    onChange={event => setEmail(event.target.value)}
                    required
                />

                <InputError messages={errors.email} className="mt-2" />
            </div>

            {/* Password */}
            <div className="mt-4">
                <Label htmlFor="password">Password</Label>

                <Input
                    id="password"
                    type="password"
                    value={password}
                    className="block mt-1 w-full"
                    onChange={event => setPassword(event.target.value)}
                    required
                    autoComplete="new-password"
                />

                <InputError messages={errors.password} className="mt-2" />
            </div>

            {/* Confirm Password */}
            <div className="mt-4">
                <Label htmlFor="passwordConfirmation">Confirm Password</Label>

                <Input
                    id="passwordConfirmation"
                    type="password"
                    value={passwordConfirmation}
                    className="block mt-1 w-full"
                    onChange={event =>
                        setPasswordConfirmation(event.target.value)
                    }
                    required
                />

                <InputError
                    messages={errors.password_confirmation}
                    className="mt-2"
                />
            </div>

            <div className="flex items-center justify-between mt-4">
                <Link
                    href="/login"
                    className="underline text-sm hover:text-secondary">
                    Already registered?
                </Link>

                <button type="submit" className="btn btn-outline">
                    Register
                </button>
            </div>
        </form>
    )
}

export default Page
