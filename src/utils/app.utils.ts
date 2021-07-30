import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export const isMounted = (): boolean => {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])
    return mounted
}

export interface useApiProps {
    isLoading: boolean
    hasError: boolean
    setUrl: Dispatch<SetStateAction<string>>
    data: Record<string, unknown>
}

export const useApi = (initialUrl: string, initialData = {}): useApiProps => {
    const [url, setUrl] = useState(initialUrl)
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [fetchedData, setFetchedData] = useState(initialData)

    useEffect(() => {
        let unmounted = false

        const handleFetchResponse = (response) => {
            if (unmounted) return initialData

            setHasError(!response.ok)
            setIsLoading(false)
            return response.ok && response.json ? response.json() : initialData
        }

        const fetchData = () => {
            setIsLoading(true)
            return fetch(url)
                .then(handleFetchResponse)
                .catch(handleFetchResponse)
        }

        if (initialUrl && !unmounted)
            fetchData().then((data) => !unmounted && setFetchedData(data))

        return () => {
            unmounted = true
        }
    }, [url])

    return { isLoading, hasError, setUrl, data: fetchedData }
}
