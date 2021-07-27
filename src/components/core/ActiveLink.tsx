import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export interface ActiveLinkProps extends LinkProps {
    children: React.ReactElement
}

export const ActiveLink = ({ href, children }: ActiveLinkProps): JSX.Element => {
    const router = useRouter()

    let className = children.props.className || ''
    if (router.pathname === href) {
        className = `${className} underline text-blue-700`
    }

    return (
        <Link replace={href === '/'} href={href}>
            {React.cloneElement(children, { className })}
        </Link>
    )
}