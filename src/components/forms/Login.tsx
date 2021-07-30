import React, { ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import { Button, ButtonWidth } from '../ui/Button'

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

    const onSubmit = (data) => console.log(data)

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col px-4 w-full md:w-1/2 lg:w-2/6 mx-auto">
                    <p>{name}</p>
                    <div className="field mt-2">
                        <input
                            className="w-full"
                            type="text"
                            {...register('example', { required: true })}
                            placeholder="Full name"
                        />
                        {errors.example && (
                            <span className="text-red-600 text-xs">
                                This field is required
                            </span>
                        )}
                    </div>
                    <div className="field mt-2">
                        <input
                            className="w-full"
                            type="email"
                            {...register('exampleRequired', { required: true })}
                            placeholder="Email address"
                        />
                        {errors.exampleRequired && (
                            <span className="text-red-600 text-xs">
                                This field is required
                            </span>
                        )}
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
                        {errors.age && (
                            <span className="text-red-600 text-xs">
                                This field is required
                            </span>
                        )}
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
                        <Button
                            width={ButtonWidth.full}
                            label="Login"
                            type="submit"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}
