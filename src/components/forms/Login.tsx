import React, { ReactElement, useState } from 'react'
import { useForm } from 'react-hook-form'
import ErrorMessage from '../ui/ErrorMessage'

interface LoginProps {
    name: string
}

const ages = [18, 19, 20]

export default function Login({ name }: LoginProps): ReactElement {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const [data, setData] = useState({})

    const onSubmit = (data) => {
        setData(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col px-4 w-full md:w-2/3 lg:w-1/3 mx-auto">
                    <p>{name}</p>
                    <div className="field mt-2">
                        <input
                            autoComplete="off"
                            className="w-full"
                            type="text"
                            {...register('name', { required: true })}
                            placeholder="Full name"
                        />
                        <ErrorMessage
                            isError={errors.name}
                            msg="This field is required"
                        />
                    </div>
                    <div className="field mt-2">
                        <input
                            autoComplete="off"
                            className="w-full"
                            type="email"
                            {...register('email', { required: true })}
                            placeholder="Email address"
                        />
                        <ErrorMessage
                            isError={errors.email}
                            msg="This field is required"
                        />
                    </div>
                    <div className="field mt-2">
                        <input
                            autoComplete="off"
                            className="w-full"
                            type="search"
                            {...register('search')}
                            placeholder="Search"
                        />
                    </div>
                    <div className="field mt-2">
                        <select
                            name="tp"
                            id="tp"
                            {...register('age', { required: true })}
                            className="w-full"
                        >
                            <option value="">Age</option>
                            {ages.map((i) => (
                                <option key={i} value={i}>
                                    {i}
                                </option>
                            ))}
                        </select>
                        <ErrorMessage
                            isError={errors.age}
                            msg="This field is required"
                        />
                    </div>

                    <div className="field mt-2">
                        <label className="block">
                            <span className="text-gray-700">
                                When is your event?
                            </span>
                            <input
                                autoComplete="off"
                                {...register('date', { required: true })}
                                type="date"
                                className="mt-1 block w-full"
                            />
                            <ErrorMessage
                                isError={errors.date}
                                msg="This field is required"
                            />
                        </label>
                    </div>

                    <div className="field mt-2">
                        <textarea
                            className="w-full"
                            {...register('description', { required: true })}
                            placeholder="Enter description"
                        />
                    </div>
                    <div className="field mt-2 flex items-center">
                        <input
                            autoComplete="off"
                            {...register('remember_me', { required: true })}
                            id="remember_me"
                            name="remember_me"
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label
                            htmlFor="remember_me"
                            className="ml-2 block text-sm text-gray-900"
                        >
                            Remember me
                        </label>
                    </div>
                    <div className="field mt-2 text-center">
                        <button
                            className="btn btn-indigo btn-full"
                            type="submit"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
            <div className="flex flex-col px-4 w-full md:w-1/2 lg:w-2/6 mx-auto">
                <ul>
                    <li>
                        {Object.keys(data).map((i) => (
                            <p key={i}>{`${i} : ${data[i]}`}</p>
                        ))}
                    </li>
                </ul>
            </div>
        </div>
    )
}
