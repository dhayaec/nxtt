import React, { ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import { Button, ButtonWidth } from '../ui/Button'

interface LoginProps {
    name: string
}

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
                            type="text"
                            {...register('exampleRequired', { required: true })}
                        />
                        {errors.exampleRequired && (
                            <span className="text-red-600 text-xs">
                                This field is required
                            </span>
                        )}
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
