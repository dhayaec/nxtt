import React, { ReactElement } from 'react'

interface ErrorMessageProps {
    isError: boolean
    msg?: string
}

export default function ErrorMessage({
    isError,
    msg = '',
}: ErrorMessageProps): ReactElement {
    return isError ? <span className="text-red-600 text-xs">{msg}</span> : null
}
