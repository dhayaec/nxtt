import { useEffect, useState } from 'react'

export const isMounted = (): boolean => {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])
    return mounted
}
