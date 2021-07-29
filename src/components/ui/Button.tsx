import React, { ReactElement } from 'react'

export enum ButtonWidth {
    regular = 'w-auto',
    full = 'w-full',
}

export interface ButtonProps extends React.ButtonHTMLAttributes<any> {
    label: string
    disabled?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    color?: string
    width?: ButtonWidth
}

export const Button = ({
    label,
    disabled = false,
    onClick = () => null,
    color = 'purple',
    width = ButtonWidth.regular,
    type = 'button',
}: ButtonProps): ReactElement => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${width} px-6 py-2 my-2 text-white rounded-md bg-${color}-600 hover:bg-${color}-700 focus:outline-none focus:bg-${color}-800`}
        >
            {label}
        </button>
    )
}
