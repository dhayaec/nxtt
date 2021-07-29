import React, { ReactElement } from 'react'

interface HeaderProps {
    name: string
}

export default function Header({ name }: HeaderProps): ReactElement {
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}
